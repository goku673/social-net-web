'use client';
import React from 'react';
import { HomeIcon } from './icons/homeIcon';
import { SearchIcon } from './icons/searchIcon';
import { BellIcon } from './icons/BellIcon';
import { MessageCircleIcon } from './icons/messageCircleIcon';
import { UserIcon } from './icons/userIcon';
import { Button } from './common/button';
import { Card, CardContent } from './ui/card';

const Sidebar = ({ setActiveView }) => {
  const sidebarFields = [
    {
      label: 'Inicio',
      icon: <HomeIcon className="mr-2 h-5 w-5" />,

      action: () => setActiveView && setActiveView('feed'),
    },
    {
      label: 'Explorar',
      icon: <SearchIcon className="mr-2 h-5 w-5" />,
      action: () => console.log('Navegar a explorar'),
    },
    {
      label: 'Notificaciones',
      icon: <BellIcon className="mr-2 h-5 w-5" />,
      action: () => console.log('Ver notificaciones'),
    },
    {
      label: 'Mensajes',
      icon: <MessageCircleIcon className="mr-2 h-5 w-5" />,
      action: () => console.log('Ver mensajes'),
    },
    {
      label: 'Perfil',
      icon: <UserIcon className="mr-2 h-5 w-5" />,

      action: () => setActiveView && setActiveView('profile'),
    },
  ];

  return (
    <Card className="bg-white border-gray-100 shadow-sm sticky top-24">
      <CardContent className="p-4 flex flex-col gap-2">
        {sidebarFields.map((field) => (
          <Button
            key={field.label}
            variant="ghost"
            className="w-full justify-start text-base font-normal text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            size="lg"
            onClick={field.action}
          >
            {field.icon}
            {field.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default Sidebar;
