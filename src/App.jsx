// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './layout/MainLayout';
import Home from './pages/home';
import Products from './pages/products';
import ProductDetail from './pages/product-detail';
import Collections from './pages/collections';
import New from './pages/new';
import Cart from './pages/cart';
import { SimpleToaster } from './components/ui/simple-toaster';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/register';

function App() {
  return (
    <ErrorBoundary>
        <Router>
          <div className="App">
            <Routes>
              {/* Routes under the main layout */}
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route element={<MainLayout />}>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/new" element={<New />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
            <SimpleToaster />
          </div>
        </Router>
    </ErrorBoundary>
  );
}

export default App;
