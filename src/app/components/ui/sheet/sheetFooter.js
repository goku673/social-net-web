const SheetFooter = ({ className = '', ...props }) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
    {...props}
  />
);
export { SheetFooter };
SheetFooter.displayName = 'SheetFooter';
