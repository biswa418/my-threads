"use client";

import React, { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./dialog";
import { Input } from "./input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./button";

const AuthModal = () => {
  const [isOpen, setIsopen] = useState(false);
  const [email, setEmail] = useState("");
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error?.status === 401) {
        setIsopen(true);
      }
    }

    getUser();
  }, [supabase]);

  async function signInWithEmail(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
        emailRedirectTo: "https://example.com/welcome",
      },
    });

    return { data, error };
  }

  const handleModalSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { data, error } = await signInWithEmail(email);

    if (error) {

    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsopen}>
      <DialogContent className="bg-black p-6">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            You will receive a magic link in your mail
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleModalSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="text-black mb-4"
          />
          <DialogFooter className="flex w-full justify-end">
            <Button
              type="submit"
              className="bg-prime text-white hover:bg-opacity-80"
            >
              Login
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
