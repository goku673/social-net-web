const Link = ({ className = '', children, href, ...props }) => {
  const baseStyles =
    'text-primary underline-offset-4 hover:underline cursor-pointer transition-colors';
  const classes = `${baseStyles} ${className}`;

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};

export { Link };
