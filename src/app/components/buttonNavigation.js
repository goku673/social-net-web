'use client';
import React from 'react';
import { BellIcon } from './icons/BellIcon';
import { HomeIcon } from './icons/homeIcon';
import { ImageIcon } from './icons/imageIcon';
import { SearchIcon } from './icons/searchIcon';
import { UserIcon } from './icons/userIcon';
import { Button } from './common/button';

const BottomNavigation = ({ setIsCreatingPost, setActiveView }) => {
  return (
    <nav className="bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-gray-100">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveView('feed')}
          >
            <HomeIcon className="h-6 w-6 text-gray-600" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveView('feed')}
          >
            <SearchIcon className="h-6 w-6 text-gray-600" />
          </Button>

          {/* Botón central destacado para crear */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCreatingPost(true)}
          >
            <div className="bg-blue-50 p-2 rounded-full">
              <ImageIcon className="h-6 w-6 text-blue-600" />
            </div>
          </Button>

          <Button variant="ghost" size="icon">
            <BellIcon className="h-6 w-6 text-gray-600" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveView('profile')}
          >
            <UserIcon className="h-6 w-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
