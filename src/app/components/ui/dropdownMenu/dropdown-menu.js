'use client';

import React, { useState, useEffect, useRef, createContext } from 'react';

// Creamos el contexto para compartir el estado 'open' y la función 'setOpen'
export const DropdownMenuContext = createContext({
  open: false,
  setOpen: () => {},
});

const DropdownMenu = ({ children, className = '', ...props }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Lógica para cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div
        ref={menuRef}
        className={`relative inline-block text-left ${className}`}
        {...props}
      >
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
