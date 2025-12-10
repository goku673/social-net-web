import { ErrorMessage } from '../common/errorMessage';
const FormField = ({
  label,
  error = '',
  className = '',
  children,
  required = false,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`} {...props}>
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      {children}
      <ErrorMessage message={error} show={!!error} />
    </div>
  );
};

export { FormField };
