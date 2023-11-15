/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		latestPosts: [],
		popularPosts: []
	};
}
