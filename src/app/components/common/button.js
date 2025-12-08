import * as React from 'react';
import { cn } from '../lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // 1. Definimos los estilos base (siempre se aplican)
    const baseStyles =
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    // 2. Definimos el diccionario de Variantes
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    };

    // 3. Definimos el diccionario de Tamaños
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };

    // 4. Seleccionamos las clases correspondientes (con fallback a 'default' por seguridad)
    const variantClasses = variants[variant] || variants.default;
    const sizeClasses = sizes[size] || sizes.default;

    return (
      <button
        className={cn(
          baseStyles, // Clases base
          variantClasses, // Clases de color/tipo
          sizeClasses, // Clases de tamaño
          className // Clases extra que pases al componente
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
