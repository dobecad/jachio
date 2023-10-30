<script lang="ts">
	import { onMount } from 'svelte';

    let showName = true;

	onMount(() => {
		const words: string[] = [
			'reative',
			'urious',
			'onscientious',
			'ollaborative',
			'lever',
			'ommitted',
			'ommunicative'
		];
		let wordIndex = 0;
		let letterIndex = 0;
		let isDeleting = false;
		let typingSpeed = 100;
		let pauseDuration = 1000;

        
		function animateText() {
            const textAnimation = document.getElementById('adjectives');
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

<div class="h-max w-full">
	<div class="text-6xl">
		<p id="greeting" class="text-center">Hi, I'm</p>
	</div>
	<div class="inline-block text-8xl text-center min-w-full">
		<span class="text-red-600">J</span><span>ust</span>
		<div>A</div>
		<span>C<span id="adjectives" /></span>
		<div>Engineer</div>
	</div>
	<div class="pt-20 text-4xl text-center">
		<span>(also known as </span><span class="text-red-600">J</span><span>ace)</span>
	</div>
</div>

<style>
	#adjectives::after {
		content: '|';
		animation: blink-caret 0.75s step-end infinite;
	}

	@keyframes blink-caret {
		from,
		to {
			opacity: 0;
		}
		50% {
			opacity: 100;
		}
	}
</style>
