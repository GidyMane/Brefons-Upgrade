// components/Loader.tsx
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
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-t-4 border-green-600 rounded-full animate-spin mb-4"></div>
      <p className="text-xl font-semibold text-green-600">Please wait, Loading{dots}</p>
    </div>
  );
};

export default Loader;
