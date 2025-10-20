/**
 * DSA Implementation: Category Tree Initialization
 */

import { CategoryTree, Category } from '../dsa/BinaryTree';
import { Smartphone, Laptop, ShoppingBag, Dumbbell, Package } from 'lucide-react';

export const categories: Category[] = [
  { id: 'all', name: 'All Products' },
  { id: 'phones', name: 'Phones' },
  { id: 'laptops', name: 'Laptops' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'sports', name: 'Sports' }
];

// Initialize category tree
export function initializeCategoryTree(): CategoryTree {
  const tree = new CategoryTree();
  
  // Root category
  tree.insertRoot({ id: 'root', name: 'All Categories' });
  
  // Add main categories
  tree.addChild('root', { id: 'electronics', name: 'Electronics' });
  tree.addChild('root', { id: 'fashion', name: 'Fashion' });
  tree.addChild('root', { id: 'sports', name: 'Sports' });
  
  // Add subcategories under Electronics
  tree.addChild('electronics', { id: 'phones', name: 'Smartphones' });
  tree.addChild('electronics', { id: 'laptops', name: 'Laptops' });
  
  return tree;
}

export const categoryTree = initializeCategoryTree();
