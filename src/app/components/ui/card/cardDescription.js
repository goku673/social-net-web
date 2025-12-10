const CardDescription = ({ className = '', children, ...props }) => {
  const baseStyles = 'text-sm text-muted-foreground';
  const classes = `${baseStyles} ${className}`;

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

CardDescription.displayName = 'CardDescription';
export { CardDescription };
