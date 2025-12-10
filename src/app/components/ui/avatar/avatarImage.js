'use client';

import { useContext } from 'react';
import Image from 'next/image';
// Importamos el contexto desde tu archivo principal avatar.js
import { AvatarContext } from './avatar';

const AvatarImage = ({ className = '', src, alt, ...props }) => {
  const context = useContext(AvatarContext);

  // Verificamos si existe el contexto para evitar errores si se usa aislado
  const hasError = context ? context.hasError : false;
  const setHasError = context ? context.setHasError : () => {};

  // Si la imagen dio error, no renderizamos nada (para que se vea el Fallback de fondo)
  if (hasError) return null;

  return (
    <Image
      src={src}
      alt={alt || 'Avatar'}
      width={100}
      height={100}
      className={`aspect-square h-full w-full ${className}`}
      onError={() => setHasError(true)} // Activamos el error si falla la carga
      {...props}
    />
  );
};

AvatarImage.displayName = 'AvatarImage';

export default AvatarImage;
