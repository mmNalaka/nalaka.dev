<script lang="ts">
	import Title from '$components/ui/title/Title.svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full">
	<div class="flex flex-col items-start mt-4 text-secondary-foreground lg:mt-6">
		<Title class="text-accent-foreground" styleOrder="h2">Hey, I'm Nalaka</Title>
		<p class="mt-2 text-xl">
			Welcome to my personal website. I'm full stack developer living in Stockholm, Sweden and I
			love building awesome things. I have a passion for learning and sharing my knowledge with
			others. This is a place where I share my thoughts and ideas. I hope you enjoy it!
		</p>
	</div>

	<section class="mt-12">
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-xl font-semibold tracking-tight scroll-m-20">Latest posts</h3>
			<a href="/blog">All posts</a>
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
