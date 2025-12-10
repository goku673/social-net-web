'use client';

import { useState, useEffect } from 'react';
import { XCircleIcon } from './icons/xCircleIcon';
import { XIcon } from './icons/xIcon';
import { AlertTriangleIcon } from './icons/alertTriangleIcon';
import { InfoIcon } from './icons/infoIcon';
import { CheckIcon } from './icons/checkIcon';
import { Button } from './common/button';

const NOTIFICATION_CONFIG = {
  success: {
    icon: CheckIcon,
    styles: 'bg-green-50 border-green-200 text-green-800',
  },
  error: {
    icon: XCircleIcon,
    styles: 'bg-red-50 border-red-200 text-red-800',
  },
  warning: {
    icon: AlertTriangleIcon,
    styles: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  },
  info: {
    icon: InfoIcon,
    styles: 'bg-blue-50 border-blue-200 text-blue-800',
  },
};

export const Notification = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const config = NOTIFICATION_CONFIG[type] || NOTIFICATION_CONFIG.info;
  const Icon = config.icon;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-sm px-4 py-3 rounded-lg border shadow-lg ${config.styles} flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 ${className}`}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className="mt-0.5 flex-shrink-0">
        <Icon width="20" height="20" />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClose}
        aria-label="Cerrar notificación"
        className="h-6 w-6 -mt-1 -mr-2 text-current hover:bg-black/5 hover:text-current"
      >
        <XIcon width="14" height="14" />
      </Button>
    </div>
  );
};
