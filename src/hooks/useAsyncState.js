import { useState, useCallback } from 'react';

/**
 * Enhanced async state hook with error handling and retry logic
 * Manages loading, data, error states for async operations
 */
export function useAsyncState(initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const execute = useCallback(async (asyncFunction, maxRetries = 2) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await asyncFunction();
      setData(result);
      setRetryCount(0); // Reset retry count on success
      return result;
    } catch (err) {
      console.error('Async operation failed:', err);
      
      // Determine if we should retry
      const shouldRetry = retryCount < maxRetries && (
        !err.response || 
        err.response.status >= 500 ||
        err.code === 'ERR_NETWORK'
      );

      if (shouldRetry) {
        setRetryCount(prev => prev + 1);
        // Exponential backoff: 1s, 2s, 4s
        const delay = Math.pow(2, retryCount) * 1000;
        setTimeout(() => execute(asyncFunction, maxRetries), delay);
        return;
      }

      // Set error after all retries exhausted
      const errorMessage = err.response?.data?.message || 
                           err.response?.data?.error || 
                           err.message || 
                           'An unexpected error occurred';
      
      setError({
        message: errorMessage,
        status: err.response?.status,
        retryCount,
        canRetry: !err.response || err.response.status >= 500
      });
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [retryCount]);

  const retry = useCallback(() => {
    if (error?.canRetry) {
      setRetryCount(0);
      setError(null);
    }
  }, [error]);

  const reset = useCallback(() => {
    setData(initialData);
    setLoading(false);
    setError(null);
    setRetryCount(0);
  }, [initialData]);

  return {
    data,
    loading,
    error,
    retryCount,
    execute,
    retry,
    reset,
    setData
  };
}
