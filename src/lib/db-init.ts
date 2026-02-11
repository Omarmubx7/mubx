/**
 * REFACTORED DB INITIALIZATION
 * 
 * This file replaces previous supabase-gateway/config files to force
 * build tools to treat it as a fresh module.
 */

let cachedInstance: any = null;

export const initializeSupabaseStore = async () => {
    if (cachedInstance) return cachedInstance;

    const u = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const k = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const check = (val?: string) => val && val.length > 5 && val !== 'undefined';

    if (!check(u) || !check(k)) {
        console.warn('DB_INIT: Required environment variables are missing.');
        return null;
    }

    try {
        console.log('DB_INIT: Dynamically loading Supabase library...');
        const mod = await import('@supabase/supabase-js');

        cachedInstance = mod.createClient(u!, k!);
        return cachedInstance;
    } catch (e) {
        console.error('DB_INIT: Failed to initialize client:', e);
        return null;
    }
};
