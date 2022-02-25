<script lang="ts">
	// Import
	import AdviceComponent from '$lib/components/Advice.svelte';
	import type { Advice } from '$lib/models';
	import { adviceStore } from '$lib/store/advice.store';
	import { onMount } from 'svelte';

	// Exports
	export let advice: Advice;

	onMount(() => {
		adviceStore.setAdvice(advice);
	});
</script>

<main class="container mt-32 sm:mt-40 md:mt-56 lg:mt-0 lg:h-screen lg:grid lg:place-content-center">
	{#if $adviceStore.advice}
		<AdviceComponent loading={$adviceStore.loading} advice={$adviceStore.advice} class="mx-auto" />
	{/if}
</main>
