<script lang="ts">
	import { onMount } from 'svelte';
	import StyledWord from './StyledWord.svelte';

	onMount(() => {
		const words: string[] = [
			'reative',
			'urious',
			'onscientious',
			'ollaborative',
			'lever',
			'ommunicative'
		];
		let wordIndex = 0;
		let letterIndex = 0;
		let isDeleting = false;
		let typingSpeed = 100;
		let pauseDuration = 1000;
		const textAnimation = document.getElementById('adjectives');

        
		function animateText() {
			const currentWord = words[wordIndex];
			if (isDeleting) {
				if (textAnimation) {
					textAnimation.textContent = currentWord.substring(0, letterIndex - 1);
					letterIndex--;
				}
			} else {
				if (textAnimation) {
					textAnimation.textContent = currentWord.substring(0, letterIndex + 1);
					letterIndex++;
				}
			}

			if (isDeleting && letterIndex === 0) {
				isDeleting = false;
				wordIndex = (wordIndex + 1) % words.length;
				setTimeout(animateText, pauseDuration); // Pause after typing each word
			} else if (isDeleting && letterIndex > 0) {
				setTimeout(animateText, typingSpeed); // Continue deleting
			} else if (letterIndex === currentWord.length + 1) {
				isDeleting = true;
				setTimeout(animateText, pauseDuration); // Pause after typing each word
			} else {
				setTimeout(animateText, typingSpeed); // Continue typing
			}
		}

        animateText(); // Start the animation
	});
</script>

<div class="h-max w-full font-bold obscure-stars">
	<div class="text-6xl pb-4">
		<p id="greeting" class="text-center">Hi, I'm</p>
	</div>
	<div class="inline-block text-8xl text-center min-w-full">
		<StyledWord text="Just"/>
		<div>A</div>
		<span>C<span id="adjectives" /></span>
		<div>Engineer</div>
	</div>
	<div class="pt-28 text-4xl text-center">
		<span>But you can just call me </span><StyledWord text="Jace" />
	</div>
</div>

<style>
	#adjectives::after {
		content: '|';
		animation: blink-caret 0.95s step-end infinite;
	}

	@keyframes blink-caret {
		from,
		to {
			opacity: 0;
		}
		60% {
			opacity: 100;
		}
	}
</style>
