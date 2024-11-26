"use client";
import React, { useState } from 'react';
import SearchBox from '@/components/SearchBox';
import IconCard from '@/components/IconCard';
import NextJsIcon from '@/components/icons/NextJsIcon';
import AstroIcon from '@/components/icons/AstroIcon';
import TailwindCSSIcon from '@/components/icons/TailwindCSSIcon';

const icons = [
  {
    id: 1,
    name: 'Nextjs',
    IconComponent: NextJsIcon, // Componente del ícono para mostrar
    iconPath: '/icons/nextjs.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://nextjs.org/',
  },
  {
    id: 2,
    name: 'Astro',
    IconComponent: AstroIcon, // Componente del ícono para mostrar
    iconPath: '/icons/astro.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://astro.build/',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    IconComponent: TailwindCSSIcon, // Componente del ícono para mostrar
    iconPath: '/icons/tailwindcss.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://tailwindcss.com/',
  },
  // Puedes agregar más íconos con sus respectivas rutas
];

const Framework: React.FC = () => {
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

export default Framework;