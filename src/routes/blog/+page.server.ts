import { getAllTags, getIssues } from '$lib/client/github';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const posts = await getIssues('post', fetch);
	const tags = await getAllTags('post');

	return {
		posts,
		tags
	};
}
