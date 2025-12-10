'use client';
import Image from 'next/image';
import { useState } from 'react';

const CustomImage = ({
  src,
  alt,
  className = '',
  width = 500,
  height = 500,
  fallbackSrc = 'https://via.placeholder.com/500',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt || 'Imagen'}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${className}`}
      onError={() => setImgSrc(fallbackSrc)}
      {...props}
    />
  );
};

export { CustomImage };
