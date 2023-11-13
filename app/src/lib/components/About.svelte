<script>
	import Sectionname from './StyledWord.svelte';
	import UnderlinedText from './UnderlinedText.svelte';
</script>

<div id="About" class="flex w-full justify-center text-8xl pb-40">
	<a href="#About"><Sectionname text={'About'} /></a>
</div>

<div class="lg:grid lg:grid-cols-2">
	<div class="flex justify-center">
		<img src="SpaceHelmet.svg" alt="logo" class="w-80 h-80" />
	</div>
	<div class="text-2xl pt-10 lg:pt-0">
		<p class="flex flex-wrap">
			I am a software engineer with a passion for simplicity. I channel that passion into crafting
			solutions that are here to make your life a whole lot easier. <UnderlinedText />
		</p>
		<br />
		<p class="flex flex-wrap">
			I have strong interests in distributed systems, full-stack development, API development,
			container orchestration, infrastructure management, and building performant, cost-effective
			cloud-native applications.
		</p>
		<br />
		<p class="flex flex-wrap">
			When I am not trying to make your life easier, I am often either learning some new, bleeding
			edge technology, contributing to open source projects, noodling on the guitar, or catching up
			on my backlog of engineering books.
		</p>
	</div>
</div>
