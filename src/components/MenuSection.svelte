<script>
	import { categories, menuItems, allergenLabels } from '$lib/data/menuData';
	import { currentLang } from '$lib/stores/language';

	let activeCategory = 'all';

	const foodImages = {
		'soups': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
		'pho-bun': 'https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=400&q=80',
		'appetizers': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
		'main': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
		'noodles': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
		'sides': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
		'poke': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
		'sushi': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
		'sushi-sets': 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80'
	};

	let expanded = new Set(['all']);

	function toggleCategory(catId) {
		if (expanded.has(catId)) {
			expanded.delete(catId);
		} else {
			expanded.add(catId);
		}
		expanded = new Set(expanded);
	}

	function setActive(catId) {
		activeCategory = catId;
		expanded = new Set([catId]);
	}

	$: visibleCategories = categories.filter(c => c.id === activeCategory);

	function formatPrice(p) {
		return p.toFixed(2).replace('.', ',') + ' €';
	}

	function t(obj) {
		return obj[$currentLang] || obj.sk || '';
	}

	function getCategoryName(cat) {
		return cat.name[$currentLang] || cat.name.sk;
	}

	function getCategoryItems(catId) {
		return menuItems.filter(item => item.category === catId);
	}
</script>

<section id="menu" class="py-20 px-6" style="background: #f5efe0;">
	<div class="max-w-5xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-10">
			<p class="text-xs font-medium tracking-[0.2em] uppercase mb-3" style="color: #ec5d38;">
				{$currentLang === 'sk' ? 'Náš výber' : 'Our Selection'}
			</p>
			<h2 class="text-3xl md:text-4xl font-bold mb-3" style="color: #19452b;">
				{$currentLang === 'sk' ? 'Jedálny lístok' : 'Menu'}
			</h2>
			<p class="text-sm" style="color: #19452b; opacity: 0.6;">
				{menuItems.length} {$currentLang === 'sk' ? 'món' : 'dishes'}
			</p>
		</div>

		<!-- Categories Tabs -->
		<div class="flex flex-wrap justify-center gap-2 mb-10">
			{#each categories.filter(c => c.id !== 'all') as cat}
				<button
					on:click={() => setActive(cat.id)}
					class="px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5"
					style={activeCategory === cat.id
						? 'background: #19452b; color: white;'
						: 'background: white; color: #19452b;'}
				>
					<span>{cat.icon}</span>
					<span>{getCategoryName(cat)}</span>
					<span class="text-[10px] opacity-70">
						({getCategoryItems(cat.id).length})
					</span>
				</button>
			{/each}
		</div>

		<!-- Menu List -->
		<div class="space-y-3">
			{#each visibleCategories as cat, idx}
				{@const catItems = getCategoryItems(cat.id)}
				{@const isExpanded = expanded.has(cat.id)}
				<div 
					class="rounded-2xl transition-all duration-300"
					style="background: white;"
				>
					<!-- Category Header -->
					<button
						on:click={() => toggleCategory(cat.id)}
						class="w-full flex items-center justify-between p-4 md:p-5 text-left"
					>
						<div class="flex items-center gap-3">
							<span class="text-2xl">{cat.icon}</span>
							<div>
								<h3 class="font-bold text-base md:text-lg" style="color: #19452b;">
									{getCategoryName(cat)}
								</h3>
								<p class="text-xs" style="color: #19452b; opacity: 0.5;">
									{catItems.length} {$currentLang === 'sk' ? 'món' : 'items'}
								</p>
							</div>
						</div>
						<div 
							class="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
							style="background: #f5efe0; transform: rotate({isExpanded ? '180deg' : '0deg'});"
						>
							<svg class="w-4 h-4" style="color: #19452b;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
								<path d="M6 9l6 6 6-6"/>
							</svg>
						</div>
					</button>

					<!-- Category Items -->
					{#if isExpanded}
						<div class="px-4 md:px-5 pb-4 md:pb-5 space-y-3">
							{#each catItems as item}
								<div 
									class="flex gap-4 p-3 md:p-4 rounded-xl transition-all duration-300 hover:shadow-sm"
									style="background: #faf8f3;"
								>
									<div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden">
										<img 
											src={foodImages[item.category] || foodImages['main']} 
											alt={t(item.name)}
											class="w-full h-full object-cover"
											loading="lazy"
										/>
									</div>
									
									<div class="flex-1 min-w-0 flex flex-col justify-between">
										<div>
											<h4 class="font-semibold text-sm md:text-base leading-tight mb-1" style="color: #19452b;">
												{t(item.name)}
											</h4>
											<p class="text-xs leading-relaxed line-clamp-2" style="color: #19452b; opacity: 0.6;">
												{t(item.desc)}
											</p>
										</div>
										<div class="flex items-center justify-between mt-2">
											{#if item.allergens && item.allergens.length > 0}
												<div class="flex gap-1 flex-wrap">
													{#each item.allergens.slice(0, 3) as a}
														<span class="text-[10px] px-1.5 py-0.5 rounded" style="background: white; color: #19452b; border: 1px solid rgba(25,69,43,0.1);">
															{t(allergenLabels[a])}
														</span>
													{/each}
												</div>
											{:else}
												<span></span>
											{/if}
											<span class="font-bold text-sm md:text-base flex-shrink-0 ml-2" style="color: #ec5d38;">
												{formatPrice(item.price)}
											</span>
										</div>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
