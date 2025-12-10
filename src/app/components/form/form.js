'use client';

const Form = ({ onSubmit, className = '', children, ...props }) => {
  const baseStyles = 'w-full flex flex-col gap-4';
  const classes = `${baseStyles} ${className}`;

  return (
    <form onSubmit={onSubmit} className={classes} {...props}>
      {children}
    </form>
  );
};
export { Form };
