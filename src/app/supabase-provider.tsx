"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

import { useRouter } from "next/navigation";

import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

export const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  );
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    supabase.auth.getSession().then((res) => {
      if (!res.data.session) {
        setIsOpen(true);
        return;
      }
      setUser(res.data.session.user);
      console.log(res.data.session.user);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const handleModalSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);

    // first check if the username exists or not
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("username", username.trim());

    if (data && data?.length > 0) {
      return toast.error("Username already exists, please try again");
    }

    const { data: signUpData, error: signUpError } =
      await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
        //   shouldCreateUser: false,
          data: {
            username,
            full_name: fullName,
          },
        },
      });

    if (signUpError) {
      return toast.error(signUpError.message);
    }
    toast.success("Magic link sent successfully");
    setIsLoading(false);
  };

  return (
    <Context.Provider value={{ supabase }}>
      <>
        <Toaster />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="bg-black p-6">
            <DialogHeader>
              <DialogTitle>Sign in</DialogTitle>
              <DialogDescription className="text-sm text-gray-300">
                You will receive a magic link in your mail
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={async (e) => handleModalSubmit(e)}>
              <Input
                type="email"
                placeholder="email"
                value={email}
                className="text-black mb-2"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="username"
                min={3}
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className="text-black mb-2"
              />
              <Input
                type="text"
                placeholder="your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="text-black mb-2"
              />

              <DialogFooter className="flex w-full justify-end my-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-prime text-white hover:bg-opacity-80"
                >
                  Login
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        {children}
      </>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
