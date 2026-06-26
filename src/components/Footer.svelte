<script>
	import { currentLang } from '$lib/stores/language';

	const phone = '+421 900 123 456';
	const address = 'Fejova 11, 040 01, Košice, Slovakia';
	const fb = 'https://facebook.com/chopchopkosice';
	const ig = 'https://instagram.com/chopchop.ke';
</script>

<footer id="footer-contact" class="pt-28 pb-10 px-6" style="background: #efe7d8;">
	<div class="max-w-6xl mx-auto">
		<div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start mb-16">
			<div>
				<div class="flex items-center gap-3 mb-6">
					<div class="w-12 h-px" style="background: #ec5d38;"></div>
					<p class="text-xs font-medium tracking-[0.28em] uppercase" style="color: #ec5d38;">CHOP CHOP</p>
				</div>

				<img src="/images/logo-restaurant.png" alt="CHOP CHOP" class="w-52 h-auto mb-6" style="object-fit: contain;" />

				<p class="text-base md:text-lg leading-relaxed max-w-md mb-8" style="color: #19452b; opacity: 0.74;">
					{$currentLang === 'sk'
						? 'Autentická ázijská kuchyňa v Košiciach. Sushi, Pho, Wok — každé jedlo pripravované s vášňou a čerstvými ingredienciami.'
						: 'Authentic Asian cuisine in Košice. Sushi, Pho, Wok — every dish prepared with passion and the freshest ingredients.'}
				</p>

				<div class="flex items-center gap-4">
					<a href={fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105" style="background: #19452b; color: white;">
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
					<a href={ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105" style="background: #ec5d38; color: white;">
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="grid sm:grid-cols-2 gap-4">
				<a
					href="https://maps.google.com/?q={encodeURIComponent(address)}"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-0.5"
					style="background: white; box-shadow: 0 14px 34px rgba(25,69,43,0.06);"
				>
					<div class="text-[11px] uppercase tracking-[0.24em] mb-3" style="color: #ec5d38;">{$currentLang === 'sk' ? 'Adresa' : 'Address'}</div>
					<div class="text-xl font-bold mb-3" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">Košice</div>
					<p class="text-sm leading-relaxed" style="color: #19452b; opacity: 0.72;">{address}</p>
				</a>

				<a
					href="tel:{phone}"
					class="rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-0.5"
					style="background: white; box-shadow: 0 14px 34px rgba(25,69,43,0.06);"
				>
					<div class="text-[11px] uppercase tracking-[0.24em] mb-3" style="color: #ec5d38;">{$currentLang === 'sk' ? 'Telefón' : 'Phone'}</div>
					<div class="text-xl font-bold mb-3" style="color: #19452b; font-family: Georgia, 'Times New Roman', serif;">{$currentLang === 'sk' ? 'Rezervácie & objednávky' : 'Reservations & orders'}</div>
					<p class="text-base font-semibold" style="color: #ec5d38;">{phone}</p>
				</a>

				<div class="rounded-[2rem] p-6 sm:col-span-2" style="background: #19452b; color: white;">
					<div class="text-[11px] uppercase tracking-[0.24em] mb-3" style="color: rgba(255,255,255,0.42);">{$currentLang === 'sk' ? 'Otváracie hodiny' : 'Opening Hours'}</div>
					<div class="space-y-1 mb-2">
						<div class="flex items-center justify-between">
							<span class="text-sm" style="color: rgba(255,255,255,0.72);">{$currentLang === 'sk' ? 'Pondelok – Piatok' : 'Monday – Friday'}</span>
							<span class="text-xl font-bold" style="font-family: Georgia, 'Times New Roman', serif;">9:00 – 21:00</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm" style="color: rgba(255,255,255,0.72);">{$currentLang === 'sk' ? 'Sobota – Nedeľa' : 'Saturday – Sunday'}</span>
							<span class="text-xl font-bold" style="font-family: Georgia, 'Times New Roman', serif;">10:00 – 21:00</span>
						</div>
					</div>
					<p class="text-sm" style="color: rgba(255,255,255,0.72);">{$currentLang === 'sk' ? 'Denné menu servírujeme od 10:30 do 14:00.' : 'Daily lunch menu is served from 10:30 to 14:00.'}</p>
				</div>
			</div>
		</div>

		<div class="pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4" style="border-color: rgba(25,69,43,0.1);">
			<p class="text-xs uppercase tracking-[0.2em]" style="color: rgba(25,69,43,0.45);">{$currentLang === 'sk' ? 'Autentická ázijská kuchyňa' : 'Authentic Asian Cuisine'}</p>
			<p class="text-xs" style="color: rgba(25,69,43,0.38);">© 2024 CHOP CHOP Košice. {$currentLang === 'sk' ? 'Všetky práva vyhradené.' : 'All rights reserved.'}</p>
		</div>
	</div>
</footer>
