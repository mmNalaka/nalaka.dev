<script lang="ts">
	import { Button } from '$components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Facebook, Link, LinkedinIcon, Share, TwitterIcon } from 'lucide-svelte';

	export let link: string;
	export let title: string;

	const getShareUrl = (url: string) => {
		const base = window.location.href;
		const urlObj = new URL(url, base);
		return urlObj.toString();
	};

	const copyLink = () => {
		const url = getShareUrl(link);
		navigator.clipboard.writeText(url);
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button variant="secondary">
			<Share />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<Button variant="ghost" size="sm" class="" on:click={copyLink}>
					<Link class="w-4 h-4 mr-2" />
					Copy link
				</Button>
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>
				<Button
					variant="ghost"
					size="sm"
					class="hover:no-underline"
					href="https://www.facebook.com/sharer/sharer.php?u={getShareUrl(link)}"
				>
					<Facebook class="w-4 h-4 mr-2" />
					Facebook
				</Button>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Button
					variant="ghost"
					size="sm"
					class="hover:no-underline"
					href="https://twitter.com/intent/tweet?text={title}&url={getShareUrl(link)}"
				>
					<TwitterIcon class="w-4 h-4 mr-2" />
					Twitter
				</Button>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Button
					variant="ghost"
					size="sm"
					class="hover:no-underline"
					href="https://www.linkedin.com/shareArticle?mini=true&url={getShareUrl(
						link
					)}&title={title}"
				>
					<LinkedinIcon class="w-4 h-4 mr-2" />
					LinkedIn
				</Button>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
