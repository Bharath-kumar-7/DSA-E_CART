/**
 * DSA Implementation: Queue
 * Used for: Processing checkout orders in FIFO manner
 */

export interface Order {
  id: string;
  items: any[];
  total: number;
  timestamp: number;
  status: 'pending' | 'processing' | 'completed';
}

export class Queue {
  private items: Order[];

  constructor() {
    this.items = [];
  }

  // Enqueue: Add order to the back of queue
  enqueue(order: Order): void {
    this.items.push(order);
  }

  // Dequeue: Remove and return order from front of queue
  dequeue(): Order | undefined {
    return this.items.shift();
  }

  // Peek: View front order without removing
  peek(): Order | undefined {
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get queue size
  size(): number {
    return this.items.length;
  }

  // Get all orders
  getAll(): Order[] {
    return [...this.items];
  }

  // Clear queue
  clear(): void {
    this.items = [];
  }
}
