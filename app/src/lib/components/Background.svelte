<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const svgStar = `<svg
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
		></svg>
    `;

	function createStar(): HTMLDivElement {
		const div = document.createElement('div');
		div.classList.add('w-4');
		div.classList.add('h-4');
		div.classList.add('absolute');
		div.classList.add('star');
		div.innerHTML = svgStar;
		return div;
	}

	function createStars() {
		const container = document.getElementById('starchart');

		const backgroundStars = window.innerWidth > 1200 ? 50 : 25;
		for (let i = 0; i < backgroundStars; i++) {
			const star = createStar();
			star.classList.add('opacity-0');
			star.classList.add('background-stars');
			star.classList.add('animate-starPulse');

			star.style.left = `${Math.random() * window.innerWidth}px`;
			star.style.top = `${Math.random() * window.innerHeight}px`;
			star.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
			container?.appendChild(star);
		}

		for (let i = 0; i < 25; i++) {
			const star = createStar();
			star.classList.add('opacity-40');

			star.setAttribute('id', `star${i}`);
			star.style.left = `${Math.random() * window.innerWidth}px`;
			star.style.top = `${Math.random() * -window.innerHeight}px`;
			star.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
			container?.appendChild(star);
			gsap.to(`#star${i}`, {
				delay: Math.random() * 4,
				y: window.innerHeight * 2,
				x: -800,
				duration: 4,
				repeat: -1,
				rotate: 1080,
				ease: 'power4',
				onRepeat: () => {
					const star = document.getElementById(`star${i}`) as HTMLElement;
					star.style.left = `${Math.random() * window.innerWidth}px`;
					star.style.top = `${Math.random() * -window.innerHeight}px`;
				}
			});
		}
	}

	function animateBackgroundStars() {
		gsap.to(".animate-starPulse", {
			opacity: 0.7,
			duration: 3,
			ease: "power2.inOut",
			yoyo: true,
			repeat: -1,
			repeatDelay: 1,
			stagger: 0.2,
		});
	}

	onMount(() => {
		createStars();
		gsap.to(".animate-starPulse", {
			opacity: 0,
			duration: 1,
		});
		animateBackgroundStars();
		// 	if (typeof window !== 'undefined') {
		// 		import('gsap/ScrollTrigger').then((module) => {
		// 			gsap.registerPlugin(module.ScrollTrigger);
		// 			gsap.to('.background-stars', {
		// 				scrollTrigger: {
		// 					trigger: '.background-stars',
		// 					start: 'top center',
		// 					markers: true,
		// 					scrub: 1,
		// 					toggleActions: 'restart none reverse none'
		// 				},
		// 				y: 10000,
		// 				duration: 3
		// 			});
		// 		});
		// 	}
	});
</script>

<div id="starchart" class="absolute w-full h-screen overflow-hidden" />
