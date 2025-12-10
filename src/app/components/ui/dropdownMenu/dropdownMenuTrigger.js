'use client';

import React, { useContext } from 'react';
import { DropdownMenuContext } from './dropdownMenu';

const DropdownMenuTrigger = ({ className = '', children, ...props }) => {
  const { open, setOpen } = useContext(DropdownMenuContext);

  return (
    <div
      onClick={(e) => {
        // Evitamos que el evento se propague inmediatamente para no conflictos
        e.stopPropagation();
        setOpen(!open);
      }}
      className={`inline-flex cursor-pointer ${className}`}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      {children}
    </div>
  );
};

DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export default DropdownMenuTrigger;
