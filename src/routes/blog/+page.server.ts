import { supabase } from '$lib/client/supabase.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ depends }) {
	depends('supabase:auth');

	// const tag = url.searchParams.get('tag');
	// const language = url.searchParams.get('language');

	const [posts, tags] = await Promise.all([
		supabase
			.from('posts')
			.select('id,title,excerpt, views, updated_at, post_tags(tag_id)')
			.order('created_at', { ascending: false })
			.limit(20),
		supabase.from('tags').select()
	]);

	return {
		posts,
		tags
	};
}
