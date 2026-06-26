<script>
	import BrandHero from '$components/BrandHero.svelte';
	import BrandStory from '$components/BrandStory.svelte';
	import FeaturedDishes from '$components/FeaturedDishes.svelte';
	import OrderSection from '$components/OrderSection.svelte';
	import Footer from '$components/Footer.svelte';
	import ScrollToTop from '$components/ScrollToTop.svelte';
	import LanguageToggle from '$components/LanguageToggle.svelte';
</script>

<LanguageToggle />

<main>
	<BrandHero />
	<BrandStory />
	<FeaturedDishes />
	<OrderSection />
</main>

<Footer />
<ScrollToTop />
