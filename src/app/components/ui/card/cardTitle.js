export const CardTitle = ({ className = '', children, ...props }) => {
  const baseStyles = 'text-2xl font-semibold leading-none tracking-tight';
  const classes = `${baseStyles} ${className}`;

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
};

CardTitle.displayName = 'CardTitle';
