import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

function AlertBox({ type = 'info', message, onClose, className = '' }) {
  const variants = {
    success: {
      bg: 'bg-green-100',
      border: 'border-green-400',
      text: 'text-green-700',
      icon: <CheckCircle size={16} />
    },
    error: {
      bg: 'bg-red-100',
      border: 'border-red-400',
      text: 'text-red-700',
      icon: <AlertCircle size={16} />
    },
    warning: {
      bg: 'bg-yellow-100',
      border: 'border-yellow-400',
      text: 'text-yellow-700',
      icon: <AlertTriangle size={16} />
    },
    info: {
      bg: 'bg-blue-100',
      border: 'border-blue-400',
      text: 'text-blue-700',
      icon: <Info size={16} />
    }
  };

  const variant = variants[type];

  if (!message) return null;

  return (
    <div className={`
      ${variant.bg} border ${variant.border} ${variant.text} 
      px-4 py-3 rounded text-sm flex items-center gap-2 
      ${className}
    `}>
      {variant.icon}
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className={`${variant.text} hover:opacity-70 transition-opacity`}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default AlertBox;
