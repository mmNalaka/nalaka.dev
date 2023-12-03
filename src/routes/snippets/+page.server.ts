import { getAllTags, getIssues } from '$lib/client/github';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const posts = await getIssues('snippet', fetch);
	const tags = await getAllTags('snippet');

	return {
		posts,
		tags
	};
}
