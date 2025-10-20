/**
 * DSA Implementation: Linked List
 * Used for: Managing cart items with efficient insertion/deletion
 */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

class Node {
  data: CartItem;
  next: Node | null;

  constructor(data: CartItem) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  private head: Node | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add item to cart (append to end)
  add(item: CartItem): void {
    const newNode = new Node(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Remove item by product id
  remove(productId: string): boolean {
    if (!this.head) return false;

    // If head needs to be removed
    if (this.head.data.id === productId) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data.id === productId) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Find item by product id
  find(productId: string): CartItem | null {
    let current = this.head;
    while (current) {
      if (current.data.id === productId) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  // Update quantity
  updateQuantity(productId: string, quantity: number): boolean {
    let current = this.head;
    while (current) {
      if (current.data.id === productId) {
        current.data.quantity = quantity;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Get all items as array
  toArray(): CartItem[] {
    const items: CartItem[] = [];
    let current = this.head;
    while (current) {
      items.push(current.data);
      current = current.next;
    }
    return items;
  }

  // Get total items count
  getSize(): number {
    return this.size;
  }

  // Calculate total price
  getTotalPrice(): number {
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.data.price * current.data.quantity;
      current = current.next;
    }
    return total;
  }

  // Clear all items
  clear(): void {
    this.head = null;
    this.size = 0;
  }
}
