<script>
	import Sectionname from "./StyledWord.svelte";

</script>

<div id="About" class="flex w-full justify-center text-8xl pb-40">
    <a href="#About"><Sectionname text={"About"} /></a>
</div>

<div class="lg:grid lg:grid-cols-2">
    <div class="flex justify-center">
        <img src="BlackHole2.png" alt="logo" class="w-80 h-80">
    </div>
    <div class="text-2xl pt-10 lg:pt-0">
        <p class="flex flex-wrap">My heart beats for simplicity, and I channel that passion into crafting software that's here to make your life a whole lot easier.</p>
        <br>
        <p class="flex flex-wrap">I have strong interests in distributed systems, full-stack development, API development, container orchestration, and building performant, cost-effective cloud-native applications.</p>
        <br>
        <p class="flex flex-wrap">When I am not trying to make your life easier, I am often either learning some new, bleeding edge technology, trying to get good at a new video game, contributing to open source projects, noodling on the guitar, or catching up on my backlog of engineering books.</p>
    </div>
</div>