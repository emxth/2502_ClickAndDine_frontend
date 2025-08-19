import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css' // Tailwind CSS is imported
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;