<script lang="ts">
	import { cn } from '$lib/utils/class-helpers';

	type TitleOrder = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	let className: string | undefined | null = undefined;
	export { className as class };
	export const order: TitleOrder = 'h1';
	export let styleOrder: TitleOrder  = 'h1';

	const orderStyles = {
		h1: 'text-4xl font-bold',
		h2: 'text-3xl font-bold',
		h3: 'text-2xl font-bold',
		h4: 'text-xl font-bold',
		h5: 'text-lg font-bold',
		h6: 'text-base font-bold'
	};

	$: className = cn(styleOrder ? orderStyles[styleOrder] : orderStyles[order], className);

</script>

<svelte:element this={order} class={cn(className)}>
	<slot />
</svelte:element>
