'use client';

import React, { useContext } from 'react';
import { DropdownMenuContext } from './dropdownMenu';

const DropdownMenuItem = ({ className = '', children, onClick, ...props }) => {
  const { setOpen } = useContext(DropdownMenuContext);

  const handleClick = (e) => {
    // Cerramos el menú
    setOpen(false);

    // Si pasaste una función onClick personalizada, la ejecutamos
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
