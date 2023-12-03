<script lang="ts">
	import { Button } from '$components/ui/button';
	import { formatDate, getReadingTime, markdownRenderer } from '$lib/utils/post-helpers';
	import { Share } from 'lucide-svelte';

	import type { PageData } from './$types';

	$: readingTime = getReadingTime(data.post?.content ?? '');
	$: html = markdownRenderer.parse(data.post?.content ?? '');
	export let data: PageData;
</script>

{#if data.post}
	<article class="text-left">
		<span class="flex mb-2 text-sm text-secondary-foreground/80">
			{formatDate(data.post.createdAt)}
		</span>
		<h1 class="mb-6 text-4xl font-bold text-left lg:text-5xl md:mb-8">{data.post.title}</h1>
		<div class="flex items-center content-center">
			<div class="flex-grow">
				<span class="flex mt-4 text-sm text-secondary-foreground/80">
					{readingTime} min read
				</span>
				<div class="pb-4">
					{#each data.post.tags as tag}
						<a href={`/blog?tag=${tag}`} class="mr-2 text-sm text-primary">
							#{tag}
						</a>
					{/each}
				</div>
			</div>
			<Button variant="secondary">
				<Share />
			</Button>
		</div>

		<hr />

		{#if data.post.content}
			<div
				class="mt-8 prose md:mt-10 dark:prose-invert max-w-none prose-pre:shadow-none prose-pre:p-0"
			>
				{@html html}
			</div>
		{/if}
	</article>
{/if}

{#if !data.post}
	<div class="mt-4">404</div>
{/if}

<style>
	@import 'highlight.js/styles/atom-one-dark-reasonable.css';
</style>
