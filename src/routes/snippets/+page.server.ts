import prisma from '$lib/client/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const [tags, snippets] = await Promise.all([
		await prisma.tag.findMany({
			orderBy: {
				id: 'asc'
			},
			select: {
				id: true
			}
		}),
		await prisma.snippet.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			select: {
				title: true,
				slug: true,
				views: true
			},
			take: 16
		})
	]);

	return {
		snippets,
		tags
	};
}
