/**
 * Cart Management Hook
 * Uses LinkedList data structure for efficient cart operations
 */

import { useState, useEffect } from 'react';
import { LinkedList, CartItem } from '@/lib/dsa/LinkedList';
import { toast } from '@/hooks/use-toast';

const CART_STORAGE_KEY = 'ecommerce-cart';

// Initialize LinkedList from localStorage
function loadCartFromStorage(): LinkedList {
  const cart = new LinkedList();
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const items: CartItem[] = JSON.parse(stored);
      items.forEach(item => cart.add(item));
    }
  } catch (error) {
    console.error('Error loading cart:', error);
  }
  return cart;
}

// Save LinkedList to localStorage
function saveCartToStorage(cart: LinkedList): void {
  try {
    const items = cart.toArray();
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart:', error);
  }
}

export function useCart() {
  const [cart, setCart] = useState<LinkedList>(() => loadCartFromStorage());
  const [items, setItems] = useState<CartItem[]>([]);

  // Sync items array with LinkedList
  useEffect(() => {
    setItems(cart.toArray());
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    const newCart = loadCartFromStorage();
    const existing = newCart.find(item.id);

    if (existing) {
      newCart.updateQuantity(item.id, existing.quantity + 1);
      toast({
        title: "Updated cart",
        description: `${item.name} quantity increased`,
      });
    } else {
      newCart.add({ ...item, quantity: 1 });
      toast({
        title: "Added to cart",
        description: `${item.name} added successfully`,
      });
    }

    setCart(newCart);
  };

  const removeFromCart = (productId: string) => {
    const newCart = loadCartFromStorage();
    const item = newCart.find(productId);
    
    if (item) {
      newCart.remove(productId);
      setCart(newCart);
      
      toast({
        title: "Removed from cart",
        description: `${item.name} removed`,
        variant: "destructive",
      });
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const newCart = loadCartFromStorage();
    newCart.updateQuantity(productId, quantity);
    setCart(newCart);
  };

  const clearCart = () => {
    const newCart = new LinkedList();
    setCart(newCart);
    localStorage.removeItem(CART_STORAGE_KEY);
    
    toast({
      title: "Cart cleared",
      description: "All items removed from cart",
    });
  };

  const getTotalPrice = () => cart.getTotalPrice();
  const getItemCount = () => cart.getSize();

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getItemCount,
  };
}
