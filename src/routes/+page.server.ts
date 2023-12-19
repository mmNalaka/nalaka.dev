import { getFeed } from '$lib/client/github';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return await getFeed(fetch);
}
