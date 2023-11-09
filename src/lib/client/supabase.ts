import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import type { Database } from '$lib/types/db.types';

const supabaseUrl = env.PUBLIC_SUPABASE_URL || '';
const supabaseKey = env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
