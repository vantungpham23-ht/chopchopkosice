<script>
	import '../app.css';
	import { currentLang } from '$lib/stores/language';
</script>

<svelte:head>
	<title>CHOP CHOP - {$currentLang === 'sk' ? 'Autentická ázijská kuchyňa' : 'Authentic Asian Cuisine'} | Košice</title>
	<meta name="description" content={$currentLang === 'sk' ? 'Chop Chop - Čerstvo nakrájané. Podávané horúce. Autentická ázijská kuchyňa v srdci Košíc.' : 'Chop Chop - Freshly Chopped. Served Hot. Authentic Asian cuisine in the heart of Košice.'} />
</svelte:head>

<slot />
