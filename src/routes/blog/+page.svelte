<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$components/ui/badge/Badge.svelte';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils.js';

	type queryParams = 'tag' | 'category';

	$: tag = $page.url.searchParams.get('tag');
	$: category = $page.url.searchParams.get('category');
	$: isActiveTag = (t: string) => t === tag;
	$: isActiveCategory = (t: string) => t === category;

	let posts = [] as typeof data.posts;
	$: onChange(data.posts, tag, category);

	const onChange = (p: typeof data.posts, t: string | null, c: string | null) => {
		posts = p;
		if (t) {
			posts = posts.filter((post) => post.tags.find((tag) => tag.id === t));
		}
		if (c) {
			posts = posts.filter((post) => post.categories.find((cat) => cat.name === c));
		}
	};

	const setQueryParams = (key: queryParams, value: string | null, category: string | null) => {
		const params = new URLSearchParams($page.url.search);
		params.set(key, value ?? '');
		category && params.set('category', category);
		return `${$page.url.pathname}?${params.toString()}`;
	};

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta id="description" content="About this app" />
</svelte:head>

<div>
	<div class="grid grid-cols-6 gap-4">
		<div class="col-span-4">
			{#if !category && !tag}
				<h2 class="text-4xl font-bold">All posts</h2>
			{/if}

			{#if category && !tag}
				<h2 class="text-4xl font-bold">{category}</h2>
			{/if}

			{#if !category && tag}
				<h2 class="text-4xl font-bold">#{tag}</h2>
			{/if}

			{#if category && tag}
				<h2 class="mb-2 text-4xl font-bold">{category}</h2>
				<h4 class="text-xl font-bold">#{tag}</h4>
			{/if}

			<section class="mt-8">
				{#each posts as post}
					<div class="pt-1.5 pb-3 border-b border-accent">
						<a href={`/blog/${post.slug}`} class="font-semibold text-accent-foreground">
							{post.title}
						</a>
						<p class="text-sm text-slate-400">{post.excerpt}</p>
					</div>
				{/each}
			</section>
		</div>

		<div class="col-span-2">
			{#if data.categories}
				<Card.Root class="px-4 py-6 mb-4 ml-12 bg-gray-950">
					<div class="mb-1 font-bold uppercase">categories</div>
					{#each data.categories as category}
						<a
							class={cn('rounded-md flex justify-between', {
								'text-accent-foreground': isActiveCategory(category.name ?? '')
							})}
							href={`/blog?category=${category.name}`}
						>
							<span>{category.name}</span>
							<span>{category.posts.length}</span>
						</a>
					{/each}
				</Card.Root>
			{/if}

			{#if data.tags}
				<Card.Root class="px-4 py-6 ml-12 bg-gray-950">
					<div class="mb-1 font-bold uppercase">Tags</div>
					{#each data.tags as tag}
						<Badge
							class={cn('rounded-md', {
								'bg-accent-foreground text-background hover:text-background': isActiveTag(
									tag.id ?? ''
								)
							})}
							variant="outline"
							href={setQueryParams('tag', tag.id ?? '', category)}>#{tag.id}</Badge
						>
					{/each}
				</Card.Root>
			{/if}
		</div>
	</div>
</div>
