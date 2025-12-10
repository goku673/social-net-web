export const CardHeader = ({ className = '', children, ...props }) => {
  const baseStyles = 'flex flex-col space-y-1.5 p-6';
  const classes = `${baseStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';
