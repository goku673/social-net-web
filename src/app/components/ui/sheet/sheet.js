'use client';
import React, { useState, createContext, useContext } from 'react';

// --- CORRECCIÓN: Agregamos 'export' aquí ---
export const SheetContext = createContext({
  open: false,
  setOpen: () => {},
});

// Componente Raíz
export const Sheet = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};
Sheet.displayName = 'Sheet';

// Componente Gatillo (Botón para abrir)
export const SheetTrigger = ({ children, asChild, className = '' }) => {
  const { setOpen } = useContext(SheetContext);

  const handleClick = () => setOpen(true);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      className: `${children.props.className || ''} ${className}`.trim(),
    });
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
SheetTrigger.displayName = 'SheetTrigger';
