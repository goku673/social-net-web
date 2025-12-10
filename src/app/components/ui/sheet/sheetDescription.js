const SheetDescription = ({ className = '', ...props }) => (
  <p
    className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}
    {...props}
  />
);
export { SheetDescription };
SheetDescription.displayName = 'SheetDescription';
