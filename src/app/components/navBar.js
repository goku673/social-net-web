'use client';

import { BellIcon } from './icons/BellIcon';
import { MessageCircleIcon } from './icons/messageCircleIcon';
import { SearchIcon } from './icons/searchIcon';
import { MenuIcon } from './icons/menuIcon';
import { Avatar } from './ui/avatar/avatar';
import AvatarFallback from './ui/avatar/avatarFallback';
import AvatarImage from './ui/avatar/avatarImage';
import { Button } from './common/button';
import { Input } from './common/input';
import DropdownMenu from './ui/dropdownMenu/dropdownMenu';
import DropdownMenuContent from './ui/dropdownMenu/dropdownMenuContent';
import DropdownMenuTrigger from './ui/dropdownMenu/dropdownMenuTrigger';
import DropdownMenuItem from './ui/dropdownMenu/dropdownMenuItem';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

import Sidebar from './sidebar';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const navigate = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <nav className="bg-white shadow-md top-0 z-10 sticky">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="bg-white">
                  <SheetTitle>Menú</SheetTitle>
                  <SheetDescription>
                    Navega por las diferentes secciones de SocialNet
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4">
                  <Sidebar />
                </div>
              </SheetContent>
            </Sheet>

            <h1
              className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
              onClick={() => navigate.push('/socialNet')}
            >
              SocialNet
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar..."
                className="pl-8 w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircleIcon className="h-5 w-5" />
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer hover:opacity-80 transition-opacity">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Usuario"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() =>
                  user?.userID && navigate.push(`/socialNet/${user.userID}`)
                }
              >
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate.push('/settings')}>
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  localStorage.removeItem('user');
                  navigate.push('/login');
                }}
              >
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
