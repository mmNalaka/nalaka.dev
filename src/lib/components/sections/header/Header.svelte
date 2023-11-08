<script>
	import { Icons } from '$components/icons';

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
	<nav class="fixed top-0 left-0 z-20 w-full bg-transparent">
		<div class="container flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto">
			<a
				href="/"
				class="flex items-center px-2 py-0.5 transition-all border-[3px] text-accent-foreground border-accent-foreground hover:no-underline hover:bg-accent-foreground hover:text-background"
			>
				<span class="self-center text-xl font-bold whitespace-nowrap">N.DEV</span>
			</a>
			<div
				class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
				id="navbar-sticky"
			>
				<ul
					class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
				>
					{#each links as link}
						<li>
							<a
								href={link.href}
								class="block py-2 pl-3 pr-4 rounded hover:text-accent-foreground md:p-0"
								aria-current="page">{link.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>
