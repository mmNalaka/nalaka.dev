<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$components/ui/badge/Badge.svelte';

	$: tag = $page.url.searchParams.get('tag');
	$: language = $page.url.searchParams.get('tag');

	export let data;
	let isActiveTag = (t: string) => t === tag;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	{#if tag}
		<h1>Posts tagged with {tag}</h1>
	{:else if language}
		<h1>Posts written in {language}</h1>
	{:else}
		<h1>Blog</h1>
	{/if}

	{#if data.tags.data}
		<div class="flex gap-1">
			{#each data.tags.data as tag}
				<Badge
					class={isActiveTag(tag.name ?? '') ? 'bg-accent-foreground' : 'bg-foreground'}
					variant="default"
					href={`/blog?tag=${tag.name}`}>#{tag.name}</Badge
				>
			{/each}
		</div>
	{/if}
</div>
