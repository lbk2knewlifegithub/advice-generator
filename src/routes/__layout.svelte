<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.scss';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
		rel="stylesheet"
	/>

	<title>Frontend Mentor | Advice generator app</title>
</svelte:head>

<slot />

<Footer />
