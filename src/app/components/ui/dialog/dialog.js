'use client';
import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from 'react';
import { XIcon } from '../../icons/xIcon'; // Asegúrate de tener este icono

const DialogContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const Dialog = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const DialogTrigger = ({ children, asChild, className = '' }) => {
  const { setIsOpen } = useContext(DialogContext);

  const handleClick = () => setIsOpen(true);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      className: `${children.props.className || ''} ${className}`.trim(),
    });
  }

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export const DialogContent = ({ className = '', children, ...props }) => {
  const { isOpen, setIsOpen } = useContext(DialogContext);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        data-state={isOpen ? 'open' : 'closed'}
        onClick={() => setIsOpen(false)}
      />

      {/* Content */}
      <div
        className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:bg-gray-950 ${className}`}
        data-state={isOpen ? 'open' : 'closed'}
        {...props}
      >
        {children}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Cerrar</span>
        </button>
      </div>
    </>
  );
};

export const DialogHeader = ({ className = '', ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}
    {...props}
  />
);

export const DialogFooter = ({ className = '', ...props }) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
    {...props}
  />
);

export const DialogTitle = ({ className = '', ...props }) => (
  <h3
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);

export const DialogDescription = ({ className = '', ...props }) => (
  <p
    className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}
    {...props}
  />
);
