import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateContent = () => {
	let content = '';
	for (let i = 0; i < 200; i++) {
		content += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
	}
	return content;
};

const authorId = 'clp0bqoom0000s6dql7ytjp8l';

async function main() {
	// await prisma.tag.createMany({
	// 	data: [
	// 		{ id: 'javascript' },
	// 		{ id: 'typescript' },
	// 		{ id: 'react' },
	// 		{ id: 'nextjs' },
	// 		{ id: 'nodejs' },
	// 		{ id: 'express' },
	// 		{ id: 'mongodb' },
	// 		{ id: 'postgresql' },
	// 		{ id: 'graphql' },
	// 		{ id: 'prisma' },
	// 		{ id: 'tailwindcss' },
	// 		{ id: 'golang' },
	// 		{ id: 'docker' },
	// 		{ id: 'kubernetes' },
	// 		{ id: 'aws' },
	// 		{ id: 'google-cloud' },
	// 		{ id: 'firebase' },
	// 		{ id: 'vercel' },
	// 		{ id: 'macos' },
	// 		{ id: 'vscode' },
	// 		{ id: 'vim' },
	// 		{ id: 'go-land' },
	// 		{ id: 'flutter' },
	// 		{ id: 'dart' },
	// 		{ id: 'kotlin' }
	// 	]
	// });

	// await prisma.category.createMany({
	// 	data: [
	// 		{ name: 'Architecture' },
	// 		{ name: 'Backend' },
	// 		{ name: 'Frontend' },
	// 		{ name: 'DevOps' },
	// 		{ name: 'Mobile' },
	// 		{ name: 'Cloud' },
	// 		{ name: 'Database' },
	// 		{ name: 'Productivity' },
	// 		{ name: 'Tools' },
	// 		{ name: 'Miscellaneous' }
	// 	]
	// });

	// await prisma.post.create({
	// 	data: {
	// 		title: 'Use signals in React to handle asynchronous operations',
	// 		slug: 'use-signals-in-react-to-handle-asynchronous-operations',
	// 		// content length 200 real content not lorem ipsum
	// 		content: generateContent(),
	// 		excerpt: 'Learn how to use Prisma with Next.js API routes',
	// 		published: true,
	// 		authorId,
	// 		views: 0,
	// 		tags: {
	// 			connect: [{ id: 'javascript' }, { id: 'typescript' }, { id: 'react' }]
	// 		},
	// 		categories: {
	// 			connect: [{ name: 'Frontend' }, { name: 'Productivity' }]
	// 		}
	// 	}
	// });

	// Create 100 posts
	for (let i = 0; i < 100; i++) {
		await prisma.post.create({
			data: {
				title: `Post ${i}`,
				slug: `post-${i}`,
				content: generateContent(),
				excerpt: 'Learn how to use Prisma with Next.js API routes',
				published: true,
				authorId,
				views: 0,
				tags: {
					connect: [{ id: 'javascript' }, { id: 'typescript' }, { id: 'react' }]
				},
				categories: {
					connect: [{ name: 'Frontend' }, { name: 'Productivity' }]
				}
			}
		});
	}
}

main();
