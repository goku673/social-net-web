const Text = ({ variant = 'body', className = '', children, ...props }) => {
  const variants = {
    body: 'text-sm text-foreground',
    small: 'text-xs text-muted-foreground',
    large: 'text-base text-foreground',
    muted: 'text-sm text-muted-foreground',
    destructive: 'text-sm text-destructive',
    subtle: 'text-xs text-muted-foreground',
  };

  const classes = `${variants[variant]} ${className}`;

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
export { Text };
