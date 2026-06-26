<script>
	import { currentLang, toggleLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<button 
		on:click={toggleLang}
		class="fixed top-4 right-4 z-50 group"
		aria-label="Toggle language"
	>
		<div 
			class="relative flex items-center rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
			style="background: white; border: 2px solid rgba(25,69,43,0.1);"
		>
			<!-- SK Button -->
			<div 
				class="px-3 py-2 transition-all duration-300 relative"
				style="background: {$currentLang === 'sk' ? '#19452b' : 'transparent'};"
			>
				<span 
					class="text-xs font-bold tracking-wider transition-colors duration-300"
					style="color: {$currentLang === 'sk' ? 'white' : '#19452b'};"
				>SK</span>
			</div>
			
			<!-- Divider -->
			<div class="w-px h-5" style="background: rgba(25,69,43,0.1);"></div>
			
			<!-- EN Button -->
			<div 
				class="px-3 py-2 transition-all duration-300 relative"
				style="background: {$currentLang === 'en' ? '#19452b' : 'transparent'};"
			>
				<span 
					class="text-xs font-bold tracking-wider transition-colors duration-300"
					style="color: {$currentLang === 'en' ? 'white' : '#19452b'};"
				>EN</span>
			</div>
		</div>
	</button>
{/if}

<style>
	button:hover > div {
		border-color: #19452b;
	}
</style>
