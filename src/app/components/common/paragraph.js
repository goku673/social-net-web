const Paragraph = ({ className = '', children, ...props }) => {
  const baseStyles = 'text-sm leading-relaxed text-foreground';
  const classes = `${baseStyles} ${className}`;

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
export { Paragraph };
