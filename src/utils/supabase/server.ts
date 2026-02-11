import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase URL and Key are required for server-side client');
    }

    return createSupabaseClient(supabaseUrl, supabaseKey);
}
