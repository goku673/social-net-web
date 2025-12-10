export const DropdownMenuSeparator = ({ className = '', ...props }) => (
  <div
    className={`-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800 ${className}`}
    {...props}
  />
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
