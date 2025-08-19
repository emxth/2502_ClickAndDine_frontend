import React from 'react';
import { ArrowRight, Clock, Star, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-hero lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
              Delicious Food
              <br />
              <span className="text-accent">Delivered Fresh</span>
            </h1>

            <p className="max-w-lg mx-auto mb-8 text-lg text-white/90 lg:mx-0">
              Order your favorite meals from the best restaurants in your area.
              Fast delivery, fresh ingredients, unforgettable taste.
            </p>

            <div className="flex flex-col justify-center gap-4 mb-12 space-y-4 sm:flex-row lg:justify-start sm:space-y-0 sm:space-x-4">
              <motion.button
                className="flex items-center justify-center px-8 py-4 text-lg font-medium bg-white rounded-lg text-primary shadow-strong hover:bg-white/90"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.2,
                  duration: 0.5
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                className="flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-primary"
                whileHover={{
                  scale: 1.05,
                  color: "hsl(25 95% 53%)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  duration: 0.5
                }}
                initial={{ opacity: 0, y: 20, color: "white" }}
                animate={{ opacity: 1, y: 0 }}
              >
                View Menu
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="text-white">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">30 min</div>
                <div className="text-sm opacity-90">Delivery</div>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm opacity-90">Rating</div>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-center mb-2">
                  <Truck className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm opacity-90">Delivery</div>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="relative">
            <div className="relative z-10 p-8 bg-white/10 backdrop-blur-sm rounded-3xl shadow-strong">
              <div className="text-center text-white">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full bg-white/20">
                  <div className="text-6xl">🍕</div>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Today's Special</h3>
                <p className="mb-4 text-white/90">Authentic Italian Margherita Pizza</p>
                <div className="text-3xl font-bold text-accent">$12.99</div>
                <motion.button
                  className="px-6 py-3 mt-5 font-medium border border-white rounded-lg bg-success text-success-foreground hover:bg-success/90 hover:bg-white hover:text-primary"
                  whileHover={{
                    scale: 1.05,
                    color: "hsl(25 95% 53%)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    duration: 0.5
                  }}
                  initial={{ opacity: 0, y: 20, color: "white" }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Order Special
                </motion.button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-accent opacity-60" />
            <div className="absolute w-16 h-16 rounded-full -bottom-6 -left-6 bg-success opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;