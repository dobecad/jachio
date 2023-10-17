<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Media from '$lib/components/Media.svelte';

	storeHighlightJs.set(hljs);

	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer>
	<Navigation vertical={true} />
	<div class="flex lg:hidden p-4 justify-between">
		<Media />
	</div>
</Drawer>

<div class="container mx-auto">
	<AppShell slotSidebarLeft="bg-surface-500/5 w-0">
		<svelte:fragment slot="header">
			<AppBar
				background="bg-inherit"
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
			>
				<svelte:fragment slot="lead">
					<div class="flex items-center">
						<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
							<span>
								<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
									<rect width="100" height="20" />
									<rect y="30" width="100" height="20" />
									<rect y="60" width="100" height="20" />
								</svg>
							</span>
						</button>
						<div class="flex items-center">
							<img src="/BlackHole2.svg" alt="blackhole" class="w-full h-24" />
							<h2
								class="h2 uppercase bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hidden lg:flex"
							>
								Jachii
							</h2>
						</div>
					</div>
				</svelte:fragment>
				<Navigation vertical={false} />
				<svelte:fragment slot="trail">
					<div class="hidden lg:flex space-x-4">
						<Media />
					</div>
					<LightSwitch />
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft" />
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</div>
