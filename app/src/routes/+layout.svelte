<script lang="ts">
	import '../app.css';
	import '@fontsource/chakra-petch';
</script>

<div class="w-full text-slate-100 font-chakrapetch">
	<slot />
</div>

<style>
	:global(body) {
		font-family: 'Chakra Petch', normal;
	}
</style>
