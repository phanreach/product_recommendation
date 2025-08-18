// Enhanced Product Detail Processing
// src/utils/productDataExtractor.js

export const extractProductAttributes = (product) => {
  if (!product.description) return {};

  const desc = product.description.toLowerCase();
  const words = desc.split(' ');

  // Extract gender
  const gender = words.includes('m') ? 'Male' : words.includes('f') ? 'Female' : 'Unisex';
  
  // Extract age group  
  let ageGroup = 'Adult';
  if (words.includes('baby')) ageGroup = 'Baby';
  else if (words.includes('kid')) ageGroup = 'Kids';
  else if (words.includes('teen')) ageGroup = 'Teen';

  // Extract origin country
  const countries = ['usa', 'china', 'turkey', 'morocco', 'egypt', 'cambodia', 'pakistan', 'poland', 'brazil', 'sri lanka', 'vietnam', 'indonesia', 'thailand', 'myanmar', 'bangladesh', 'philippines', 'tunisia', 'france', 'italy', 'mexico'];
  const origin = countries.find(country => desc.includes(country));

  // Extract material (inferred from category)
  const materials = {
    'coat': 'Wool Blend',
    'suit': 'Premium Cotton',
    'shoes': 'Leather',
    'pyjamas': 'Soft Cotton',
    'dress': 'Polyester Blend',
    'short': 'Cotton',
    'undies': 'Cotton Blend',
    'jacket': 'Synthetic',
    't-shirt': '100% Cotton',
    'sportwear': 'Performance Fabric',
    'hat': 'Cotton/Polyester'
  };

  const category = words[0];
  const material = materials[category] || 'Mixed Materials';

  return {
    gender,
    ageGroup,
    origin: origin ? origin.replace(/\b\w/g, l => l.toUpperCase()) : 'International',
    material,
    careInstructions: generateCareInstructions(category),
    features: generateFeatures(category, gender, ageGroup)
  };
};

const generateCareInstructions = (category) => {
  const instructions = {
    'coat': ['Dry clean only', 'Store on hanger', 'Keep away from heat'],
    'suit': ['Dry clean recommended', 'Iron on medium heat', 'Store properly hung'],
    'shoes': ['Clean with damp cloth', 'Air dry only', 'Use shoe trees'],
    'pyjamas': ['Machine wash cold', 'Tumble dry low', 'Iron if needed'],
    'dress': ['Machine wash gentle', 'Hang to dry', 'Iron on low heat'],
    'short': ['Machine wash warm', 'Tumble dry medium', 'Iron as needed'],
    't-shirt': ['Machine wash cold', 'Tumble dry low', 'Do not bleach'],
    'sportwear': ['Machine wash cold', 'Air dry preferred', 'No fabric softener']
  };
  
  return instructions[category] || ['Machine wash cold', 'Air dry', 'Iron on low'];
};

const generateFeatures = (category, gender, ageGroup) => {
  const baseFeatures = {
    'coat': ['Warm and comfortable', 'Weather resistant', 'Classic styling'],
    'suit': ['Professional appearance', 'Tailored fit', 'Wrinkle resistant'],
    'shoes': ['Comfortable sole', 'Durable construction', 'All-day wear'],
    'pyjamas': ['Soft and cozy', 'Breathable fabric', 'Relaxed fit'],
    'dress': ['Elegant design', 'Flattering silhouette', 'Versatile styling']
  };

  let features = baseFeatures[category] || ['Quality construction', 'Comfortable fit', 'Stylish design'];
  
  if (gender === 'Female') {
    features.push('Feminine styling');
  } else if (gender === 'Male') {
    features.push('Masculine design');
  }

  if (ageGroup === 'Kids') {
    features.push('Kid-friendly design', 'Easy care');
  }

  return features;
};
