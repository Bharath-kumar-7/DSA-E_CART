/**
 * Main E-Commerce Page
 * Demonstrates DSA implementations:
 * - Arrays: Product storage
 * - LinkedList: Cart management
 * - Queue: Order processing
 * - Binary Tree: Category hierarchy
 * - Sorting: Quick Sort, Merge Sort
 * - Searching: Binary Search, Linear Search
 */

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductCard } from '@/components/ProductCard';
import { SortDropdown } from '@/components/SortDropdown';
import { CartSheet } from '@/components/CartSheet';
import { OrderQueue } from '@/components/OrderQueue';
import { useCart } from '@/hooks/useCart';
import { products, searchProductsByName } from '@/lib/data/products';
import { Product, SortOption, FilterCategory } from '@/lib/types';
import { ProductSorter } from '@/lib/dsa/Sorting';
import { Queue, Order } from '@/lib/dsa/Queue';
import { toast } from '@/hooks/use-toast';

// Initialize order queue (DSA: Queue)
const orderQueue = new Queue();

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const {
    items: cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getItemCount,
    clearCart,
  } = useCart();

  // DSA: Filter and Search Products
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category (DSA: Array filtering)
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search by name (DSA: Linear Search implementation)
    if (searchQuery.trim()) {
      result = searchProductsByName(result, searchQuery);
    }

    // Sort products (DSA: Quick Sort / Merge Sort)
    switch (sortOption) {
      case 'price-asc':
        return ProductSorter.quickSortByPrice(result, true);
      case 'price-desc':
        return ProductSorter.quickSortByPrice(result, false);
      case 'name-asc':
        return ProductSorter.mergeSortByName(result, true);
      case 'name-desc':
        return ProductSorter.mergeSortByName(result, false);
      case 'rating':
        return ProductSorter.sortByRating(result, false);
      default:
        return result;
    }
  }, [searchQuery, selectedCategory, sortOption]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Create order
    const order: Order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      total: getTotalPrice(),
      timestamp: Date.now(),
      status: 'pending',
    };

    // DSA: Enqueue order
    orderQueue.enqueue(order);
    setOrders(orderQueue.getAll());

    // Simulate order processing
    setTimeout(() => {
      const processingOrder = orderQueue.peek();
      if (processingOrder) {
        processingOrder.status = 'processing';
        setOrders([...orderQueue.getAll()]);
      }
    }, 2000);

    setTimeout(() => {
      const completedOrder = orderQueue.dequeue();
      if (completedOrder) {
        completedOrder.status = 'completed';
        setOrders([...orderQueue.getAll()]);
      }
    }, 4000);

    clearCart();
    setIsCartOpen(false);

    toast({
      title: "Order placed successfully!",
      description: `Order #${order.id.slice(0, 8)} is being processed`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartItemCount={getItemCount()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground shadow-primary animate-fade-in md:p-12">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Welcome to ShopHub
          </h1>
          <p className="text-lg opacity-90 md:text-xl">
            Your one-stop shop for electronics, fashion, and more!
          </p>
          <p className="mt-2 text-sm opacity-75">
            Built with Data Structures: Arrays • Linked Lists • Queues • Trees • Sorting
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SortDropdown selectedSort={sortOption} onSortChange={setSortOption} />
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
            <p className="text-xl font-semibold text-muted-foreground">
              No products found
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* Order Queue Display */}
        <OrderQueue orders={orders} />
      </main>

      {/* Cart Sheet */}
      <CartSheet
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;
