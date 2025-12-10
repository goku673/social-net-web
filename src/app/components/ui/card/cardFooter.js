export const CardFooter = ({ className = '', children, ...props }) => {
  const baseStyles = 'flex items-center p-6 pt-0';
  const classes = `${baseStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';
