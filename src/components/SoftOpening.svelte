<script>
	import { currentLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let visible = false;
	let sectionRef;

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
		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section
	bind:this={sectionRef}
	class="py-16 md:py-24 px-6 transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
	style="background: linear-gradient(180deg, #19452b 0%, #10271c 100%);"
>
	<div class="max-w-5xl mx-auto">
		<div class="text-center mb-10">
			<p class="text-xs font-medium tracking-[0.2em] uppercase mb-3" style="color: #ec5d38;">
				{$currentLang === 'sk' ? 'Otvorenie' : 'Grand Opening'}
			</p>
			<h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: white; font-family: Georgia, 'Times New Roman', serif;">
				{$currentLang === 'sk' ? 'Soft Opening' : 'Soft Opening'}
			</h2>
			<p class="text-base md:text-lg max-w-2xl mx-auto" style="color: rgba(255,255,255,0.8);">
				{$currentLang === 'sk'
					? 'Pripravujeme pre vás nezabudnuteľný zážitok z ázijskej kuchyne. Sledujte nás pre novinky a exkluzívne ponuky!'
					: 'We are preparing an unforgettable Asian cuisine experience for you. Follow us for news and exclusive offers!'}
			</p>
		</div>

		<div class="rounded-[2rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.4)] border" style="border-color: rgba(255,255,255,0.08);">
			<img
				src="/images/opening-banner.png"
				alt="Soft Opening"
				class="w-full h-auto object-cover"
				loading="lazy"
			/>
		</div>

		<div class="mt-10 text-center">
			<div class="inline-flex items-center gap-4 px-6 py-4 rounded-full" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);">
				<span class="w-3 h-3 rounded-full animate-pulse" style="background: #ec5d38; box-shadow: 0 0 0 6px rgba(236,93,56,0.2);"></span>
				<span class="text-sm font-medium" style="color: rgba(255,255,255,0.9);">
					{$currentLang === 'sk' ? '30. Júna 2026 • Košice' : 'June 30, 2026 • Košice'}
				</span>
			</div>
		</div>
	</div>
</section>
