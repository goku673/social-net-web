'use client';
import { useContext } from 'react';
import { SheetContext } from './sheet';
const SheetOverlay = ({ className = '', ...props }) => {
  const { open, setOpen } = useContext(SheetContext);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 ${className}`}
      onClick={() => setOpen(false)}
      {...props}
    />
  );
};

export { SheetOverlay };
SheetOverlay.displayName = 'SheetOverlay';
