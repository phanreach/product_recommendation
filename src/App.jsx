// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/home';
import Products from './pages/products';
import Collections from './pages/collections';
import New from './pages/new';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/new" element={<New />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
