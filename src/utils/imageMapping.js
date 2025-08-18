// Image mapping utility for product categories
// Maps product categories to local images in public/images folder

const categoryImageMap = {
  // T-shirt variations (6 images)
  't-shirt': [
    '/images/t-shirt1.png',
    '/images/t-shirt2.png', 
    '/images/t-shirt3.png',
    '/images/t-shirt4.png',
    '/images/t-shirt5.png',
    '/images/t-shirt6.png'
  ],
  
  // Jacket/Coat variations (2 images)
  'jacket': [
    '/images/jacket.png',
    '/images/jacket1.png'
  ],
  'coat': [
    '/images/jacket.png',
    '/images/jacket1.png'
  ],
  
  // Shorts/Pants variations  
  'short': ['/images/shorts.png'],
  'shorts': ['/images/shorts.png'],
  'pants': ['/images/pants.png'],
  
  // Pyjamas with dedicated images (2 images)
  'pyjamas': [
    '/images/pjamas.avif',
    '/images/pjamas1.webp'
  ],
  
  // Shoes with dedicated images (6 images)
  'shoes': [
    '/images/shoes.avif',
    '/images/shoes1.webp',
    '/images/shoes3.webp',
    '/images/shoes4.jpg',
    '/images/shoes5.webp',
    '/images/shoes6.webp'
  ],
  
  // Underwear with dedicated images (2 images)
  'undies': [
    '/images/undies.jpg',
    '/images/undies1.jpg'
  ],
  
  // Fallback images for categories without specific images
  'dress': ['/images/t-shirt1.png'], // Use t-shirt as fallback
  'suit': [
    '/images/jacket.png',
    '/images/jacket1.png'
  ], // Use jacket variations
  'sportwear': [
    '/images/t-shirt3.png', 
    '/images/t-shirt6.png',
    '/images/shorts.png'
  ],
  'hat': ['/images/t-shirt2.png'] // Fallback until hat images added
};

// Get image for product category
export const getImageForCategory = (category, productId = null) => {
  const normalizedCategory = category?.toLowerCase();
  const images = categoryImageMap[normalizedCategory];
  
  if (!images || images.length === 0) {
    // Default fallback to t-shirt1 if category not found
    return '/images/t-shirt1.png';
  }
  
  if (images.length === 1) {
    return images[0];
  }
  
  // For categories with multiple images (like t-shirts), use product ID to get consistent variation
  if (productId) {
    const index = parseInt(productId) % images.length;
    return images[index];
  }
  
  // Random selection if no product ID
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Get all available images for a category (for product detail page galleries)
export const getAllImagesForCategory = (category) => {
  const normalizedCategory = category?.toLowerCase();
  const images = categoryImageMap[normalizedCategory];
  
  if (!images || images.length === 0) {
    return ['/images/t-shirt1.png'];
  }
  
  return images;
};

// Check if local image exists for category
export const hasLocalImageForCategory = (category) => {
  const normalizedCategory = category?.toLowerCase();
  return Object.prototype.hasOwnProperty.call(categoryImageMap, normalizedCategory);
};

// Get image with fallback to API image
export const getProductImage = (category, apiImage = null, productId = null) => {
  // Try local image first
  if (hasLocalImageForCategory(category)) {
    return getImageForCategory(category, productId);
  }
  
  // Fall back to API image if available
  if (apiImage && typeof apiImage === 'string' && apiImage.trim() !== '') {
    return apiImage;
  }
  
  // Final fallback to default local image
  return '/images/t-shirt1.png';
};

export default {
  getImageForCategory,
  getAllImagesForCategory,
  hasLocalImageForCategory,
  getProductImage
};
