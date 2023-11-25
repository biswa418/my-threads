import { supabaseServer } from ".";

export const likeTweet = async({
    tweetId,
    userId
}:{
    tweetId: string,
    userId: string
}) => {
    const {data, error} = await supabaseServer.from('likes').insert({
        tweet_id: tweetId,
        user_id: userId
    });

    console.log({data, error});
}