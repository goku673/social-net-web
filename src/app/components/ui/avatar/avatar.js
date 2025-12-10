'use client';
import React, { useState, createContext } from 'react';

// 1. Exportamos el Contexto para que AvatarImage lo pueda usar
export const AvatarContext = createContext({
  hasError: false,
  setHasError: () => {},
});

const Avatar = ({ className = '', children, ...props }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <AvatarContext.Provider value={{ hasError, setHasError }}>
      <div
        className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
        {...props}
      >
        {children}
      </div>
    </AvatarContext.Provider>
  );
};

export { Avatar };
