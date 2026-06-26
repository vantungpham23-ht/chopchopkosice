<script>
	import { currentLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let visible = false;
	let orderRef;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		if (orderRef) observer.observe(orderRef);
		visible = true;
		return () => observer.disconnect();
	});

	const deliveryApps = [
		{ name: 'Bistro.sk', url: 'https://bistro.sk', note: { sk: 'Rýchle mestské doručenie', en: 'Fast city delivery' } },
		{ name: 'Bolt Food', url: 'https://bolt.food', note: { sk: 'Obľúbené denné menu', en: 'Popular daily menu' } },
		{ name: 'Wolt', url: 'https://wolt.com', note: { sk: 'Prémiový zážitok doma', en: 'A premium meal at home' } }
	];

	const highlights = [
		{ label: { sk: 'Doručenie', en: 'Delivery' }, value: '30–45 min' },
		{ label: { sk: 'Servírovanie', en: 'Served' }, value: { sk: 'Horúce', en: 'Hot' } },
		{ label: { sk: 'Lokalita', en: 'Location' }, value: 'Košice' }
	];
</script>

<section id="order" class="py-28 md:py-36 px-6" style="background: #10271c;">
	<div bind:this={orderRef} class="max-w-6xl mx-auto">
		<div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
			<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 0ms;">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-12 h-px" style="background: #ec5d38;"></div>
					<p class="text-xs font-medium tracking-[0.28em] uppercase" style="color: #ec5d38;">
						{$currentLang === 'sk' ? 'Objednajte si doma' : 'Bring Chop Chop Home'}
					</p>
				</div>

				<h2 class="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6" style="color: white; font-family: Georgia, 'Times New Roman', serif;">
					{$currentLang === 'sk' ? 'Chop Chop aj mimo reštaurácie.' : 'Chop Chop beyond the restaurant.'}
				</h2>

				<p class="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style="color: rgba(255,255,255,0.72);">
					{$currentLang === 'sk'
						? 'Keď sa k nám neviete zastaviť osobne, prineste si atmosféru Chop Chop domov. Objednajte si jedlá, ktoré dorazia horúce, vyvážené a pripravené s rovnakou starostlivosťou.'
						: 'When you cannot stop by in person, bring the Chop Chop atmosphere home. Order dishes that arrive hot, balanced, and prepared with the same care.'}
				</p>

				<div class="grid sm:grid-cols-3 gap-3">
					{#each highlights as item}
						<div class="rounded-2xl px-4 py-5 border" style="border-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);">
							<div class="text-[11px] uppercase tracking-[0.24em] mb-2" style="color: rgba(255,255,255,0.42);">{item.label[$currentLang]}</div>
							<div class="text-lg font-semibold" style="color: white;">{typeof item.value === 'string' ? item.value : item.value[$currentLang]}</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 200ms;">
				<div class="rounded-[2rem] overflow-hidden border" style="border-color: rgba(255,255,255,0.08); background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%); backdrop-filter: blur(10px);">
					<div class="px-8 py-7 border-b" style="border-color: rgba(255,255,255,0.08);">
						<div class="text-xs uppercase tracking-[0.26em] mb-2" style="color: rgba(255,255,255,0.42);">
							{$currentLang === 'sk' ? 'Dostupné platformy' : 'Available Platforms'}
						</div>
						<h3 class="text-2xl md:text-3xl font-bold" style="color: white; font-family: Georgia, 'Times New Roman', serif;">
							{$currentLang === 'sk' ? 'Objednajte si podľa preferencie.' : 'Choose your preferred platform.'}
						</h3>
					</div>

					<div class="p-5 md:p-6 space-y-4">
						{#each deliveryApps as app}
							<a
								href={app.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center justify-between rounded-[1.5rem] px-5 py-5 transition-all duration-300 hover:-translate-y-0.5"
								style="background: white; box-shadow: 0 12px 30px rgba(0,0,0,0.12);"
							>
								<div>
									<div class="text-lg font-bold mb-1" style="color: #19452b;">{app.name}</div>
									<div class="text-sm" style="color: rgba(25,69,43,0.58);">{app.note[$currentLang]}</div>
								</div>
								<div class="flex items-center gap-3">
									<span class="text-xs uppercase tracking-[0.2em]" style="color: #ec5d38;">
										{$currentLang === 'sk' ? 'Objednať' : 'Order'}
									</span>
									<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style="color: #19452b;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<path d="M5 12h14"/>
										<path d="M13 5l7 7-7 7"/>
									</svg>
								</div>
							</a>
						{/each}
					</div>

					<div class="px-8 py-6 border-t flex flex-wrap items-center gap-4 text-sm" style="border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.75);">
						<span>{$currentLang === 'sk' ? 'Po – Pi' : 'Mon – Fri'}: <strong style="color: white;">9:00 – 21:00</strong></span>
						<span style="color: rgba(255,255,255,0.25);">•</span>
						<span>{$currentLang === 'sk' ? 'So – Ne' : 'Sat – Sun'}: <strong style="color: white;">10:00 – 21:00</strong></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
