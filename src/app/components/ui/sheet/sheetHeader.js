const SheetHeader = ({ className = '', ...props }) => (
  <div
    className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
    {...props}
  />
);

export { SheetHeader };
SheetHeader.displayName = 'SheetHeader';
