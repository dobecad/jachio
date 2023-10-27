<script>
	import About from '$lib/components/About.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import History from '$lib/components/History.svelte';
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
	<div class="bounce w-full -translate-y-20 flex justify-center items-center">
		<img src="arrow.svg" alt="down arrow" class="w-16 h-16 animate-bounce" />
	</div>
	<div class="pt-20">
		<Projects />
	</div>
	<div class="pt-40">
		<History />
	</div>
	<div class="pt-40">
		<Experience />
	</div>
	<div class="pt-40">
		<Education />
	</div>
	<div class="pt-40">
		<About />
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
