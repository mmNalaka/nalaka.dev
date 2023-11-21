<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$components/ui/badge/Badge.svelte';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils.js';

	$: tag = $page.url.searchParams.get('tag');
	$: category = $page.url.searchParams.get('category');
	$: language = $page.url.searchParams.get('language');

	$: isActiveTag = (t: string) => t === tag;

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta id="description" content="About this app" />
</svelte:head>

<div>
	<div class="grid grid-cols-6 gap-4">
		<div class="col-span-4">
			<h2 class="text-4xl font-bold">{tag ? `# ${tag}` : 'Code snippets'}</h2>

			<section class="mt-8">
				{#each data.snippets as snippet}
					<div class="pt-1.5 pb-3 border-b border-accent">
						<a href={`/blog/${snippet.slug}`} class="font-semibold text-accent-foreground">
							{snippet.title}
						</a>
					</div>
				{/each}
			</section>
		</div>

		<div class="col-span-2">
			{#if data.tags}
				<Card.Root class="px-4 py-6 ml-12 bg-black">
					<div class="mb-1 font-bold uppercase">Tags</div>
					{#each data.tags as tag}
						<Badge
							class={cn('rounded-md', {
								'bg-accent-foreground text-background hover:text-background': isActiveTag(
									tag.id ?? ''
								)
							})}
							variant="outline"
							href={`/snippets?tag=${tag.id}`}>#{tag.id}</Badge
						>
					{/each}
				</Card.Root>
			{/if}
		</div>
	</div>
</div>
