import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = ({ url, size = 200, className = '' }) => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateQR = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        if (canvasRef.current) {
          await QRCode.toCanvas(canvasRef.current, url, {
            width: size,
            margin: 2,
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
        }
      } catch (err) {
        setError('Failed to generate QR code');
        console.error('QR Code generation error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    generateQR();
  }, [url, size]);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <p className="text-gray-500 text-sm text-center p-4">QR Code Error</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg" style={{ width: size, height: size }}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`rounded-lg shadow-lg ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default QRCodeGenerator;
