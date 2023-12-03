import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

export const getReadingTime = (content: string) => {
	const wordsPerMinute = 160;
	const numberOfWords = content.split(/\s/g).length;
	const minutes = numberOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};

export const formatDate = (d: Date | string) => {
	const date = new Date(d);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export const markdownRenderer = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	})
);
