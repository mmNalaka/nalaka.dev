import { supabase } from '$lib/client/supabase.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ depends }) {
	depends('supabase:auth');

	const [latestPosts, popularPosts] = await Promise.all([
		// Latest posts
		supabase
			.from('posts')
			.select('id,title,excerpt, views, updated_at, post_tags(tag_id)')
			.order('created_at', { ascending: true })
			.limit(10),

		// Popular posts
		supabase
			.from('posts')
			.select('id,title,excerpt, views, updated_at, post_tags(tag_id)')
			.order('views', { ascending: true })
			.limit(4)
	]);

	return {
		latestPosts: latestPosts.data || [],
		popularPosts: popularPosts.data || []
	};
}
