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
				};

				cursor.animate(keyframes, {
					duration: 800,
					fill: 'forwards'
				});
			};
		}
	});
</script>

<!-- <div id="cursor" class="hidden lg:block w-8 h-8 bg-slate-500 z-50 pointer-events-none fixed rounded-full opacity-50"></div> -->
<div
	id="cursor"
	class="w-8 h-8 hidden lg:block z-50 pointer-events-none fixed rounded-full opacity-80"
>
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 705 705"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xml:space="preserve"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
		><g
			><g
				><path
					d="M180.058,218.365c-0,-0 42.974,121.109 78.135,156.27c21.562,21.562 56.573,21.562 78.135,0c21.563,-21.562 21.563,-56.573 0,-78.135c-35.16,-35.161 -156.27,-78.135 -156.27,-78.135Z"
					style="fill:#fff;fill-opacity:0.77;"
				/><path
					d="M180.058,524.942c-0,0 42.974,-121.11 78.135,-156.27c21.562,-21.563 56.573,-21.563 78.135,-0c21.563,21.562 21.563,56.573 0,78.135c-35.16,35.161 -156.27,78.135 -156.27,78.135Z"
					style="fill:#fff;fill-opacity:0.77;"
				/><path
					d="M524.942,218.365c0,-0 -42.974,121.109 -78.135,156.27c-21.562,21.562 -56.573,21.562 -78.135,0c-21.563,-21.562 -21.563,-56.573 -0,-78.135c35.16,-35.161 156.27,-78.135 156.27,-78.135Z"
					style="fill:#fff;fill-opacity:0.77;"
				/><path
					d="M524.942,524.942c0,0 -42.974,-121.11 -78.135,-156.27c-21.562,-21.563 -56.573,-21.563 -78.135,-0c-21.563,21.562 -21.563,56.573 -0,78.135c35.16,35.161 156.27,78.135 156.27,78.135Z"
					style="fill:#fff;fill-opacity:0.77;"
				/><circle cx="352.5" cy="371.653" r="109.5" style="fill:#fff;" /></g
			><path
				d="M259.921,473.825c-115.264,-32.283 -259.921,-101.168 -259.921,-101.168c0,0 134.33,-63.966 247.241,-97.506c30.094,-117.304 105.259,-275.151 105.259,-275.151c0,0 75.165,157.847 105.259,275.151c112.911,33.54 247.241,97.506 247.241,97.506c0,0 -144.657,68.885 -259.921,101.168c-34.491,109.19 -92.579,231.175 -92.579,231.175c0,0 -58.088,-121.985 -92.579,-231.175Z"
				style="fill:#fff;fill-opacity:0.9;"
			/></g
		></svg
	>
</div>
