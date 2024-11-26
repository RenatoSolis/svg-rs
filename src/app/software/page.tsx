"use client";
import React, { useState } from 'react';
import SearchBox from '@/components/SearchBox';
import IconCard from '@/components/IconCard';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinuxIcon from '@/components/icons/LinuxIcon';
import VisualStudioIcon from '@/components/icons/VisualStudioIcon';
import VSCodeIcon from '@/components/icons/VSCodeIcon';

const icons = [
  {
    id: 1,
    name: 'GitHub',
    IconComponent: GitHubIcon, // Componente del ícono para mostrar
    iconPath: '/icons/github.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://github.com/GitHub',
  },
  {
    id: 2,
    name: 'Linux',
    IconComponent: LinuxIcon, // Componente del ícono para mostrar
    iconPath: '/icons/linux.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://www.linux.org/',
  },
  {
    id: 3,
    name: 'Visual Studio',
    IconComponent: VisualStudioIcon, // Componente del ícono para mostrar
    iconPath: '/icons/visualstudio.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://visualstudio.microsoft.com/es/',
  },
  {
    id: 4,
    name: 'Visual Studio Code',
    IconComponent: VSCodeIcon, // Componente del ícono para mostrar
    iconPath: '/icons/vscode.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://code.visualstudio.com/',
  },
  // Puedes agregar más íconos con sus respectivas rutas
];

const Software: React.FC = () => {
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

export default Software;


