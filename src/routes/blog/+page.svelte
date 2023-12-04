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
			posts = posts.filter((post) => post.tags.find((tag) => tag === t));
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
		<div class="col-span-6 md:col-span-4">
			<div class="px-4">
				{#if !category && !tag}
					<h2 class="text-4xl font-bold">Blog</h2>
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
			</div>

			<section class="mt-8">
				{#each posts as post}
					<a
						href={`/blog/${post.slug}`}
						class="flex flex-col px-4 pt-3 pb-4 my-4 rounded-lg hover:bg-secondary/25 hover:no-underline group"
					>
						<h5 class="text-xl font-semibold text-accent-foreground group-hover:text-primary">
							{post.title}
						</h5>
						<p class="text-sm text-secondary-foreground/80">{post.excerpt}</p>
						<div class="flex items-center justify-between gap-4 mt-4">
							<span class="text-xs font-bold text-secondary-foreground/50">{post.createdAt}</span>
						</div>
					</a>
				{/each}
			</section>
		</div>

		<div class="col-span-6 md:col-span-2">
			{#if data.tags}
				<div class="px-4 py-6 rounded-md md:ml-10 bg-secondary-foreground/5">
					<div class="mb-4 font-bold uppercase">Tags</div>
					{#each data.tags as tag}
						<Badge
							class={cn('rounded-md', {
								'bg-primary text-background hover:text-background': isActiveTag(tag ?? '')
							})}
							variant="outline"
							size="sm"
							href={setQueryParams('tag', tag ?? '', category)}>#{tag}</Badge
						>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
