// Enhanced search hook with intelligent matching
// src/hooks/useEnhancedSearch.js

import { useState, useMemo } from 'react';
import useDebounce from './useDebounce';

export const useEnhancedSearch = (products, searchDelay = 300) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState({});
  const debouncedQuery = useDebounce(searchQuery, searchDelay);

  // Enhanced search logic that matches API data structure
  const searchResults = useMemo(() => {
    if (!debouncedQuery && Object.keys(searchFilters).length === 0) {
      return products;
    }

    return products.filter(product => {
      // Text search across multiple fields
      const textMatch = debouncedQuery ? (
        product.name?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.size?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.season?.toLowerCase().includes(debouncedQuery.toLowerCase())
      ) : true;

      // Filter matching
      const filterMatch = Object.entries(searchFilters).every(([key, values]) => {
        if (!values || (Array.isArray(values) && values.length === 0)) return true;
        
        switch (key) {
          case 'categories':
            return values.includes(product.category);
          case 'sizes':
            return values.includes(product.size);
          case 'colors':
            return values.includes(product.color);
          case 'seasons':
            return values.includes(product.season);
          case 'minPrice':
            return product.price >= values;
          case 'maxPrice':
            return product.price <= values;
          default:
            return true;
        }
      });

      return textMatch && filterMatch;
    });
  }, [products, debouncedQuery, searchFilters]);

  // Smart suggestions based on search query
  const suggestions = useMemo(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) return [];

    const query = debouncedQuery.toLowerCase();
    const suggestionSet = new Set();

    products.forEach(product => {
      // Add matching product names
      if (product.name?.toLowerCase().includes(query)) {
        suggestionSet.add(product.name);
      }
      
      // Add matching categories
      if (product.category?.toLowerCase().includes(query)) {
        suggestionSet.add(product.category);
      }
      
      // Add matching colors
      if (product.color?.toLowerCase().includes(query)) {
        suggestionSet.add(`${product.color} items`);
      }
      
      // Add matching sizes
      if (product.size?.toLowerCase().includes(query)) {
        suggestionSet.add(`Size ${product.size}`);
      }
    });

    return Array.from(suggestionSet).slice(0, 5);
  }, [products, debouncedQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchFilters,
    setSearchFilters,
    searchResults,
    suggestions,
    resultsCount: searchResults.length
  };
};
