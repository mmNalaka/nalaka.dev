<script>
	import { Icons } from '$components/icons';

	const links = [
		{
			label: 'About me',
			href: '/'
		},
		{
			label: 'Blog',
			href: '/'
		},
		{
			label: 'Snippets',
			href: '/'
		}
	];
</script>

<header>
	<nav class="fixed top-0 left-0 z-20 w-full bg-transparent">
		<div class="container flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto">
			<a
				href="/"
				class="flex items-center px-2 py-1 transition-all border-2 text-accent-foreground border-accent-foreground hover:no-underline hover:bg-accent-foreground hover:text-background"
			>
				<span class="self-center text-xl font-semibold whitespace-nowrap">N.DEV</span>
			</a>
			<div class="flex md:order-2">
				<a
					href="https://github.com/mmNalaka"
					class="px-4 py-2 mr-3 text-sm font-medium text-center rounded-lg text-primary-foreground hover:text-accent-foreground cus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:focus:ring-blue-800"
				>
					<Icons.gitHub class="inline-block w-6 h-6 mr-2" />
				</a>
				<button
					data-collapse-toggle="navbar-sticky"
					type="button"
					class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-primary-foreground md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
					aria-controls="navbar-sticky"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</div>
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
								class="block py-2 pl-3 pr-4 rounded text-primary-foreground hover:text-accent-foreground md:p-0"
								aria-current="page">{link.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>
