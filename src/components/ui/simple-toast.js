import { useState, useEffect } from 'react';

// Simple toast state management
let toastId = 0;
const toastListeners = new Set();
let toasts = [];

const addToast = (toast) => {
  const id = ++toastId;
  const newToast = { ...toast, id };
  toasts = [newToast, ...toasts].slice(0, 5); // Keep max 5 toasts
  
  // Notify all listeners
  toastListeners.forEach(listener => listener([...toasts]));
  
  // Auto remove after delay
  setTimeout(() => {
    removeToast(id);
  }, toast.duration || 5000);
  
  return id;
};

const removeToast = (id) => {
  toasts = toasts.filter(toast => toast.id !== id);
  toastListeners.forEach(listener => listener([...toasts]));
};

// Toast hook
export const useToast = () => {
  const [toastList, setToastList] = useState([]);
  
  useEffect(() => {
    toastListeners.add(setToastList);
    return () => toastListeners.delete(setToastList);
  }, []);
  
  const toast = ({ title, description, variant = 'default', duration = 5000 }) => {
    return addToast({ title, description, variant, duration });
  };
  
  const dismiss = (id) => {
    removeToast(id);
  };
  
  return {
    toast,
    dismiss,
    toasts: toastList
  };
};

// Simple toast function for direct use
export const toast = ({ title, description, variant = 'default', duration = 5000 }) => {
  return addToast({ title, description, variant, duration });
};

// Alternative export name for backwards compatibility
export const showToast = (message, variant = 'default', duration = 5000) => {
  if (typeof message === 'string') {
    return addToast({ title: message, variant, duration });
  }
  return addToast(message);
};
