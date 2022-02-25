<script lang="ts">
	// Imports
	import { adviceStore } from '$lib/store/advice.store';
	import type { Advice } from '$lib/models';
	import Typewriter from 'svelte-typewriter';

	// Exports
	export { customClass as class };
	export let advice: Advice;
	export let loading: boolean;

	// Variables
	let customClass = '';
	$: formattedContent = `"${advice.content}"`;

	/**
	 * - RAndom Advice
	 */
	const randomAdvice = async () => {
		await adviceStore.randomAdvice();
	};
</script>

<div
	class="tada rounded-lg p-6 pb-16 bg-blue-50 text-center relative max-w-md md:p-12 md:pb-20  {customClass}"
>
	<!-- Advice Id -->
	<span class="text-cyan-50 font-bold uppercase">
		<span class="mr-1 inline-block"> ADVICE </span>
		# {advice.id}</span
	>
	<!-- end Advice Id -->

	<!-- Advice Content -->
	{#key advice.content}
		<div class="min-h-[2rem] duraion-500">
			<Typewriter>
				<h1 class="text-white text-2xl mt-6">
					{formattedContent}
				</h1>
			</Typewriter>
		</div>
	{/key}
	<!-- end Advice Content -->

	<!-- Divider -->
	<div class="mt-6 flex justify-center">
		<img class="md:hidden" src="/images/pattern-divider-mobile.svg" alt="Pattern Mobile" />

		<img class="hidden md:block" src="/images/pattern-divider-desktop.svg" alt="Pattern Mobile" />
	</div>
	<!-- Divider -->

	<!-- Random Advice Button -->
	<button
		aria-label="Random Advice"
		on:click={() => randomAdvice()}
		class="duration-500 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-cyan-50 grid place-content-center hover:shadow-3xl"
	>
		<img class:animate-spin={loading} src="/images/icon-dice.svg" alt="Dice" />
	</button>
	<!-- end Random Advice Button -->
</div>
