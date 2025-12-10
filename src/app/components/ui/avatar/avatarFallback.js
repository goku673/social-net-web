'use client';

const AvatarFallback = ({ className = '', children, ...props }) => {
  // Reemplazamos 'bg-muted' por colores tailwind estándar para independencia
  // 'bg-gray-100' para claro, 'dark:bg-gray-800' para oscuro
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

AvatarFallback.displayName = 'AvatarFallback';

export default AvatarFallback;
