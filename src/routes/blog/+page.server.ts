import prisma from '$lib/client/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const [tags, posts, categories] = await Promise.all([
		await prisma.tag.findMany({
			orderBy: {
				id: 'asc'
			},
			select: {
				id: true
			}
		}),
		await prisma.post.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			select: {
				title: true,
				slug: true,
				excerpt: true,
				views: true,
				PublishedAt: true,
				tags: {
					select: {
						id: true
					}
				},
				categories: {
					select: {
						name: true
					}
				}
			}
		}),
		await prisma.category.findMany({
			orderBy: {
				id: 'asc'
			},
			select: {
				name: true,
				posts: {
					select: {
						id: true
					}
				}
			}
		})
	]);

	return {
		posts,
		tags,
		categories
	};
}
