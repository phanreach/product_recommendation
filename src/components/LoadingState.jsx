import LoadingSpinner from './LoadingSpinner';

function LoadingState({ message = 'Loading...', className = '' }) {
  return (
    <div className={`text-center py-16 ${className}`}>
      <LoadingSpinner size="large" className="mx-auto mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
}

export default LoadingState;
