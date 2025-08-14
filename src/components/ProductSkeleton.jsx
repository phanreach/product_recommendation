function ProductSkeleton({ className = "" }) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2 sm:mb-3 animate-pulse">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 sm:h-5 bg-gray-200 rounded animate-pulse w-1/2"></div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
      </div>
      <div className="mt-2 sm:mt-3 flex justify-between items-center">
        <div className="h-6 sm:h-7 bg-gray-200 rounded animate-pulse w-16"></div>
        <div className="h-8 sm:h-9 bg-gray-200 rounded animate-pulse w-20"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
