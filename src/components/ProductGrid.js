import React, { useState } from 'react';
import { Button } from './ui/button';
import ProductCard from './ProductCard';

const mockProducts = [
  {
    id: '1',
    name: 'Classic Beef Burger',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=600',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    category: 'Burgers',
    rating: 4.8,
    reviews: 142
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600',
    description: 'Traditional Italian pizza with fresh mozzarella, basil, and tomato sauce',
    category: 'Pizza',
    rating: 4.9,
    reviews: 201
  },
  {
    id: '3',
    name: 'Fresh Garden Salad',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
    description: 'Mixed greens with cherry tomatoes, avocado, and grilled chicken',
    category: 'Salads',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Authentic Ramen Bowl',
    price: 14.99,
    image: 'https://plus.unsplash.com/premium_photo-1694708455249-992010f9db32?auto=format&fit=crop&q=80&w=600',
    description: 'Rich tonkotsu broth with tender pork, soft-boiled egg, and fresh vegetables',
    category: 'Asian',
    rating: 4.9,
    reviews: 156
  },
  {
    id: '5',
    name: 'BBQ Chicken Burger',
    price: 13.99,
    image: 'https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?auto=format&fit=crop&q=80&w=600',
    description: 'Grilled chicken breast with BBQ sauce, crispy onions, and coleslaw',
    category: 'Burgers',
    rating: 4.6,
    reviews: 98
  },
  {
    id: '6',
    name: 'Pepperoni Pizza',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600',
    description: 'Classic pepperoni pizza with mozzarella cheese and spicy pepperoni',
    category: 'Pizza',
    rating: 4.8,
    reviews: 167
  },
  {
    id: '7',
    name: 'Caesar Salad',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=600',
    description: 'Crisp romaine lettuce with parmesan cheese, croutons, and Caesar dressing',
    category: 'Salads',
    rating: 4.5,
    reviews: 73
  },
  {
    id: '8',
    name: 'Spicy Miso Ramen',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1478749485505-2a903a729c63?auto=format&fit=crop&q=80&w=600',
    description: 'Spicy miso broth with ground pork, green onions, and chili oil',
    category: 'Asian',
    rating: 4.7,
    reviews: 134
  }
];

const categories = ['All', 'Burgers', 'Pizza', 'Salads', 'Asian'];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  return (
    <section id="menu" className="py-16 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-foreground">
            Our Delicious Menu
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover our carefully curated selection of mouth-watering dishes, 
            prepared with the finest ingredients and delivered fresh to your door.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-primary shadow-medium' 
                  : 'hover:shadow-soft'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="transition-all duration-300 hover:shadow-soft">
            Load More Dishes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;