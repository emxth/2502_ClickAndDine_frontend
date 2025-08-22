import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
              <span className="text-lg font-bold text-primary-foreground">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Click & Dine</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <a href="/" className="transition-colors text-foreground hover:text-primary">Home</a>
            <a href="#menu" className="transition-colors text-foreground hover:text-primary">Menu</a>
            <a href="#about" className="transition-colors text-foreground hover:text-primary">About</a>
            <a href="#contact" className="transition-colors text-foreground hover:text-primary">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="items-center flex-1 hidden max-w-md mx-8 lg:flex">
            <div className="relative w-full">
              <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for delicious food..."
                className="pl-10 border-0 bg-secondary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full -top-2 -right-2 bg-primary text-primary-foreground">
                  {state.itemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t md:hidden border-border bg-background">
            <div className="container px-4 py-4 mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search for delicious food..."
                    className="pl-10 border-0 bg-secondary"
                  />
                </div>
                <nav className="flex flex-col space-y-2">
                  <a href="/" className="py-2 transition-colors text-foreground hover:text-primary">Home</a>
                  <a href="#menu" className="py-2 transition-colors text-foreground hover:text-primary">Menu</a>
                  <a href="#about" className="py-2 transition-colors text-foreground hover:text-primary">About</a>
                  <a href="#contact" className="py-2 transition-colors text-foreground hover:text-primary">Contact</a>
                </nav>
                <Button variant="outline" className="justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;