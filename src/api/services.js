import axios from 'axios';

// Cart management
export const addToCart = async (productId, quantity = 1) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart`, {
      product_id: productId,
      quantity,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Failed to add to cart.');
  }
};

export const getCart = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Failed to fetch cart.');
  }
};

// Purchase history
export const getPurchaseHistory = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/sales`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Failed to fetch purchase history.');
  }
};

export const purchaseProducts = async (cartIds) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/sales`, {
      cart_ids: cartIds,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Failed to complete purchase.');
  }
};

// Products (public endpoint)
export const getProducts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Products API call failed, returning mock data:', error.message);
    // Return mock products if API fails
    return {
      products: [
        {
          id: 1,
          name: 'Classic Denim Shirt',
          price: 199,
          image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
          description: 'Comfortable classic denim shirt'
        },
        {
          id: 2,
          name: 'Leather Sneakers',
          price: 299,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
          description: 'Premium leather sneakers'
        },
        {
          id: 3,
          name: 'Cotton T-Shirt',
          price: 89,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
          description: 'Soft cotton t-shirt'
        }
      ]
    };
  }
};

// Get single product (public endpoint) with graceful fallback
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    // Normalize to { product: {...} }
    if (response.data?.product) {
      return response.data;
    }
    if (response.data) {
      return { product: response.data };
    }
    return { product: null };
  } catch (error) {
    console.log('Product by ID API call failed, falling back to list:', error.message);
    // Fallback: use getProducts and find by id
    try {
      const all = await getProducts();
      const products = all.products || [];
      const pid = typeof id === 'string' ? parseInt(id, 10) : id;
      const found = products.find(p => p.id === pid) || products[0] || null;
      return { product: found };
    } catch (innerErr) {
      console.error('Fallback getProducts failed:', innerErr);
      return { product: null };
    }
  }
};
