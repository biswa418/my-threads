import React from "react";
import { createBrowserClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import TweetForm from "../client-components/TweetForm";

const ComposeTweet = () => {
  async function submitTweet(formData: FormData) {
    "use server";

    const tweet = formData.get("tweet");
    
    if (!tweet) return;

    const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey = process.env.NEXT_SUPABASE_SECRET_KEY;

    if(!supabaseURL || !supabaseSecretKey){
        console.error('Supabase creds not provided!!');
        return {
            error: {
                message: "Supabase creds not provided!!"
            }
        }
    }

    const cookieStore = cookies();
    const supabaseServer = createBrowserClient<Database>(
      supabaseURL!,
      supabaseSecretKey!,
    );

    const supabase = createBrowserClient<Database>(
        supabaseURL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            get(name: string) {
              return cookieStore.get(name)?.value;
            },
          },
        }
      );

    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) return;

    const { data: tweetData, error: tweetError } = await supabaseServer.from('tweets').insert({
        author_id: userData.user.id,
        text: tweet.toString().trim()
    })

    return {tweetData, tweetError}
  }

  return (
    <TweetForm serverAction={submitTweet} />
  );
};

export default ComposeTweet;
