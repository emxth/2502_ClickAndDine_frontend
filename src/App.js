import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css' // Tailwind CSS is imported
import Hero from './components/Hero';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductGrid />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;