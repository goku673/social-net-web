'use client';
import { useContext } from 'react';

import { SheetContext } from './sheet';
import { SheetOverlay } from './sheetOverlay';
import { XIcon } from '../../icons/xIcon';

const SheetContent = ({
  side = 'right',
  className = '',
  children,
  ...props
}) => {
  const { open, setOpen } = useContext(SheetContext);

  const variants = {
    top: 'inset-x-0 top-0 border-b',
    bottom: 'inset-x-0 bottom-0 border-t',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
  };

  const baseClasses = `fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out duration-300 dark:bg-gray-950 ${variants[side]}`;

  if (!open) return null;

  return (
    <>
      <SheetOverlay />
      <div className={`${baseClasses} ${className}`} {...props}>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none hover:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:hover:bg-gray-800"
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Cerrar</span>
        </button>
        {children}
      </div>
    </>
  );
};

export { SheetContent };
SheetContent.displayName = 'SheetContent';
