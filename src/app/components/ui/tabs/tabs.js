'use client';

import React, { useState, createContext, useContext } from 'react';

// Contexto para compartir el estado entre los componentes de las pestañas
const TabsContext = createContext();

const Tabs = ({ defaultValue, className = '', children, ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 dark:bg-gray-800 dark:text-gray-400 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const TabsTrigger = ({ value, className = '', children, ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  // Estilos condicionales basados en si está activo o no
  const activeStyles = isActive
    ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100'
    : '';

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-900 dark:focus-visible:ring-gray-800 ${activeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, className = '', children, ...props }) => {
  const { activeTab } = useContext(TabsContext);

  // Si esta no es la pestaña activa, no renderizamos nada
  if (activeTab !== value) return null;

  return (
    <div
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:ring-offset-gray-900 dark:focus-visible:ring-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
