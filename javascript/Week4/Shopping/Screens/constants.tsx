import type { Product } from "@/app/(tabs)";

const demoProducts: Product[] = [
  {
    id: 'prod‑001',
    name: 'Wireless Earbuds',
    imageUrl: 'https://example.com/earbuds.jpg',
    originalPrice: 149.99,
    discountPrice: 99.99,
    offerPercentage: 33,
    rating: 4.5,
    ratingCount: 324,
    tags: ['electronics', 'audio', 'wireless'],
  },
  {
    id: 'prod‑002',
    name: 'Smart Fitness Watch',
    imageUrl: 'https://example.com/fitnesswatch.jpg',
    originalPrice: 199.99,
    discountPrice: 149.99,
    offerPercentage: 25,
    rating: 4.2,
    ratingCount: 215,
    tags: ['wearable', 'fitness', 'smartwatch'],
  },
];
