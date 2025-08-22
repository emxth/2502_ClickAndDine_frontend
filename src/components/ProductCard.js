import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge.js';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 border-0 group bg-gradient-card shadow-soft hover:shadow-medium hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-success text-success-foreground">
            {product.category}
          </Badge>
        </div>
        <div className="absolute p-2 rounded-full top-3 right-3 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold transition-colors text-foreground group-hover:text-primary">
          {product.name}
        </h3>
        
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground">
            {product.reviews} reviews
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="w-full transition-all duration-300 bg-gradient-primary hover:shadow-medium group"
        >
          <Plus className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-90" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;