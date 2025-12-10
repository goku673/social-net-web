const Option = ({
  value,
  className = '',
  children,
  disabled = false,
  ...props
}) => {
  const classes = className;

  return (
    <option value={value} disabled={disabled} className={classes} {...props}>
      {children}
    </option>
  );
};
export { Option };
