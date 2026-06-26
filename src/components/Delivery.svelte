<script>
	import { currentLang } from '$lib/stores/language';

	const partners = [
		{ name: 'Bistro.sk', url: 'https://bistro.sk' },
		{ name: 'Bolt Food', url: 'https://bolt.food' },
		{ name: 'Wolt', url: 'https://wolt.com' },
		{ name: 'Grab', url: 'https://grab.com' }
	];
</script>

<section id="delivery" class="py-24 px-6" style="background: #f5efe0;">
	<div class="max-w-3xl mx-auto text-center">
		<!-- Header -->
		<div class="mb-12">
			<p class="text-xs font-medium tracking-[0.2em] uppercase mb-3" style="color: #ec5d38;">
				{$currentLang === 'sk' ? 'Doručovanie' : 'Delivery'}
			</p>
			<h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #19452b;">
				{$currentLang === 'sk' ? 'Objednajte online' : 'Order Online'}
			</h2>
			<p class="text-base max-w-md mx-auto" style="color: #19452b; opacity: 0.6;">
				{$currentLang === 'sk' 
					? 'Rýchle doručenie do 30-45 minút v Košiciach' 
					: 'Fast delivery in 30-45 minutes in Košice'}
			</p>
		</div>

		<!-- Apps -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
			{#each partners as p}
				<a
					href={p.url}
					target="_blank"
					rel="noopener noreferrer"
					class="p-6 rounded-2xl transition-all duration-300 hover:scale-105"
					style="background: white;"
				>
					<div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style="background: #19452b;">
						<svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
							<path d="M5 13l4 4L19 7"/>
						</svg>
					</div>
					<span class="font-medium text-sm" style="color: #19452b;">{p.name}</span>
				</a>
			{/each}
		</div>

		<!-- Hours -->
		<div class="inline-flex items-center gap-2 text-sm" style="color: #19452b; opacity: 0.6;">
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ec5d38" stroke-width="2">
				<circle cx="12" cy="12" r="10"/>
				<path d="M12 6v6l4 2"/>
			</svg>
			<span>
				{$currentLang === 'sk' ? 'Otváracie hodiny: 10:00 - 22:00' : 'Opening hours: 10:00 - 22:00'}
			</span>
		</div>
	</div>
</section>
