const Card = ({ className = '', children, ...props }) => {
  const baseStyles =
    'rounded-lg border border-border bg-card text-card-foreground shadow-sm';
  const classes = `${baseStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';
export { Card };
