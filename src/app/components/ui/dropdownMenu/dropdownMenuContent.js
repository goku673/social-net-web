'use client';

import React, { useContext } from 'react';
import { DropdownMenuContext } from './dropdownMenu';

const DropdownMenuContent = ({
  children,
  className = '',
  align = 'end',
  ...props
}) => {
  const { open } = useContext(DropdownMenuContext);

  if (!open) return null;

  // Alineación: si es 'end' va a la derecha, si no a la izquierda
  const alignmentClasses = align === 'end' ? 'right-0' : 'left-0';

  return (
    <div
      className={`absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md animate-in fade-in-0 zoom-in-95 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 ${alignmentClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

DropdownMenuContent.displayName = 'DropdownMenuContent';

export default DropdownMenuContent;
