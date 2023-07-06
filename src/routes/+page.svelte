<script  lang="ts">
	import Title from '$components/ui/title/Title.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log(data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full">
	<section class="flex flex-col items-start mt-4 text-secondary-foreground lg:mt-6">
		<Title class="text-accent-foreground" styleOrder="h2">Hi, I'm Nalaka</Title>
		<p class="mt-2 text-base">
			Welcome to my personal website. I'm full stack developer and I love to build web applications.
		</p>
	</section>
</div>

<style>
</style>
