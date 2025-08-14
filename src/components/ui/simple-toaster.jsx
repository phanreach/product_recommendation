import { useToast } from './simple-toast';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export function SimpleToaster() {
  const { toasts, dismiss } = useToast();
  
  if (toasts.length === 0) return null;
  
  const getIcon = (variant) => {
    switch (variant) {
      case 'destructive':
        return <AlertCircle size={16} />;
      case 'success':
        return <CheckCircle size={16} />;
      default:
        return <Info size={16} />;
    }
  };
  
  const getStyles = (variant) => {
    switch (variant) {
      case 'destructive':
        return 'bg-red-100 border-red-400 text-red-700';
      case 'success':
        return 'bg-green-100 border-green-400 text-green-700';
      default:
        return 'bg-blue-100 border-blue-400 text-blue-700';
    }
  };
  
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded border text-sm flex items-center gap-2 min-w-80 shadow-lg ${getStyles(toast.variant)}`}
        >
          {getIcon(toast.variant)}
          <div className="flex-grow">
            {toast.title && <div className="font-medium">{toast.title}</div>}
            {toast.description && <div className="text-sm">{toast.description}</div>}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="ml-2 hover:opacity-70"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
