<script lang="ts">
	// Imports
	import type { Advice } from '$lib/models';

	// Exports
	export let advice: Advice;
</script>

<svelte:head>
	<title>Advice Generator</title>
</svelte:head>

<main class="container">
	<div class="rounded-lg p-10 bg-blue text-center">
		<!-- Advice Id -->
		<span class="text-cyan-50 font-bold uppercase">ADVICE #{advice.id}</span>
		<!-- end Advice Id -->

		<!-- Advice Content -->
		<h1 class="text-white text-lg mt-6">
			"{advice.content}"
		</h1>
		<!-- end Advice Content -->

		<!-- Line -->
        <img src="/images/pattern-line-mobile.svg" alt="Pattern Mobile">
		<!-- end Line -->
	</div>
</main>
