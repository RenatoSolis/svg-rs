"use client";
import React, { useState } from 'react';
import SearchBox from '@/components/SearchBox';
import IconCard from '@/components/IconCard';
import CSharpIcon from '@/components/icons/CSharpIcon';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon';
import CSSIcon from '@/components/icons/CSSIcon';
import HTML5Icon from '@/components/icons/HTML5Icon';
import PhpIcon from '@/components/icons/PhpIcon';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon';

const icons = [
  {
    id: 1,
    name: 'C#',
    IconComponent: CSharpIcon, // Componente del ícono para mostrar
    iconPath: '/icons/csharp.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://dotnet.microsoft.com/es-es/languages/csharp',
  },
  {
    id: 2,
    name: 'JavaScript',
    IconComponent: JavaScriptIcon, // Componente del ícono para mostrar
    iconPath: '/icons/javascript.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  {
    id: 3,
    name: 'CSS',
    IconComponent: CSSIcon, // Componente del ícono para mostrar
    iconPath: '/icons/css.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://es.wikipedia.org/wiki/CSS',
  },
  {
    id: 4,
    name: 'HTML5',
    IconComponent: HTML5Icon, // Componente del ícono para mostrar
    iconPath: '/icons/html5.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://es.wikipedia.org/wiki/HTML5',
  },
  {
    id: 5,
    name: 'Php',
    IconComponent: PhpIcon, // Componente del ícono para mostrar
    iconPath: '/icons/php.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://www.php.net/',
  },
  {
    id: 6,
    name: 'TypeScript',
    IconComponent: TypeScriptIcon, // Componente del ícono para mostrar
    iconPath: '/icons/typescript.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://www.typescriptlang.org/',
  },
  // Puedes agregar más íconos con sus respectivas rutas
];

const Language: React.FC = () => {
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

export default Language;