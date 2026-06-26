<script>
	import { currentLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let mounted = false;
	
	onMount(() => {
		setTimeout(() => mounted = true, 100);
	});
</script>

<!-- Hero Section - Beige background with subtle overlay -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: #f5efe0;">
	<!-- Background image with overlay -->
	<div class="absolute inset-0">
		<img 
			src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80" 
			alt=""
			class="w-full h-full object-cover opacity-10"
		/>
		<div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(245,239,224,0.8) 0%, rgba(245,239,224,0.95) 100%);"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
		<!-- Logo on Beige -->
		<div 
			class="mb-12 transition-all duration-1000 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
		>
			<img 
				src="/images/Logo Chop Chop@2.svg" 
				alt="CHOP CHOP"
				class="w-64 md:w-80 h-auto mx-auto"
				style="filter: drop-shadow(0 2px 10px rgba(0,0,0,0.1));"
			/>
		</div>

		<!-- Tagline -->
		<div class="{mounted ? 'opacity-100' : 'opacity-0'}" style="transition-delay: 200ms;">
			<p class="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4" style="color: #19452b;">
				Freshy Chopped. Served Hot.
			</p>
			<p class="text-base max-w-lg mx-auto leading-relaxed" style="color: #19452b; opacity: 0.6;">
				{$currentLang === 'sk' 
					? 'Autentická ázijská kuchyňa v srdci Košíc. Každé jedlo pripravované s vášňou a čerstvými ingredienciami.' 
					: 'Authentic Asian cuisine in the heart of Košice. Every dish prepared with passion and fresh ingredients.'}
			</p>
		</div>

		<!-- CTA -->
		<div 
			class="mt-10 flex flex-col sm:flex-row gap-4 justify-center {mounted ? 'opacity-100' : 'opacity-0'}"
			style="transition-delay: 400ms;"
		>
			<a 
				href="#menu" 
				class="px-8 py-3.5 font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105"
				style="background: #19452b; color: white;"
			>
				{$currentLang === 'sk' ? 'Pozrieť jedálny lístok' : 'View Menu'}
			</a>
			<a 
				href="#delivery" 
				class="px-8 py-3.5 font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 border"
				style="border-color: #19452b; color: #19452b;"
			>
				{$currentLang === 'sk' ? 'Objednať online' : 'Order Online'}
			</a>
		</div>

		<!-- Scroll -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 {mounted ? 'opacity-100' : 'opacity-0'}" style="transition-delay: 600ms;">
			<a href="#menu" class="flex flex-col items-center gap-2" style="color: #19452b; opacity: 0.4;">
				<span class="text-[10px] font-medium tracking-[0.15em] uppercase">Scroll</span>
				<div class="w-5 h-8 border rounded-full flex justify-center pt-1" style="border-color: #19452b;">
					<div class="w-0.5 h-2 rounded-full animate-scroll-bounce" style="background: #19452b;"></div>
				</div>
			</a>
		</div>
	</div>
</section>
