import { Package, Smartphone, Laptop, ShoppingBag, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilterCategory } from '@/lib/types';

interface CategoryFilterProps {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

const categories = [
  { id: 'all' as FilterCategory, name: 'All', icon: Package },
  { id: 'phones' as FilterCategory, name: 'Phones', icon: Smartphone },
  { id: 'laptops' as FilterCategory, name: 'Laptops', icon: Laptop },
  { id: 'fashion' as FilterCategory, name: 'Fashion', icon: ShoppingBag },
  { id: 'sports' as FilterCategory, name: 'Sports', icon: Dumbbell },
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map(({ id, name, icon: Icon }) => (
        <Button
          key={id}
          variant={selectedCategory === id ? 'default' : 'outline'}
          className={selectedCategory === id ? 'bg-gradient-primary shadow-primary' : ''}
          onClick={() => onCategoryChange(id)}
        >
          <Icon className="mr-2 h-4 w-4" />
          {name}
        </Button>
      ))}
    </div>
  );
}
