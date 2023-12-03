import { getIssue } from '$lib/client/github.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
	const slug = params.slug;
	const post = await getIssue('post', slug, fetch);

	return {
		post
	};
}
