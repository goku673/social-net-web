const ErrorMessage = ({
  message = '',
  className = '',
  show = true,
  ...props
}) => {
  if (!show || !message) return null;

  const baseStyles = 'text-xs font-medium text-destructive mt-1';
  const classes = `${baseStyles} ${className}`;

  return (
    <span className={classes} {...props}>
      {message}
    </span>
  );
};
export { ErrorMessage };
