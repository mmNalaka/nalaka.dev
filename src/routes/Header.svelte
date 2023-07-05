<script>
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
	<nav
		class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full"
		aria-label="Global"
	>
		<div class="flex lg:flex-1">
			<a href="#">
				<span class="text-rose-400 text-xl font-extrabold"> N.DEV </span>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each links as link}
				<a href={link.href} class="text-sm font-semibold leading-6 text-gray-900">{link.label}</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="#" class="text-sm font-semibold leading-6 text-gray-900"
				>Github <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each links as link}
							<a
								href={link.href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>{link.label}</a
							>
						{/each}
					</div>
					<div class="py-6">
						<a
							href="#"
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>Github</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		color: var(--color-theme-2);
		border-bottom: 2px solid var(--color-theme-2);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0;
		color: var(--color-theme-1);
		font-weight: 400;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		border-bottom: 2px solid transparent;
	}

	a:hover {
		color: var(--color-theme-2);
		border-bottom: 2px solid var(--color-theme-2);
	}
</style>
