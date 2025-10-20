/**
 * DSA Implementation: Arrays
 * Product data stored in arrays for efficient access
 */

import { Product } from '../types';

// Import product images
import iphoneImage from '@/assets/iphone-15-pro-max.jpg';
import samsungImage from '@/assets/samsung-galaxy-s24-ultra.jpg';
import pixelImage from '@/assets/google-pixel-8-pro.jpg';
import oneplusImage from '@/assets/oneplus-12.jpg';
import macbookImage from '@/assets/macbook-pro-m3.jpg';
import dellImage from '@/assets/dell-xps-15.jpg';
import thinkpadImage from '@/assets/thinkpad-x1-carbon.jpg';
import asusImage from '@/assets/asus-rog-zephyrus.jpg';
import nikeImage from '@/assets/nike-air-max-270.jpg';
import levisImage from '@/assets/levis-501-jeans.jpg';
import raybanImage from '@/assets/rayban-aviator.jpg';
import northfaceImage from '@/assets/north-face-puffer.jpg';
import pelotonImage from '@/assets/peloton-bike.jpg';
import bowflexImage from '@/assets/bowflex-dumbbells.jpg';
import fitbitImage from '@/assets/fitbit-charge-6.jpg';
import yogaMatImage from '@/assets/yoga-mat.jpg';

export const products: Product[] = [
  // Phones
  {
    id: 'phone-1',
    name: 'iPhone 15 Pro Max',
    price: 99990,
    originalPrice: 109990,
    image: iphoneImage,
    category: 'phones',
    rating: 4.8,
    reviews: 2543,
    description: 'Latest flagship with A17 Pro chip and titanium design',
    inStock: true,
    discount: 8
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 89990,
    originalPrice: 99990,
    image: samsungImage,
    category: 'phones',
    rating: 4.7,
    reviews: 1876,
    description: 'Powerful Android flagship with S Pen',
    inStock: true,
    discount: 8
  },
  {
    id: 'phone-3',
    name: 'Google Pixel 8 Pro',
    price: 74990,
    image: pixelImage,
    category: 'phones',
    rating: 4.6,
    reviews: 1234,
    description: 'Best camera phone with Google AI',
    inStock: true
  },
  {
    id: 'phone-4',
    name: 'OnePlus 12',
    price: 64990,
    originalPrice: 74990,
    image: oneplusImage,
    category: 'phones',
    rating: 4.5,
    reviews: 987,
    description: 'Fast charging flagship killer',
    inStock: true,
    discount: 11
  },

  // Laptops
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16" M3',
    price: 209990,
    originalPrice: 229990,
    image: macbookImage,
    category: 'laptops',
    rating: 4.9,
    reviews: 3421,
    description: 'Professional laptop with M3 Max chip',
    inStock: true,
    discount: 7
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    price: 149990,
    image: dellImage,
    category: 'laptops',
    rating: 4.6,
    reviews: 2156,
    description: 'Powerful Windows laptop for creators',
    inStock: true
  },
  {
    id: 'laptop-3',
    name: 'ThinkPad X1 Carbon',
    price: 129990,
    originalPrice: 159990,
    image: thinkpadImage,
    category: 'laptops',
    rating: 4.7,
    reviews: 1543,
    description: 'Business ultrabook with military-grade durability',
    inStock: true,
    discount: 16
  },
  {
    id: 'laptop-4',
    name: 'ASUS ROG Zephyrus',
    price: 184990,
    image: asusImage,
    category: 'laptops',
    rating: 4.8,
    reviews: 1876,
    description: 'Gaming powerhouse with RTX 4090',
    inStock: true
  },

  // Fashion
  {
    id: 'fashion-1',
    name: 'Nike Air Max 270',
    price: 12490,
    originalPrice: 14990,
    image: nikeImage,
    category: 'fashion',
    rating: 4.5,
    reviews: 5432,
    description: 'Iconic sneakers with air cushioning',
    inStock: true,
    discount: 17
  },
  {
    id: 'fashion-2',
    name: 'Levi\'s 501 Original Jeans',
    price: 7490,
    image: levisImage,
    category: 'fashion',
    rating: 4.6,
    reviews: 3210,
    description: 'Classic straight fit jeans',
    inStock: true
  },
  {
    id: 'fashion-3',
    name: 'Ray-Ban Aviator Sunglasses',
    price: 16490,
    originalPrice: 18990,
    image: raybanImage,
    category: 'fashion',
    rating: 4.8,
    reviews: 2876,
    description: 'Timeless aviator style',
    inStock: true,
    discount: 13
  },
  {
    id: 'fashion-4',
    name: 'North Face Puffer Jacket',
    price: 22990,
    image: northfaceImage,
    category: 'fashion',
    rating: 4.7,
    reviews: 1987,
    description: 'Warm winter jacket for extreme weather',
    inStock: true
  },

  // Sports
  {
    id: 'sports-1',
    name: 'Peloton Bike+',
    price: 209490,
    originalPrice: 224990,
    image: pelotonImage,
    category: 'sports',
    rating: 4.7,
    reviews: 4321,
    description: 'Premium smart exercise bike',
    inStock: true,
    discount: 7
  },
  {
    id: 'sports-2',
    name: 'Bowflex Dumbbells',
    price: 32990,
    image: bowflexImage,
    category: 'sports',
    rating: 4.8,
    reviews: 6543,
    description: 'Adjustable weights 5-52.5 lbs',
    inStock: true
  },
  {
    id: 'sports-3',
    name: 'Fitbit Charge 6',
    price: 13190,
    originalPrice: 14990,
    image: fitbitImage,
    category: 'sports',
    rating: 4.4,
    reviews: 3456,
    description: 'Advanced fitness tracker',
    inStock: true,
    discount: 11
  },
  {
    id: 'sports-4',
    name: 'Yoga Mat Premium',
    price: 3990,
    image: yogaMatImage,
    category: 'sports',
    rating: 4.6,
    reviews: 8765,
    description: 'Non-slip eco-friendly mat',
    inStock: true
  }
];

/**
 * DSA: Binary Search
 * Search for product by ID in sorted array
 */
export function binarySearchById(arr: Product[], targetId: string): Product | null {
  const sortedArr = [...arr].sort((a, b) => a.id.localeCompare(b.id));
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midId = sortedArr[mid].id;

    if (midId === targetId) {
      return sortedArr[mid];
    } else if (midId < targetId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

/**
 * DSA: Linear Search
 * Search products by name (case-insensitive)
 */
export function searchProductsByName(arr: Product[], query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return arr.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}
