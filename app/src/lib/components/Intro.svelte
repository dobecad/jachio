<script lang="ts">
	import { onMount } from 'svelte';
	import StyledWord from './StyledWord.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

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
	<div class="lg:text-6xl md:text-4xl text-3xl pb-4">
		<p id="greeting" class="text-center">Hi, I'm</p>
	</div>
	<div class="inline-block lg:text-8xl md:text-6xl text-4xl text-center min-w-full">
		<StyledWord text="Just"/>
		<div>
			<StyledWord text="A"/>
		</div>
		<div>
			<span><StyledWord text="C"/><span id="adjectives" /></span>
		</div>
		<div>
			<StyledWord text="E"/>ngineer
		</div>
	</div>
	<div class="pt-28 lg:text-4xl md:text-3xl text-xl text-center">
		<span>But you can just call me <span><a href="https://www.linkedin.com/in/jace-hull/" target=_blank><UnderlinedText text={"Jace"} /></a></span></span>
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
