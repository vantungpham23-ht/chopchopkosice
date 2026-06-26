import { writable } from 'svelte/store';
import type { Lang } from '$lib/data/menuData';

export const currentLang = writable<Lang>('sk');

export function toggleLang() {
	currentLang.update(l => l === 'sk' ? 'en' : 'sk');
}
