<script>
	import Header from '$lib/components/Header.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<div class="container mx-auto relative">
	<div class="pt-4 absolute w-full">
		<Header />
	</div>
	<div class="flex justify-center items-center min-h-screen">
		<div class="relative">
			<Intro />
		</div>
	</div>
	<div class="animate-absolute bounce w-full -translate-y-20 flex justify-center items-center">
		<img src="arrow.svg" alt="down arrow" class="w-16 h-16 animate-bounce" />
	</div>
	<div>
		<Projects />
	</div>
</div>

<style>
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0); /* The initial and final positions */
		}
		40% {
			transform: translateY(-30px); /* The highest point of the bounce */
		}
		60% {
			transform: translateY(-15px); /* The middle point of the bounce */
		}
	}
</style>
