const SheetTitle = ({ className = '', ...props }) => (
  <h3
    className={`text-lg font-semibold text-gray-950 dark:text-gray-50 ${className}`}
    {...props}
  />
);
export { SheetTitle };
SheetTitle.displayName = 'SheetTitle';
