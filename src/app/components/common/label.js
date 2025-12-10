const Label = ({ className = '', children, htmlFor, ...props }) => {
  const baseStyles =
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
  const classes = `${baseStyles} ${className}`;

  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
    </label>
  );
};
export { Label };
