import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  primaryKey,
  uuid,
  AnyPgColumn,
  uniqueIndex,
  boolean,
  alias,
} from "drizzle-orm/pg-core";

// profiles
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("updated_at").defaultNow().notNull(),
  username: text("username").notNull(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
});

export type Profile = typeof profiles.$inferInsert;

export const profilesRelations = relations(profiles, ({ many }) => ({
  tweets: many(tweets),
  likes: many(likes),
  bookmarks: many(bookmarks),
  replies: many(reply),
}));

//tweets
export const tweets = pgTable("tweets", {
  id: uuid("id").primaryKey().defaultRandom(),
  text: text("text").notNull(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => profiles.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  isReply: boolean("is_reply").notNull().default(false),
  replyId: uuid("reply_id").references((): AnyPgColumn => tweets.id),
});

export type Tweet = typeof tweets.$inferInsert;

export const tweetsReplies = alias(tweets, "tweets_replies");

export const tweetsRelations = relations(tweets, ({ many, one }) => ({
  profile: one(profiles, {
    fields: [tweets.authorId],
    references: [profiles.id],
  }),
  tweet: one(tweets, {
    fields: [tweets.replyId],
    references: [tweets.id],
  }),
  likes: many(likes),
  bookmarks: many(bookmarks),
  replies: many(reply),
}));

//hashtags
export const hashtag = pgTable("hashtag", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
});

export type Hashtag = typeof hashtag.$inferInsert;

//tweet_hashtags
export const tweetHashtag = pgTable(
  "tweet_hashtag",
  {
    tweetId: uuid("tweet_id")
      .notNull()
      .references(() => tweets.id),
    hashtagId: uuid("hashtag_id")
      .notNull()
      .references(() => hashtag.id),
  },
  (tweet_hashtag) => ({
    tweetHashtagPrimaryKey: primaryKey(
      tweet_hashtag.tweetId,
      tweet_hashtag.hashtagId
    ),
  })
);

//reply
export const reply = pgTable("reply", {
  id: uuid("id").primaryKey().defaultRandom(),
  text: text("text"),
  userId: uuid("user_id")
    .notNull()
    .references(() => profiles.id),
  tweetId: uuid("tweet_id").references(() => tweets.id),
  replyId: uuid("reply_id").references((): AnyPgColumn => reply.id),
});

export const repliesRelations = relations(reply, ({ one }) => ({
  profile: one(profiles, {
    fields: [reply.userId],
    references: [profiles.id],
  }),
}));

//likes
export const likes = pgTable(
  "likes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => profiles.id),
    tweetId: uuid("tweet_id")
      .notNull()
      .references(() => tweets.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (likes) => ({
    uniqueLikeIndex: uniqueIndex("likes__user_id_tweet_id__idx").on(
      likes.userId,
      likes.tweetId
    ),
  })
);

export type Likes = typeof likes.$inferInsert;

export const likesRelations = relations(likes, ({ one }) => ({
  profile: one(profiles, {
    fields: [likes.userId],
    references: [profiles.id],
  }),
}));

//bookmarks
export const bookmarks = pgTable(
  "bookmarks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => profiles.id),
    tweetId: uuid("tweet_id")
      .notNull()
      .references(() => tweets.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (bookmarks) => ({
    uniqueBookmarkIndex: uniqueIndex("bookmarks__user_id_tweet_id__idx").on(
      bookmarks.userId,
      bookmarks.tweetId
    ),
  })
);

export type Bookmarks = typeof bookmarks.$inferInsert;

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  profile: one(profiles, {
    fields: [bookmarks.userId],
    references: [profiles.id],
  }),
}));

export const follows = pgTable("follows", {
  id: uuid("id").primaryKey().primaryKey().defaultRandom(),
  followerId: uuid("follower_id").references(() => profiles.id),
  followingId: uuid("following_id").references(() => profiles.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Follows = typeof follows.$inferInsert;
