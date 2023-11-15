<script lang="ts">
	import { Button } from '$components/ui/button';
	import Title from '$components/ui/title/Title.svelte';
	import * as Card from '$lib/components/ui/card';
	import { ArrowRight } from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full">
	<div class="flex flex-col items-start mt-4 text-secondary-foreground lg:mt-6">
		<Title class="mb-4 text-4xl font-bold text-accent-foreground" styleOrder="h2"
			>Hey, I'm Nalaka</Title
		>
		<p class="mt-2 text-xl font-blod">
			I'm software developer based in Stockholm, Sweden. I'm passionate about building software that
			is scalable, maintainable and testable. This is the space for me to share my knowledge and
			experience.
		</p>
	</div>

	<section class="mt-12">
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-2xl font-semibold tracking-tight scroll-m-20">Latest posts</h3>
			<Button variant="ghost" href="/blog">
				See all
				<ArrowRight class="w-4 h-4 ml-2" />
			</Button>
		</div>
		<div class="grid grid-flow-row gap-4">
			{#each data.latestPosts as post}
				<Card.Root class="px-4 py-2">
					<Card.Title>{post.title}</Card.Title>
					<Card.Description>{post.excerpt}</Card.Description>
				</Card.Root>
			{/each}
		</div>
	</section>

	<section class="mt-8">
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-xl font-semibold tracking-tight scroll-m-20">Popular posts</h3>
		</div>
		<div class="grid grid-flow-row gap-4">
			<Card.Root class="px-4 py-2">
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Root>

			<Card.Root class="px-4 py-2">
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Root>

			<Card.Root class="px-4 py-2">
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Root>
		</div>
	</section>
</div>

<style>
</style>
