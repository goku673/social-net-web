const CardContent = ({ className = '', children, ...props }) => {
  const baseStyles = 'p-6 pt-0';
  const classes = `${baseStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';
export { CardContent };
