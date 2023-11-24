export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string | null
          id: string
          tweet_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id: string
          tweet_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      follows: {
        Row: {
          created_at: string | null
          follower_id: string
          following_id: string
        }
        Insert: {
          created_at?: string | null
          follower_id: string
          following_id: string
        }
        Update: {
          created_at?: string | null
          follower_id?: string
          following_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follows_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      hashtag: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string | null
          id: string
          tweet_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          tweet_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          tweet_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          updated_at: string | null
          username: string
        }
        Insert: {
          full_name?: string | null
          id: string
          updated_at?: string | null
          username: string
        }
        Update: {
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reply: {
        Row: {
          id: string
          reply_id: string | null
          text: string | null
          tweet_id: string | null
          user_id: string | null
        }
        Insert: {
          id: string
          reply_id?: string | null
          text?: string | null
          tweet_id?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          reply_id?: string | null
          text?: string | null
          tweet_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reply_reply_id_fkey"
            columns: ["reply_id"]
            isOneToOne: false
            referencedRelation: "reply"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reply_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reply_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      tweet_hashtag: {
        Row: {
          hashtag_id: string
          tweet_id: string
        }
        Insert: {
          hashtag_id: string
          tweet_id: string
        }
        Update: {
          hashtag_id?: string
          tweet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tweet_hashtag_hashtag_id_fkey"
            columns: ["hashtag_id"]
            isOneToOne: false
            referencedRelation: "hashtag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tweet_hashtag_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          }
        ]
      }
      tweets: {
        Row: {
          author_id: string
          created_at: string | null
          id: string
          text: string
          updated_at: string | null
        }
        Insert: {
          author_id: string
          created_at?: string | null
          id?: string
          text: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string
          created_at?: string | null
          id?: string
          text?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tweets_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
