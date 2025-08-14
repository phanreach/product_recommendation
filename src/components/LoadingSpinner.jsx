function LoadingSpinner({ size = 'large', className = '', color = 'gray-900' }) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8', 
    large: 'h-12 w-12'
  };

  return (
    <div className={`animate-spin rounded-full border-b-2 border-${color} ${sizeClasses[size]} ${className}`} />
  );
}

export default LoadingSpinner;
