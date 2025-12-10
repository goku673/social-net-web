const Checkbox = ({ className = '', id, ...props }) => {
  const baseStyles =
    'h-4 w-4 rounded border border-primary ring-offset-background cursor-pointer accent-primary';
  const classes = `${baseStyles} ${className}`;

  return <input id={id} type="checkbox" className={classes} {...props} />;
};

export { Checkbox };
