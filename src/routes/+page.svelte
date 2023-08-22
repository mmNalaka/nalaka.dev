<script  lang="ts">
	import Title from '$components/ui/title/Title.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full">
	<section class="flex flex-col items-start mt-4 text-secondary-foreground lg:mt-6">
		<Title class="text-accent-foreground" styleOrder="h2">Hi, I'm Nalaka</Title>
		<p class="mt-2 text-xl">
			Welcome to my personal website. I'm full stack developer living in Stockholm, Sweden and I love building awesome things.
		</p>
	</section>

	<section>
		{#if data.quote}
			<blockquote>
				<p class="text-base text-secondary-foreground">
					{data.quote.quote}
				</p>
				<cite class="block mt-2 text-sm text-accent-foreground">
					{data.quote.author}
				</cite>
			</blockquote>
		{/if}
	</section>
</div>

<style>
</style>
