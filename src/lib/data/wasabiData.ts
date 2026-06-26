export const wasabiCategories = [
	{ id: 'all', name: 'All', icon: '🍽️' },
	{ id: 'soups', name: 'Soups', icon: '🍜' },
	{ id: 'main', name: 'Main Dishes', icon: '🍖' },
	{ id: 'noodles', name: 'Noodles & Rice', icon: '🍝' },
	{ id: 'poke', name: 'Poke Bowl', icon: '🥗' },
	{ id: 'sushi', name: 'Sushi', icon: '🍣' },
	{ id: 'sushi-sets', name: 'Sushi Sets', icon: '🎁' }
];

export const wasabiMenuItems = [
	{ id: 'ws1', name: 'Sour Soup S', price: 4.2, desc: 'Broth, chicken, egg, carrot, onion, chili, mushrooms', category: 'soups', allergens: [1, 3, 6] },
	{ id: 'ws2', name: 'Sour Soup M', price: 7.9, desc: 'Broth, chicken, egg, carrot, onion, chili, mushrooms', category: 'soups', allergens: [1, 3, 6] },
	{ id: 'ws3', name: 'Chicken Soup S', price: 4.2, desc: 'Broth, chicken, onion, peas, corn, carrot, glass noodles', category: 'soups', allergens: [1] },
	{ id: 'ws4', name: 'Chicken Soup M', price: 7.9, desc: 'Broth, chicken, onion, peas, corn, carrot, glass noodles', category: 'soups', allergens: [1] },
	{ id: 'ws5', name: 'Tom Yum S', price: 4.9, desc: 'Tom yum paste, zucchini, tomato, mushrooms', category: 'soups', allergens: [] },
	{ id: 'ws6', name: 'Tom Yum M', price: 8.9, desc: 'Tom yum paste, zucchini, tomato, mushrooms', category: 'soups', allergens: [] },

	{ id: 'wm1', name: 'Crispy Chicken', price: 7.9, desc: 'Crispy chicken thigh with vegetables', category: 'main', allergens: [1, 3] },
	{ id: 'wm2', name: 'Crispy Duck', price: 9.9, desc: 'Crispy duck with vegetables', category: 'main', allergens: [1, 3] },
	{ id: 'wm3', name: 'Teriyaki Chicken', price: 7.9, desc: 'Chicken in teriyaki sauce', category: 'main', allergens: [11] },
	{ id: 'wm4', name: 'Tempura Chicken', price: 7.9, desc: 'Chicken in tempura batter', category: 'main', allergens: [1, 3] },
	{ id: 'wm5', name: 'Kung Pao Chicken', price: 7.5, desc: 'Chicken, vegetables and sauce', category: 'main', allergens: [] },
	{ id: 'wm6', name: 'Thai Curry', price: 7.5, desc: 'Stir-fried meat with vegetables and curry sauce', category: 'main', allergens: [2, 6, 7] },
	{ id: 'wm7', name: 'Salad', price: 10.9, desc: 'Leafy greens, fresh vegetables, sesame, dressing', category: 'main', allergens: [11] },

	{ id: 'wn1', name: 'Fried Noodles', price: 10.9, desc: 'Noodles, egg, vegetables, onion', category: 'noodles', allergens: [1, 3] },
	{ id: 'wn2', name: 'Rice Noodles', price: 10.9, desc: 'Rice noodles, egg, vegetables, onion', category: 'noodles', allergens: [1, 3] },
	{ id: 'wn3', name: 'Pho Noodles', price: 10.9, desc: 'Pho noodles, egg, vegetables, onion', category: 'noodles', allergens: [1, 3] },
	{ id: 'wn4', name: 'Udon Noodles', price: 10.9, desc: 'Udon noodles, vegetables, onion', category: 'noodles', allergens: [1] },
	{ id: 'wn5', name: 'Fried Rice', price: 10.5, desc: 'Fried rice, egg, vegetables, onion', category: 'noodles', allergens: [1, 3] },

	{ id: 'wp1', name: 'Chicken Poke', price: 12.9, desc: 'Rice, seaweed, edamame, avocado, carrot, mango, cucumber, sauce', category: 'poke', allergens: [6, 11] },
	{ id: 'wp2', name: 'Beef Poke', price: 14.0, desc: 'Rice, seaweed, edamame, avocado, carrot, mango, cucumber, sauce', category: 'poke', allergens: [6, 11] },
	{ id: 'wp3', name: 'Shrimp Poke', price: 15.5, desc: 'Rice, seaweed, edamame, avocado, carrot, mango, cucumber, sauce', category: 'poke', allergens: [2, 6, 11] },
	{ id: 'wp4', name: 'Salmon Poke', price: 15.5, desc: 'Rice, seaweed, edamame, avocado, carrot, mango, cucumber, sauce', category: 'poke', allergens: [4, 6, 11] },
	{ id: 'wp5', name: 'Tuna Poke', price: 16.9, desc: 'Rice, seaweed, edamame, avocado, carrot, mango, cucumber, sauce', category: 'poke', allergens: [4, 6, 11] },

	{ id: 'wsu1', name: 'Nigiri Salmon (2 pcs)', price: 6.9, desc: 'Fresh salmon on sushi rice', category: 'sushi', allergens: [4] },
	{ id: 'wsu2', name: 'Nigiri Tuna (2 pcs)', price: 7.9, desc: 'Fresh tuna on sushi rice', category: 'sushi', allergens: [4] },
	{ id: 'wsu3', name: 'Sashimi Salmon (8 pcs)', price: 9.9, desc: 'Fresh sliced salmon', category: 'sushi', allergens: [4] },
	{ id: 'wsu4', name: 'Sashimi Tuna (8 pcs)', price: 11.5, desc: 'Fresh sliced tuna', category: 'sushi', allergens: [4] },
	{ id: 'wsu5', name: 'Maki Salmon (8 pcs)', price: 6.9, desc: 'Salmon rolled in seaweed', category: 'sushi', allergens: [4] },
	{ id: 'wsu6', name: 'Maki Tuna (8 pcs)', price: 8.5, desc: 'Tuna rolled in seaweed', category: 'sushi', allergens: [4] },
	{ id: 'wsu7', name: 'Salmon Roll (6 pcs)', price: 11.5, desc: 'Cooked salmon, avocado, cucumber', category: 'sushi', allergens: [1, 4, 7, 11] },
	{ id: 'wsu8', name: 'Tekka Roll (6 pcs)', price: 12.9, desc: 'Cooked tuna, avocado, cucumber', category: 'sushi', allergens: [1, 4, 7, 11] },
	{ id: 'wsu9', name: 'Salmon Futo (5 pcs)', price: 11.0, desc: 'Salmon, avocado, cucumber', category: 'sushi', allergens: [1, 3, 4, 6, 7, 11] },
	{ id: 'wsu10', name: 'Special Futo (5 pcs)', price: 12.9, desc: 'Salmon, tuna, avocado, cucumber, tobiko', category: 'sushi', allergens: [1, 3, 4, 6, 7, 11] },

	{ id: 'wst1', name: 'Set 1 - Mix Maki', price: 20.5, desc: 'Maki Salmon, Maki Tuna, Maki Mango, Maki Avocado', category: 'sushi-sets', allergens: [] },
	{ id: 'wst2', name: 'Set 2 - Vegetarian Maki', price: 18.5, desc: 'Maki Avocado, Maki Cucumber, Maki Mango', category: 'sushi-sets', allergens: [] },
	{ id: 'wst3', name: 'Set 3 - Salmon Bites', price: 27.9, desc: 'Toro Roll, Maki Salmon, Nigiri Salmon', category: 'sushi-sets', allergens: [4] },
	{ id: 'wst4', name: 'Set 4 - Tempura Mix', price: 25.9, desc: 'Tempura Maki Salmon, Tempura Maki Tuna, Tempura Maki Avocado', category: 'sushi-sets', allergens: [] },
	{ id: 'wst5', name: 'Set 10 - Atlantic Set', price: 77.9, desc: 'A large selection of special maki, rolls and nigiri', category: 'sushi-sets', allergens: [] }
];
