<script lang="ts">
	import { cn } from "$lib/utils/class-helpers";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div
	class={cn("animate-pulse rounded-md bg-muted", className)}
	{...$$restProps}
/>
