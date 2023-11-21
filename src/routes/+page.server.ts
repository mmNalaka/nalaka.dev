import prisma from '$lib/client/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const [latestPosts, popularPosts] = await Promise.all([
		await prisma.post.findMany({
			take: 5,
			orderBy: {
				createdAt: 'desc'
			},
			select: {
				title: true,
				slug: true,
				excerpt: true,
				views: true,
				PublishedAt: true
			}
		}),
		await prisma.post.findMany({
			take: 4,
			orderBy: {
				views: 'desc'
			},
			select: {
				title: true,
				slug: true,
				excerpt: true,
				views: true,
				PublishedAt: true
			}
		})
	]);

	return {
		latestPosts,
		popularPosts
	};
}
