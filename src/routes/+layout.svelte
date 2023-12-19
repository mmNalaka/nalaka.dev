<script>
	import './styles.css';
	import '../app.postcss';

	import { Header } from '$components/sections/header';
	import { ModeWatcher } from 'mode-watcher';
</script>

<div class="app">
	<Header />

	<main class="">
		<ModeWatcher />
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-top: 6rem;
		width: 100%;
		max-width: 48rem;
		margin: 0 auto;
		box-sizing: border-box;

		@media (min-width: 768px) {
			padding-top: 10rem;
		}
	}
</style>
