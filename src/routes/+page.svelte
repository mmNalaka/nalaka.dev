<script lang="ts">
	import { Button } from '$components/ui/button';
	import Title from '$components/ui/title/Title.svelte';
	import { ArrowRight } from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full">
	<div class="flex flex-col items-start text-secondary-foreground">
		<Title class="mb-4 text-4xl font-bold text-primary" styleOrder="h2">Hey, I'm Nalaka</Title>
		<p class="mt-2 text-xl font-blod">
			I'm software developer based in Stockholm, Sweden. I'm passionate about building software that
			is scalable, maintainable and testable. This is the space for me to share my knowledge and
			experience.
		</p>
	</div>

	<section class="mt-12">
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-2xl font-semibold tracking-tight scroll-m-20">Latest posts</h3>
			<Button variant="ghost" href="/blog" size="sm">
				See all
				<ArrowRight class="w-4 h-4 ml-2" />
			</Button>
		</div>
		<div class="grid grid-flow-row grid-cols-2 gap-4">
			{#each data.latestPosts as post}
				<article
					class="hover:animate-background rounded-xl bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-600/50 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
				>
					<a class="hover:no-underline" href={`/blog/${post.slug}`}>
						<div class="rounded-[10px] bg-white dark:bg-black p-4 h-full">
							<h5 class="text-xl font-semibold text-accent-foreground group-hover:text-primary">
								{post.title}
							</h5>
							<p class="text-sm text-secondary-foreground/80">{post.excerpt}</p>
							<div class="flex items-center justify-between gap-4 mt-4">
								<span class="text-xs font-bold text-secondary-foreground/50">{post.createdAt}</span>
							</div>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</section>

	<section class="mt-8">
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-xl font-semibold tracking-tight scroll-m-20">Featured posts</h3>
		</div>
		<div class="grid grid-flow-row gap-4">
			{#each data.featuredPosts as post}
				<article
					class="relative hover:animate-background rounded-xl bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-600/50 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
				>
					<a class="hover:no-underline" href={`/blog/${post.slug}`}>
						<div class="rounded-[10px] bg-white dark:bg-black p-4 h-full">
							<h5 class="text-xl font-semibold text-accent-foreground group-hover:text-primary">
								{post.title}
							</h5>
							<p class="text-sm text-secondary-foreground/80">{post.excerpt}</p>
							<div class="flex items-center justify-between gap-4 mt-4">
								<span class="text-xs font-bold text-secondary-foreground/50">{post.createdAt}</span>
							</div>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</section>
</div>
