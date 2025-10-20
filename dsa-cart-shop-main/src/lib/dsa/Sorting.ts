/**
 * DSA Implementation: Sorting Algorithms
 * Used for: Sorting products by price or name
 */

import { Product } from '../types';

export class ProductSorter {
  /**
   * Quick Sort - Sort by price (ascending/descending)
   * Time Complexity: O(n log n) average, O(n²) worst
   */
  static quickSortByPrice(products: Product[], ascending: boolean = true): Product[] {
    if (products.length <= 1) return products;

    const pivot = products[Math.floor(products.length / 2)];
    const left = products.filter(p => 
      ascending ? p.price < pivot.price : p.price > pivot.price
    );
    const middle = products.filter(p => p.price === pivot.price);
    const right = products.filter(p => 
      ascending ? p.price > pivot.price : p.price < pivot.price
    );

    return [
      ...this.quickSortByPrice(left, ascending),
      ...middle,
      ...this.quickSortByPrice(right, ascending)
    ];
  }

  /**
   * Merge Sort - Sort by name alphabetically
   * Time Complexity: O(n log n)
   */
  static mergeSortByName(products: Product[], ascending: boolean = true): Product[] {
    if (products.length <= 1) return products;

    const mid = Math.floor(products.length / 2);
    const left = this.mergeSortByName(products.slice(0, mid), ascending);
    const right = this.mergeSortByName(products.slice(mid), ascending);

    return this.merge(left, right, ascending);
  }

  private static merge(left: Product[], right: Product[], ascending: boolean): Product[] {
    const result: Product[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      const comparison = ascending 
        ? left[i].name.localeCompare(right[j].name)
        : right[j].name.localeCompare(left[i].name);

      if (comparison <= 0) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
  }

  /**
   * Sort by rating
   */
  static sortByRating(products: Product[], ascending: boolean = false): Product[] {
    return [...products].sort((a, b) => 
      ascending ? a.rating - b.rating : b.rating - a.rating
    );
  }
}
