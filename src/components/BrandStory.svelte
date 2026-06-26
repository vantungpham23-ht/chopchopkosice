<script>
	import { currentLang } from '$lib/stores/language';
	import { onMount } from 'svelte';

	let visible = false;
	let storyRef;

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
		if (storyRef) observer.observe(storyRef);
		visible = true;
		return () => observer.disconnect();
	});
</script>

<section id="brand-story" class="py-28 md:py-36 px-6 overflow-hidden" style="background: #f8f4eb;">
	<div bind:this={storyRef} class="max-w-6xl mx-auto">
		<div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-start mb-24">
			<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 0ms;">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-12 h-px" style="background: #ec5d38;"></div>
					<p class="text-xs font-medium tracking-[0.28em] uppercase" style="color: #ec5d38;">
						{$currentLang === 'sk' ? 'Naša história' : 'Our Story'}
					</p>
				</div>

				<h2 class="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">
					{$currentLang === 'sk'
						? 'Ázijská kuchyňa s dušou Košíc.'
						: 'Asian cuisine with a Košice soul.'}
				</h2>

				<p class="text-lg md:text-xl leading-relaxed max-w-xl" style="color: #19452b; opacity: 0.72;">
					{$currentLang === 'sk'
						? 'Chop Chop je miesto, kde sa autenticita stretáva s atmosférou. Od čerstvého sushi po horúci wok a poctivé pho — každé jedlo rozpráva svoj vlastný príbeh.'
						: 'Chop Chop is a place where authenticity meets atmosphere. From fresh sushi to hot wok dishes and authentic pho — every plate tells its own story.'}
				</p>
			</div>

			<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 150ms;">
				<div class="grid sm:grid-cols-[1.15fr_0.85fr] gap-5">
					<div class="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(25,69,43,0.12)]">
						<img src="/images/interior-2.jpg" alt="Không gian bên trong Chop Chop" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-5">
						<div class="aspect-square rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_rgba(25,69,43,0.1)]">
							<img src="/images/wall-decor.jpg" alt="Trang trí tường Chop Chop" class="w-full h-full object-cover" />
						</div>
						<div class="rounded-[1.75rem] p-6 md:p-7 flex-1" style="background: #19452b; color: white;">
							<div class="text-xs tracking-[0.25em] uppercase mb-3" style="color: rgba(255,255,255,0.55);">
								{$currentLang === 'sk' ? 'Naša filozofia' : 'Our Philosophy'}
							</div>
							<div class="text-4xl md:text-5xl font-bold mb-3" style="font-family: Georgia, 'Times New Roman', serif;">
								{$currentLang === 'sk' ? 'Čerstvé.' : 'Fresh.'}
							</div>
							<p class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.72);">
								{$currentLang === 'sk'
									? 'Každý deň. Od rána do večera. Ingrediencie, ktoré by mali byť čerstvé, sú čerstvé.'
									: 'Every day. From morning to evening. Ingredients that should be fresh, are fresh.'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-end mb-24">
			<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 250ms;">
				<h3 class="text-2xl md:text-3xl font-bold mb-6" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">
					{$currentLang === 'sk' ? 'Varíme s úctou' : 'Cooking with respect'}
				</h3>
				<div class="space-y-6 text-base md:text-lg leading-relaxed" style="color: #19452b; opacity: 0.8;">
					<p>
						{$currentLang === 'sk'
							? 'Naša kuchyňa je otvorená. Môžete vidieť, ako vzniká každé jedlo — od prvého rezu nožom na doske až po posledný štýl na tanieri. To nie je show. To je poctivosť.'
							: 'Our kitchen is open. You can watch every dish come to life — from the first cut on the board to the final touch on the plate. This is not a show. This is integrity.'}
					</p>
					<p>
						{$currentLang === 'sk'
							? 'Pho s bohatým vývarom. Sushi s presnosťou. Wok s dychom. Každá platňa Chop Chop je výsledkom disciplíny, zručnosti a skutočnej chuti.'
							: 'Pho with a rich broth. Sushi with precision. Wok with fire. Every plate at Chop Chop is the result of discipline, skill, and real flavor.'}
					</p>
				</div>
			</div>

			<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 400ms;">
				<div class="rounded-[2rem] p-8 md:p-10 border" style="border-color: rgba(25,69,43,0.08); background: rgba(255,255,255,0.75); backdrop-filter: blur(8px);">
					<div class="text-[11px] tracking-[0.28em] uppercase mb-4" style="color: #ec5d38;">
						{$currentLang === 'sk' ? 'Zážitok' : 'Experience'}
					</div>
					<blockquote class="text-2xl md:text-3xl leading-[1.35] font-medium mb-6" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">
						{$currentLang === 'sk'
							? 'Chuť, ktorá zanechá stopu dlho potom, čo tanier zmizne.'
							: 'A flavor that leaves a mark long after the plate is gone.'}
					</blockquote>
					<p class="text-sm uppercase tracking-[0.2em]" style="color: rgba(25,69,43,0.45);">— CHOP CHOP</p>
				</div>
			</div>
		</div>

		<div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}" style="transition-delay: 550ms;">
			<div class="relative rounded-[2.5rem] overflow-hidden min-h-[340px] md:min-h-[420px] shadow-[0_35px_80px_rgba(25,69,43,0.12)]">
				<img src="/images/fachada.jpg" alt="Mặt tiền nhà hàng Chop Chop Košice" class="absolute inset-0 w-full h-full object-cover" />
				<div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(13,31,23,0.82) 0%, rgba(13,31,23,0.15) 100%);"></div>
				<div class="relative z-10 max-w-2xl p-10 md:p-14">
					<p class="text-xs font-medium tracking-[0.3em] uppercase mb-5" style="color: #ec5d38;">
						{$currentLang === 'sk' ? 'Chop Chop Košice' : 'Chop Chop Košice'}
					</p>
					<h3 class="text-3xl md:text-5xl font-bold leading-[1.1] mb-5" style="color: white; font-family: Georgia, 'Times New Roman', serif;">
						{$currentLang === 'sk'
							? 'Príďte ochutnať. Príďte sa vrátiť.'
							: 'Come taste. Come back.'}
					</h3>
					<p class="text-base md:text-lg leading-relaxed" style="color: rgba(255,255,255,0.78);">
						{$currentLang === 'sk'
							? 'Každý detail — od servírovania po posledný tón v miestnosti — je navrhnutý tak, aby ste si Chop Chop zapamätali nielen chuťou, ale aj pocitom.'
							: 'Every detail — from plating to the final note in the room — is designed so you remember Chop Chop not only by taste, but by feeling.'}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
