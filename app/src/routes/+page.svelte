<script>
	import About from '$lib/components/About.svelte';
	import Background from '$lib/components/Background.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import History from '$lib/components/History.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<!-- <Cursor /> -->
<div class="w-full h-screen absolute z-0">
	<Background />
</div>

<div class="container mx-auto relative z-1">
	<div class="pt-4 absolute w-full">
		<Header />
	</div>
	<section class="flex justify-center items-center min-h-screen">
		<div class="relative">
			<Intro />
		</div>
	</section>
	<div class="w-full -translate-y-20 flex justify-center items-center">
		<img src="arrow.svg" alt="down arrow" class="w-16 h-16 animate-bounce" />
	</div>
	<section class="pt-20">
		<Projects />
	</section>
	<section class="pt-40">
		<History />
	</section>
	<section class="pt-40">
		<Experience />
	</section>
	<section class="pt-40">
		<Education />
	</section>
	<section class="pt-40">
		<About />
	</section>
    <div class="pb-40" />
</div>
