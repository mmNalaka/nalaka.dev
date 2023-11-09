import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/private';

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient({
		supabaseUrl: env.PUBLIC_SUPABASE_URL || '',
		supabaseKey: env.PUBLIC_SUPABASE_ANON_KEY || '',
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
