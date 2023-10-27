<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const cursor = document.getElementById('cursor');
        if (cursor) {
            window.onmousemove = (e) => {
                const x = e.clientX - cursor.offsetWidth / 2,
                    y = e.clientY - cursor.offsetHeight / 2;
    
                const keyframes = {
                    transform: `translate(${x}px, ${y}px)`
                }
    
                cursor.animate(keyframes, {
                    duration: 800,
                    fill: "forwards"
                })
            };
        }
	});
</script>

<div id="cursor" class="hidden lg:block w-8 h-8 bg-slate-500 z-50 pointer-events-none fixed rounded-full"></div>
