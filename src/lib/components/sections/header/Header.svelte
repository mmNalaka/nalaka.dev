<script>
	import ThemeSwitch from '$components/ui/theme-switch/ThemeSwitch.svelte';

	const links = [
		{
			label: 'About me',
			href: '/'
		},
		{
			label: 'Blog',
			href: '/blog'
		},
		{
			label: 'Snippets',
			href: '/snippets'
		}
	];
</script>

<header>
	<nav class="fixed top-0 left-0 z-20 w-full bg-background">
		<div class="container flex flex-wrap items-center justify-between max-w-3xl p-4 mx-auto">
			<a
				href="/"
				class="flex items-center px-2 py-0.5 transition-all border-[3px] text-primary border-primary hover:no-underline hover:bg-primary hover:text-background"
			>
				<span class="self-center text-xl font-bold whitespace-nowrap">N.DEV</span>
			</a>
			<div
				class="items-center justify-between hidden w-full gap-4 md:flex md:w-auto md:order-1"
				id="navbar-sticky"
			>
				<ul
					class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
				>
					{#each links as link}
						<li>
							<a
								href={link.href}
								class="block py-2 pl-3 pr-4 text-sm rounded hover:text-primary md:p-0"
								aria-current="page">{link.label}</a
							>
						</li>
					{/each}
				</ul>
				<ThemeSwitch />
			</div>
		</div>
	</nav>
</header>
