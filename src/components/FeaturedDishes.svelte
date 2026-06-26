<script>
	import { currentLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let visible = false;
	let menuRef;

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
		if (menuRef) observer.observe(menuRef);
		visible = true;
		return () => observer.disconnect();
	});

	const slovakiaTimeZone = 'Europe/Bratislava';

	const lunchMenu = [
		{
			day: { sk: 'Pondelok', en: 'Monday' },
			soups: [
				{ sk: 'Ostrokyslá polievka', en: 'Sour Soup' },
				{ sk: 'Kuracia polievka', en: 'Chicken Soup' }
			],
			dishes: [
				{ name: { sk: 'Chrumkavé kura s jasmínovou ryžou', en: 'Crispy Chicken with Jasmine Rice' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Kung pao s opekanými rezancami', en: 'Kung Pao with Fried Noodles' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Ryžové rezance s kuracím mäsom', en: 'Rice Noodles with Chicken' }, price: 7.9, new: false, allergens: [3] },
				{ name: { sk: 'Šalát s tofu', en: 'Tofu Salad' }, price: 7.9, new: false, allergens: [11] },
				{ name: { sk: 'Salmon Rolky 6ks + 3ks nem chay', en: 'Salmon Rolls 6pcs + 3pcs nem chay' }, price: 8.9, new: false, allergens: [1, 4, 7, 11] },
				{ name: { sk: 'Tori Poké – kuracie mäso', en: 'Tori Poké – chicken meat' }, price: 9.9, new: false, allergens: [1, 3, 6, 11] }
			]
		},
		{
			day: { sk: 'Utorok', en: 'Tuesday' },
			soups: [
				{ sk: 'Ostrokyslá polievka', en: 'Sour Soup' },
				{ sk: 'Kuracia polievka', en: 'Chicken Soup' }
			],
			dishes: [
				{ name: { sk: 'Opekané rezance s kuracím mäsom', en: 'Fried Noodles with Chicken' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Teriyaki kura s opekanými rezancami', en: 'Teriyaki Chicken with Fried Noodles' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Bun Nam Bo tofu', en: 'Bun Nam Bo Tofu' }, price: 7.9, new: false, allergens: [4] },
				{ name: { sk: 'BBQ na zelenina kura s jasmínovou ryžou', en: 'BBQ Chicken Veggies with Jasmine Rice' }, price: 8.2, new: false, allergens: [] },
				{ name: { sk: 'Chicken Rolky 6ks + 3ks nem chay', en: 'Chicken Rolls 6pcs + 3pcs nem chay' }, price: 8.9, new: false, allergens: [1, 3, 6, 7, 11] },
				{ name: { sk: 'Gyuniku Poké – hovädzie mäso', en: 'Gyuniku Poké – beef meat' }, price: 9.9, new: false, allergens: [6, 11] }
			]
		},
		{
			day: { sk: 'Streda', en: 'Wednesday' },
			soups: [
				{ sk: 'Ostrokyslá polievka', en: 'Sour Soup' },
				{ sk: 'Kuracia polievka', en: 'Chicken Soup' }
			],
			dishes: [
				{ name: { sk: 'Chrumkavá kura s jasmínovou ryžou', en: 'Crispy Chicken with Jasmine Rice' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Kung pao s opekanými rezancami', en: 'Kung Pao with Fried Noodles' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Thai Curry kura s jasmínovou ryžou', en: 'Thai Curry Chicken with Jasmine Rice' }, price: 8.2, new: false, allergens: [2, 4, 7] },
				{ name: { sk: 'Šalát s kuracie', en: 'Chicken Salad' }, price: 7.9, new: false, allergens: [11] },
				{ name: { sk: 'Vegan Rolky 6ks + 3ks nem chay', en: 'Vegan Rolls 6pcs + 3pcs nem chay' }, price: 8.9, new: false, allergens: [1, 3, 6, 7, 11] },
				{ name: { sk: 'Tofu Poké – tofu', en: 'Tofu Poké – tofu' }, price: 9.9, new: false, allergens: [1, 6, 11] }
			]
		},
		{
			day: { sk: 'Štvrtok', en: 'Thursday' },
			soups: [
				{ sk: 'Ostrokyslá polievka', en: 'Sour Soup' },
				{ sk: 'Kuracia polievka', en: 'Chicken Soup' }
			],
			dishes: [
				{ name: { sk: 'Opekané rezance s kuracím mäsom', en: 'Fried Noodles with Chicken' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Teriyaki kura s opekanými rezancami', en: 'Teriyaki Chicken with Fried Noodles' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Tempura kuracie s hranolkami', en: 'Chicken Tempura with Fries' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Mangové soté tofu s jasmínovou ryžou', en: 'Mango Sauté Tofu with Jasmine Rice' }, price: 8.2, new: false, allergens: [7] },
				{ name: { sk: 'Salmon Rolky 6ks + 3ks nem chay', en: 'Salmon Rolls 6pcs + 3pcs nem chay' }, price: 8.9, new: false, allergens: [1, 4, 7, 11] },
				{ name: { sk: 'Sake Poké – losos', en: 'Sake Poké – salmon' }, price: 10.9, new: false, allergens: [4, 6, 11] }
			]
		},
		{
			day: { sk: 'Piatok', en: 'Friday' },
			soups: [
				{ sk: 'Ostrokyslá polievka', en: 'Sour Soup' },
				{ sk: 'Kuracia polievka', en: 'Chicken Soup' }
			],
			dishes: [
				{ name: { sk: 'Ryžové rezance s kuracím mäsom', en: 'Rice Noodles with Chicken' }, price: 7.9, new: false, allergens: [3] },
				{ name: { sk: 'Bun Nam Bo tofu', en: 'Bun Nam Bo Tofu' }, price: 7.9, new: false, allergens: [4] },
				{ name: { sk: 'Kung pao s opekanými rezancami', en: 'Kung Pao with Fried Noodles' }, price: 7.9, new: false, allergens: [1, 3] },
				{ name: { sk: 'Šalát s kuracie', en: 'Chicken Salad' }, price: 7.9, new: false, allergens: [11] },
				{ name: { sk: 'Chicken Rolky 6ks + 3ks nem chay', en: 'Chicken Rolls 6pcs + 3pcs nem chay' }, price: 8.9, new: false, allergens: [1, 3, 6, 7, 11] },
				{ name: { sk: 'Tofu Poké – tofu', en: 'Tofu Poké – tofu' }, price: 9.9, new: false, allergens: [1, 6, 11] }
			]
		}
	];

	function t(obj) {
		return obj[$currentLang] || obj.sk || '';
	}

	function formatPrice(p) {
		return p.toFixed(2).replace('.', ',') + ' €';
	}

	function getTodayIndex() {
		const slovakiaWeekday = new Intl.DateTimeFormat('en-US', {
			timeZone: slovakiaTimeZone,
			weekday: 'short'
		}).format(new Date());

		const weekdayMap = {
			Mon: 0,
			Tue: 1,
			Wed: 2,
			Thu: 3,
			Fri: 4,
			Sat: 5,
			Sun: 6
		};

		return weekdayMap[slovakiaWeekday] ?? 0;
	}

	function getOrderedLunchMenu() {
		const todayIndex = getTodayIndex();

		if (todayIndex > 4) {
			return lunchMenu.map((item, index) => ({ item, originalIndex: index }));
		}

		return lunchMenu
			.map((item, index) => ({ item, originalIndex: index }))
			.sort((a, b) => {
				if (a.originalIndex === todayIndex) return -1;
				if (b.originalIndex === todayIndex) return 1;
				return a.originalIndex - b.originalIndex;
			});
	}
</script>

<section id="obedove-menu" class="py-28 md:py-36 px-6" style="background: #f8f4eb;">
	<div bind:this={menuRef} class="max-w-6xl mx-auto">
		<div class="max-w-3xl mb-16 md:mb-20 transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 0ms;">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-12 h-px" style="background: #ec5d38;"></div>
				<p class="text-xs font-medium tracking-[0.28em] uppercase" style="color: #ec5d38;">
					{$currentLang === 'sk' ? 'Denné menu' : 'Daily Lunch Menu'}
				</p>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">
				{$currentLang === 'sk' ? 'Každodenné obedové servírovanie s podpisom Chop Chop.' : 'A daily lunch service with the Chop Chop signature.'}
			</h2>
			<p class="text-base md:text-lg leading-relaxed mb-8" style="color: #19452b; opacity: 0.72;">
				{$currentLang === 'sk'
					? 'Polievka, päť obedových možností a servírovanie pripravené pre mestský rytmus. Vybraný deň sa automaticky zvýrazní podľa času na Slovensku.'
					: 'A soup, five lunch options, and a service designed for the rhythm of the city. The current day is highlighted automatically based on Slovakia time.'}
			</p>
			<div class="flex flex-wrap items-center gap-4">
				<div class="inline-flex items-center gap-2 px-5 py-3 rounded-full" style="background: #19452b; color: white;">
					<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10"/>
						<path d="M12 6v6l4 2"/>
					</svg>
					<span class="text-sm font-medium">10:00 – 14:00</span>
				</div>
				<a
					href="/menu"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
					style="background: white; color: #19452b; border: 1px solid rgba(25,69,43,0.08); box-shadow: 0 12px 28px rgba(25,69,43,0.08);"
				>
					<span>{$currentLang === 'sk' ? 'Zobraziť hlavné menu' : 'View Full Menu'}</span>
					<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M5 12h14"/>
						<path d="M13 5l7 7-7 7"/>
					</svg>
				</a>
			</div>
		</div>

		<div class="space-y-5 transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 120ms;">
			{#each getOrderedLunchMenu() as entry, i}
				{@const item = entry.item}
				{@const isToday = entry.originalIndex === getTodayIndex()}
				<div
					class="rounded-[2rem] overflow-hidden transition-all duration-500 lunch-card {isToday ? 'today-card' : ''}"
					style="background: white; box-shadow: {isToday ? '0 26px 60px rgba(25,69,43,0.16)' : '0 12px 30px rgba(25,69,43,0.06)'}; animation-delay: {isToday ? '250ms' : `${180 + i * 70}ms`};"
				>
					<div class="px-6 md:px-8 py-5 md:py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-5" style="background: {isToday ? 'linear-gradient(135deg, #19452b 0%, #132f22 100%)' : '#f2ece0'}; border-bottom: 1px solid {isToday ? 'rgba(255,255,255,0.08)' : 'rgba(25,69,43,0.08)'};">
						<div>
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: {isToday ? 'rgba(255,255,255,0.08)' : 'white'}; color: {isToday ? 'white' : '#19452b'};">
									<span class="text-lg">{isToday ? '✦' : '•'}</span>
								</div>
								{#if isToday}
									<span class="text-[11px] px-3 py-1 rounded-full font-semibold tracking-[0.18em] uppercase" style="background: #ec5d38; color: white;">
										{$currentLang === 'sk' ? 'Dnes' : 'Today'}
									</span>
								{/if}
							</div>
							<h3 class="text-3xl md:text-4xl font-bold mb-2" style="color: {isToday ? 'white' : '#19452b'}; font-family: Georgia, 'Times New Roman', serif;">
								{t(item.day)}
							</h3>
							<p class="text-sm" style="color: {isToday ? 'rgba(255,255,255,0.72)' : 'rgba(25,69,43,0.55)'};">
								{$currentLang === 'sk' ? 'Polievka dňa + 5 obedových jedál' : 'Soup of the day + 5 lunch dishes'}
							</p>
						</div>

						<div class="md:text-right">
							<div class="text-[11px] uppercase tracking-[0.24em] mb-1" style="color: {isToday ? 'rgba(255,255,255,0.42)' : 'rgba(25,69,43,0.38)'};">
								{$currentLang === 'sk' ? 'Cena obedov' : 'Lunch prices'}
							</div>
							<div class="text-xl md:text-2xl font-bold" style="color: {isToday ? '#f7b8a9' : '#ec5d38'};">
								{formatPrice(item.dishes[0].price)} – {formatPrice(item.dishes[item.dishes.length - 1].price)}
							</div>
						</div>
					</div>

					<div class="p-6 md:p-8">
						<div class="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-10 items-start">
							<div>
								<div class="text-[11px] uppercase tracking-[0.24em] mb-4" style="color: #ec5d38;">
									{$currentLang === 'sk' ? 'Polievky' : 'Soups'}
								</div>
								<div class="space-y-3">
									{#each item.soups as soup}
										<div class="text-base md:text-lg leading-relaxed" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">
											{t(soup)}
										</div>
									{/each}
								</div>
								<div class="mt-6 pt-5 border-t" style="border-color: rgba(25,69,43,0.08);">
									<div class="text-[11px] uppercase tracking-[0.24em] mb-2" style="color: rgba(25,69,43,0.38);">
										{$currentLang === 'sk' ? 'Nápoj' : 'Drink'}
									</div>
									<p class="text-sm leading-relaxed" style="color: #19452b; opacity: 0.72;">
										+ 0,3l {$currentLang === 'sk' ? 'čapovaného nápoja' : 'soft drink'}
										<span class="font-semibold" style="color: #ec5d38;"> · {$currentLang === 'sk' ? 'zdarma' : 'free'}</span>
									</p>
								</div>
							</div>

							<div class="space-y-3">
								<div class="text-[11px] uppercase tracking-[0.24em] mb-4" style="color: #ec5d38;">
									{$currentLang === 'sk' ? 'Výber jedál' : 'Selected Dishes'}
								</div>
								{#each item.dishes as dish, j}
									<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-start py-3 dish-row">
										<div class="text-sm font-semibold pt-1" style="color: rgba(25,69,43,0.35);">{j + 1}</div>
										<div>
											<div class="flex flex-wrap items-center gap-2">
												<span class="text-base md:text-lg" style="color: #19452b;">{t(dish.name)}</span>
												{#if dish.new}
													<span class="text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-[0.18em]" style="background: rgba(236,93,56,0.12); color: #ec5d38;">
														{$currentLang === 'sk' ? 'Novinka' : 'New'}
													</span>
												{/if}
											</div>
											{#if dish.allergens && dish.allergens.length > 0}
												<div class="flex flex-wrap gap-1 mt-1">
													{#each dish.allergens as a}
														<span class="text-[10px] px-1.5 py-0.5 rounded" style="background: rgba(25,69,43,0.06); color: rgba(25,69,43,0.5);">[{a}]</span>
													{/each}
												</div>
											{/if}
										</div>
										<div class="text-base font-semibold whitespace-nowrap" style="color: #ec5d38;">{formatPrice(dish.price)}</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 300ms;">
			<div class="grid md:grid-cols-3 gap-4 rounded-[2rem] p-6 md:p-8" style="background: white; box-shadow: 0 18px 45px rgba(25,69,43,0.08);">
				<div>
					<div class="text-[11px] uppercase tracking-[0.24em] mb-2" style="color: rgba(25,69,43,0.38);">{$currentLang === 'sk' ? 'Podávanie od' : 'From'}</div>
					<div class="text-3xl font-bold" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">10:00</div>
				</div>
				<div>
					<div class="text-[11px] uppercase tracking-[0.24em] mb-2" style="color: rgba(25,69,43,0.38);">{$currentLang === 'sk' ? 'Podávanie do' : 'Until'}</div>
					<div class="text-3xl font-bold" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">14:00</div>
				</div>
				<div>
					<div class="text-[11px] uppercase tracking-[0.24em] mb-2" style="color: rgba(25,69,43,0.38);">{$currentLang === 'sk' ? 'Cenové rozpätie' : 'Price range'}</div>
					<div class="text-2xl font-bold" style="color: #ec5d38; font-family: Georgia, 'Times New Roman', serif;">€7.50 – €9.50</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.lunch-card {
		position: relative;
		border: 1px solid rgba(25, 69, 43, 0.06);
	}

	.today-card {
		animation: todayPulse 2.8s ease-in-out infinite;
	}

	.today-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 2rem;
		box-shadow: 0 0 0 0 rgba(236, 93, 56, 0.18);
		animation: todayGlow 2.8s ease-in-out infinite;
		pointer-events: none;
	}

	.dish-row + .dish-row {
		border-top: 1px solid rgba(25, 69, 43, 0.07);
	}

	@keyframes todayPulse {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-3px) scale(1.005);
		}
	}

	@keyframes todayGlow {
		0%,
		100% {
			box-shadow: 0 0 0 0 rgba(236, 93, 56, 0.12);
		}
		50% {
			box-shadow: 0 0 0 18px rgba(236, 93, 56, 0);
		}
	}
</style>
