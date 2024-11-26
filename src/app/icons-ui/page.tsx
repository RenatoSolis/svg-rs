"use client";
import React, { useState } from 'react';
import SearchBox from '@/components/SearchBox';
import IconCard from '@/components/IconCard';
import MoonIcon from '@/components/icons/MoonIcon';
import  SunIcon  from '@/components/icons/SunIcon';
import SystemIcon from '@/components/icons/SystemIcon';

const icons = [
  {
    id: 1,
    name: 'Moon',
    IconComponent: MoonIcon, // Componente del ícono para mostrar
    iconPath: '/icons/moon.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: '',
  },
  {
    id: 2,
    name: 'Sun',
    IconComponent: SunIcon, // Componente del ícono para mostrar
    iconPath: '/icons/sun.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: '',
  },
  {
    id: 3,
    name: 'System',
    IconComponent: SystemIcon, // Componente del ícono para mostrar
    iconPath: '/icons/system.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: '',
  },
  // Puedes agregar más íconos con sus respectivas rutas
];

const IconsUI: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar íconos en base al término de búsqueda
  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBox onSearch={(value) => setSearchTerm(value)} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {filteredIcons.map((icon) => (
          <IconCard
            key={icon.id}
            name={icon.name}
            IconComponent={icon.IconComponent}
            iconPath={icon.iconPath} // Pasar la ruta del SVG
            linkUrl={icon.linkUrl} // URL para el enlace asociado
          />
        ))}
      </div>
    </div>
  );
};

export default IconsUI;