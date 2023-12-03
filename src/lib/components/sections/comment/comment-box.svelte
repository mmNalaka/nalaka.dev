<!-- Comment section for blog page -->
<!-- Comment will be passed as props -->
<script lang="ts">
	import Comment from '$components/sections/comment/Comment.svelte';
	import type { CommentProps } from '$components/sections/comment/Comment.svelte';
	import { onMount } from 'svelte';

	export let comment: CommentProps;
	let commentBox: HTMLDivElement;

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://utteranc.es/client.js';
		script.async = true;
		script.setAttribute('repo', 'nirnejak/nirnejak.github.io');
		script.setAttribute('issue-term', 'pathname');
		script.setAttribute('label', 'comment');
		script.setAttribute('theme', 'github-light');
		commentBox.appendChild(script);
	});
</script>

<div></div>
