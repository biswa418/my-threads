"use client";

import React, { useRef, useState } from "react";
import { toast } from "sonner";

type ComposeTweetFormProps = {
  serverAction: any;
};

const TweetForm = ({ serverAction }: ComposeTweetFormProps) => {
  const [tweet, setTweet] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitTweet = async (data: FormData) => {
    setLoading(true);

    if (
      !data ||
      !data.get("tweet") ||
      data.get("tweet")?.toString().trim().length === 0
    ) {
      toast.error("Tweet cannot be empty!");
      setTweet("");
      setLoading(false);
      return;
    }

    try {
      const res = await serverAction(data);

      if (res?.tweetError) {
        setTweet("");
        setLoading(false);
        return toast.error(res.error.message);
      }

      toast.success("Tweet sent successfully!");
      setTweet("");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <form
      action={handleSubmitTweet}
      autoComplete="off"
      className="flex flex-col justify-between w-full h-full"
    >
      <div className="flex space-x-2 border-neutral-800">
        <input
          type="text"
          name="tweet"
          autoComplete="off"
          value={tweet}
          disabled={loading}
          onChange={(e) => setTweet(e.target.value)}
          className="w-full autofill:bg-none h-full bg-transparent p-3 outline-none border-none text-lg placeholder:text-slate-600"
          placeholder="What's on your mind?"
        />
      </div>

      <div className="w-full justify-between items-center flex">
        <div></div>

        <div>
          <button
            type="submit"
            className="w-full text-center rounded-full bg-prime hover:bg-opacity-80 transition duration-200 px-4 py-2 text-sm"
          >
            {!loading ? "Tweet" : "Tweeting"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;
