<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Background from '$lib/components/Background.svelte';
	// import Cursor from '$lib/components/Cursor.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/ProgrammingLanguages.svelte';
	import Header from '$lib/components/Header.svelte';
	import History from '$lib/components/History.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Databases from '$lib/components/Databases.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
		<svg
			class="w-16 h-16 animate-bounce"
			width="100%"
			height="100%"
			viewBox="0 0 434 562"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			><path
				id="outer_curve"
				d="M365.549,0c41.854,59.264 67.988,143.222 67.988,236.258c0,179.36 -97.131,324.977 -216.768,324.977c-119.638,-0 -216.769,-145.617 -216.769,-324.977c-0,-93.036 26.135,-176.994 67.989,-236.258c10.354,120.106 73.065,212.59 148.78,212.59c75.714,0 138.425,-92.484 148.78,-212.59Z"
				style="fill:#1f2b39;"
			/><path
				id="arrow"
				d="M239.863,480.675c-5.1,7.79 -13.783,12.484 -23.094,12.484c-9.312,0 -17.995,-4.694 -23.095,-12.484l-124.152,-189.648c-3.824,-5.84 -4.138,-13.307 -0.818,-19.448c3.319,-6.14 9.738,-9.967 16.719,-9.967l262.691,-0c6.981,-0 13.4,3.827 16.719,9.967c3.32,6.141 3.006,13.608 -0.817,19.448l-124.153,189.648Z"
				style="fill:#9c1f58;"
			/></svg
		>
	</div>
	<section class="pt-20 h-fit">
		<Projects />
	</section>
	<section class="pt-40 h-fit">
		<About />
	</section>
	<section class="pt-40 h-fit">
		<Experience />
	</section>
	<section class="pt-40 h-fit">
		<Tools />
	</section>
	<section class="pt-40 h-fit">
		<Databases />
	</section>
	<section class="pt-40 h-fit">
		<History />
	</section>
	<section class="pt-40 h-fit">
		<Education />
	</section>
	<div class="pt-40"/>
	<footer class="pt-20 pb-10">
		<Footer />
	</footer>
</div>
