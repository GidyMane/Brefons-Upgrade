
import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [dots, setDots] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-4 border-green-600 rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-semibold text-green-600">Logging you in{dots}</p>
      </div>
    </div>
  );
};

export default Loader;
