// Enhanced filtering component for products page
// src/components/EnhancedProductFilters.jsx

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const EnhancedProductFilters = ({ products, onFilterChange, activeFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    size: false,
    color: false,
    season: false,
    priceRange: false
  });

  // Extract unique values from products for dynamic filtering
  const extractUniqueValues = (field) => {
    return [...new Set(products.map(p => p[field]).filter(Boolean))].sort();
  };

  const categories = extractUniqueValues('category');
  const sizes = extractUniqueValues('size');
  const colors = extractUniqueValues('color');
  const seasons = extractUniqueValues('season');

  // Price range calculation
  const prices = products.map(p => p.price).filter(Boolean);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isExpanded && <div className="mt-3">{children}</div>}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button 
          onClick={() => onFilterChange({})}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <FilterSection
        title="Category"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection('category')}
      >
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={activeFilters.categories?.includes(category) || false}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...(activeFilters.categories || []), category]
                    : (activeFilters.categories || []).filter(c => c !== category);
                  onFilterChange({ ...activeFilters, categories: newCategories });
                }}
                className="rounded border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Size Filter */}
      <FilterSection
        title="Size"
        isExpanded={expandedSections.size}
        onToggle={() => toggleSection('size')}
      >
        <div className="grid grid-cols-3 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => {
                const newSizes = activeFilters.sizes?.includes(size)
                  ? activeFilters.sizes.filter(s => s !== size)
                  : [...(activeFilters.sizes || []), size];
                onFilterChange({ ...activeFilters, sizes: newSizes });
              }}
              className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                activeFilters.sizes?.includes(size)
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Color Filter */}
      <FilterSection
        title="Color"
        isExpanded={expandedSections.color}
        onToggle={() => toggleSection('color')}
      >
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => {
                const newColors = activeFilters.colors?.includes(color)
                  ? activeFilters.colors.filter(c => c !== color)
                  : [...(activeFilters.colors || []), color];
                onFilterChange({ ...activeFilters, colors: newColors });
              }}
              className={`px-3 py-1 text-sm rounded-full capitalize transition-colors ${
                activeFilters.colors?.includes(color)
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Season Filter */}
      <FilterSection
        title="Season"
        isExpanded={expandedSections.season}
        onToggle={() => toggleSection('season')}
      >
        <div className="grid grid-cols-2 gap-2">
          {seasons.map(season => (
            <button
              key={season}
              onClick={() => {
                const newSeasons = activeFilters.seasons?.includes(season)
                  ? activeFilters.seasons.filter(s => s !== season)
                  : [...(activeFilters.seasons || []), season];
                onFilterChange({ ...activeFilters, seasons: newSeasons });
              }}
              className={`px-3 py-2 text-sm border rounded-md capitalize transition-colors ${
                activeFilters.seasons?.includes(season)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {season}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection
        title="Price Range"
        isExpanded={expandedSections.priceRange}
        onToggle={() => toggleSection('priceRange')}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder={`$${minPrice}`}
              value={activeFilters.minPrice || ''}
              onChange={(e) => onFilterChange({
                ...activeFilters,
                minPrice: e.target.value ? Number(e.target.value) : undefined
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              placeholder={`$${maxPrice}`}
              value={activeFilters.maxPrice || ''}
              onChange={(e) => onFilterChange({
                ...activeFilters,
                maxPrice: e.target.value ? Number(e.target.value) : undefined
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="text-xs text-gray-500">
            Price range: ${minPrice} - ${maxPrice}
          </div>
        </div>
      </FilterSection>
    </div>
  );
};

export default EnhancedProductFilters;
