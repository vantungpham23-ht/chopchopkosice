<script>
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		function onScroll() {
			visible = window.scrollY > 400;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button 
		on:click={toTop}
		class="scroll-top fixed bottom-6 right-6 z-50 animate-scale-in"
		aria-label="Scroll to top"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
		</svg>
	</button>
{/if}
