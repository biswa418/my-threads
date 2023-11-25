import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../database.types";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.NEXT_SUPABASE_SECRET_KEY;

export const supabaseServer = createBrowserClient<Database>(
  supabaseURL!,
  supabaseSecretKey!,
);