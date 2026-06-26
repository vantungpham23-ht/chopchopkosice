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
			{ threshold: 0.1 }
		);
		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section
	bind:this={sectionRef}
	class="py-12 md:py-20 px-6 transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
	style="background: #f5efe0;"
>
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-10">
			<p class="text-xs font-medium tracking-[0.2em] uppercase mb-3" style="color: #ec5d38;">
				{$currentLang === 'sk' ? 'Náš priestor' : 'Our Space'}
			</p>
			<h2 class="text-3xl md:text-4xl font-bold" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">
				{$currentLang === 'sk' ? 'Privítame vás' : 'Welcome'}
			</h2>
		</div>

	<div class="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(25,69,43,0.15)]">
		<img
			src="/images/mat-tien.png"
			alt="Chop Chop Košice - Mặt tiền nhà hàng"
			class="w-full h-auto object-cover"
			loading="lazy"
		/>
	</div>
	</div>
</section>
