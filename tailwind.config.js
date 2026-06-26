/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-green': '#0f4c3a',
				'brand-orange': '#ff6b35',
				'brand-cream': '#fef9ef'
			},
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif']
			}
		}
	},
	plugins: []
};
