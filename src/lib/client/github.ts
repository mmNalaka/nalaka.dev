export type ContentType = 'post' | 'snippet';

type Item = {
	id: number;
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	tags: string[];
	createdAt: string;
	readingTime: number;
	image?: string;
};

type Content = Record<ContentType, Item[]>;
type IssueLabel = {
	id: number;
	name: string;
	color: string;
};
type GitHubIssue = {
	title: string;
	body: string;
	created_at: string;
	number: number;
	labels: IssueLabel[];
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FetchFn = (url: string, options: any) => Promise<any>;

//  In memory cache of issues
export const content: Content = {
	post: [],
	snippet: []
};

const headers = process.env.GH_TOKEN && {
	Authorization: `token ${process.env.GH_TOKEN}`
};

// This function will fetch issues from GitHub and return them as an array of objects.
const cacheExpiry = Number(process.env.CACHE_EXPIRY_TIME) || 1000 * 60 * 60 * 1;

let lastFetchTime: number = 0;

export async function getIssues(contentType: ContentType, fetchFn: FetchFn) {
	try {
		const currentTime = Date.now();
		if (currentTime - lastFetchTime > cacheExpiry) {
			const params = new URLSearchParams({
				state: 'all',
				labels: contentType,
				per_page: '100'
			});
			const response = await fetchFn(
				`https://api.github.com/repos/mmNalaka/nalaka.dev/issues?${params.toString()}`,
				{
					headers
				}
			);
			if (!response.ok) {
				throw new Error('Failed to fetch issues from GitHub');
			}
			const issues = (await response.json()) as GitHubIssue[];
			content[contentType] = issues.map(parseIssue);
			lastFetchTime = currentTime;
		}
		return content[contentType];
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getAllTags(contentType: ContentType) {
	const issues = content[contentType];
	const tags = issues
		.flatMap((issue) => issue.tags)
		.filter((tag, index, self) => self.indexOf(tag) === index)
		.map((tag) => tag.replace('#', ''));
	return tags;
}

export async function getIssue(contentType: ContentType, slug: string, fetchFn: FetchFn) {
	let issues = content[contentType];

	if (issues.length === 0) {
		issues = await getIssues(contentType, fetchFn);
	}

	const item = issues.find((item) => item.slug === slug);
	if (item) {
		return item;
	}
	return null;
}

const parseIssue = (issue: GitHubIssue): Item => {
	const { title, body, created_at, labels, number } = issue;
	const createdAt = formatDate(created_at);
	const readingTime = getReadingTime(body);
	const tags = labels
		.filter((label) => label.name.startsWith('#'))
		.map((label) => label.name)
		.map((tag) => tag.replace('#', ''));
	const image = issue?.body?.match(/!\[.*\]\((.*)\)/)?.[1];

	return {
		id: number,
		title,
		slug: slugify(title),
		excerpt: createExcerpt(body),
		content: body,
		tags,
		createdAt,
		readingTime,
		image
	};
};

export const getReadingTime = (content: string) => {
	const wordsPerMinute = 160;
	const numberOfWords = content.split(/\s/g).length;
	const minutes = numberOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};

export const slugify = (text: string) => {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
};

export const formatDate = (d: Date | string) => {
	const date = new Date(d);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

const createExcerpt = (content: string) => {
	const excerpt = content.slice(0, 120).replace(/\n/g, ' ').concat('...');
	return excerpt;
};
