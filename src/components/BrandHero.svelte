<script>
	import { currentLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		setTimeout(() => mounted = true, 100);
		window.scrollTo({ top: 0, behavior: 'instant' });
	});

	const heroImages = [
		{ src: '/images/fachada.jpg', alt: 'Chop Chop Košice - mặt tiền nhà hàng' },
		{ src: '/images/interior-1.jpg', alt: 'Không gian bên trong Chop Chop' },
		{ src: '/images/interior-2.jpg', alt: 'Nội thất nhà hàng Chop Chop' }
	];

	let activeImageIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			activeImageIndex = (activeImageIndex + 1) % heroImages.length;
		}, 4500);
		return () => clearInterval(interval);
	});

	const hours = {
		label: { sk: 'Otvorené denne', en: 'Open Daily' },
		weekday: { sk: 'Po – Pi: 9:00 – 21:00', en: 'Mon – Fri: 9:00 – 21:00' },
		weekend: { sk: 'So – Ne: 10:00 – 21:00', en: 'Sat – Sun: 10:00 – 21:00' }
	};
</script>

<section class="relative min-h-screen flex items-center overflow-hidden" style="background: #0d1f17;">
	{#each heroImages as img, idx}
		<div
			class="absolute inset-0 transition-opacity duration-[2200ms] ease-in-out"
			style="opacity: {activeImageIndex === idx ? 1 : 0};"
		>
			<img
				src={img.src}
				alt={img.alt}
				class="w-full h-full object-cover"
				style="filter: brightness(0.38) saturate(0.9);"
			/>
		</div>
	{/each}

	<div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(13,31,23,0.88) 0%, rgba(13,31,23,0.42) 60%, rgba(25,69,43,0.28) 100%);"></div>

	<div class="absolute top-0 left-0 w-1 h-full transition-all duration-1000 {mounted ? 'opacity-100' : 'opacity-0'}" style="background: linear-gradient(180deg, #ec5d38 0%, transparent 55%);"></div>

	<div class="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-24 md:py-32 w-full">
		<div class="max-w-3xl">
			<div
				class="inline-flex items-center gap-3 mb-8 transition-all duration-1000 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
				style="transition-delay: 0ms;"
			>
				<div class="w-12 h-px" style="background: #ec5d38;"></div>
				<span class="text-xs font-medium tracking-[0.35em] uppercase" style="color: #ec5d38;">
					Košice · {$currentLang === 'sk' ? 'Autentická ázijská kuchyňa' : 'Authentic Asian Cuisine'}
				</span>
			</div>

			<div
				class="mb-10 transition-all duration-1200 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style="transition-delay: 100ms;"
			>
				<img
					src="/images/logo-restaurant.png"
					alt="CHOP CHOP"
					class="h-24 md:h-32 w-auto"
					style="filter: drop-shadow(0 4px 30px rgba(0,0,0,0.4)); object-fit: contain;"
				/>
			</div>

			<div
				class="transition-all duration-1200 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style="transition-delay: 250ms;"
			>
				<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6" style="color: white; font-family: Georgia, 'Times New Roman', serif;">
					{$currentLang === 'sk'
						? 'Chuť Ázie.'
						: 'Flavors of Asia.'}
					<br />
					<span style="color: #ec5d38;">
						{$currentLang === 'sk' ? 'Priamo v Košiciach.' : 'Right here in Košice.'}
					</span>
				</h1>

				<p class="text-base md:text-lg max-w-xl leading-relaxed mb-10" style="color: rgba(255,255,255,0.72);">
					{$currentLang === 'sk'
						? 'Autentická ázijská kuchyňa v srdci Košíc. Sushi, Pho, Wok — každé jedlo pripravované s vášňou a čerstvými ingredienciami.'
						: 'Authentic Asian cuisine in the heart of Košice. Sushi, Pho, Wok — every dish prepared with passion and the freshest ingredients.'}
				</p>
			</div>

			<div
				class="flex flex-wrap items-center gap-4 transition-all duration-1200 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style="transition-delay: 400ms;"
			>
				<a
					href="#order"
					class="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm rounded-full transition-all duration-300 hover:scale-[1.02]"
					style="background: #ec5d38; color: white; box-shadow: 0 8px 32px rgba(236,93,56,0.35);"
				>
					<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
					{$currentLang === 'sk' ? 'Objednať online' : 'Order Now'}
				</a>

				<a
					href="#brand-story"
					class="inline-flex items-center gap-2 px-6 py-4 font-medium text-sm rounded-full transition-all duration-300 hover:scale-[1.02]"
					style="border: 1px solid rgba(255,255,255,0.3); color: white; backdrop-filter: blur(8px);"
				>
					{$currentLang === 'sk' ? 'Naša história' : 'Our Story'}
				</a>

				<a
					href="#obedove-menu"
					class="inline-flex items-center gap-2 px-6 py-4 font-medium text-sm rounded-full transition-all duration-300 hover:scale-[1.02]"
					style="color: rgba(255,255,255,0.6); text-decoration: underline; text-underline-offset: 4px;"
				>
					{$currentLang === 'sk' ? 'Denné menu' : 'Daily Lunch Menu'}
					<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M12 5v14M5 12l7 7 7-7"/>
					</svg>
				</a>
			</div>
		</div>

		<div
			class="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 transition-all duration-1200 {mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}"
			style="transition-delay: 600ms; width: 320px;"
		>
			<div class="relative">
				<div class="w-80 h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl" style="opacity: 0.85;">
					<img
						src="/images/interior-1.jpg"
						alt="Interior Chop Chop Košice"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl shadow-xl" style="background: white;">
					<div class="text-xs font-medium mb-0.5" style="color: #19452b; opacity: 0.5;">{hours.label[$currentLang]}</div>
					<div class="text-sm font-bold" style="color: #19452b;">{hours.weekday[$currentLang]}</div>
					<div class="text-xs" style="color: rgba(25,69,43,0.6);">{hours.weekend[$currentLang]}</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 {mounted ? 'opacity-100' : 'opacity-0'}"
		style="transition-delay: 800ms;"
	>
		<span class="text-[10px] tracking-[0.2em] uppercase" style="color: rgba(255,255,255,0.3);">{$currentLang === 'sk' ? 'Posúvať' : 'Scroll'}</span>
		<div class="w-px h-12" style="background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%); animation: scrollLine 2s ease-in-out infinite;"></div>
	</div>

	<div class="absolute bottom-8 right-8 flex gap-2">
		{#each heroImages as _, idx}
			<div
				class="rounded-full transition-all duration-500"
				style="width: {activeImageIndex === idx ? 24 : 6}px; height: 6px; background: {activeImageIndex === idx ? '#ec5d38' : 'rgba(255,255,255,0.3)'};"
			></div>
		{/each}
	</div>
</section>

<style>
	@keyframes scrollLine {
		0%, 100% { opacity: 0.3; transform: scaleY(1); }
		50% { opacity: 0.8; transform: scaleY(1.3); }
	}
</style>
