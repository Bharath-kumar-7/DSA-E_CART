/**
 * Type definitions for the e-commerce application
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  discount?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  timestamp: number;
  status: 'pending' | 'processing' | 'completed';
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating';
export type FilterCategory = 'all' | 'phones' | 'laptops' | 'fashion' | 'sports' | 'electronics';
