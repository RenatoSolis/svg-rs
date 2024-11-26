"use client";
import React, { useState } from 'react';
import SearchBox from '@/components/SearchBox';
import IconCard from '@/components/IconCard';
import SQLServerIcon from '@/components/icons/SQLServerIcon';
import MySQLIcon from '@/components/icons/MySQLIcon';
import PostgreSQLIcon from '@/components/icons/PostgreSQLIcon';

const icons = [
  {
    id: 1,
    name: 'Microsoft SQL Server',
    IconComponent: SQLServerIcon, // Componente del ícono para mostrar
    iconPath: '/icons/sqlserver.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://www.microsoft.com/en-us/sql-server/',
  },
  {
    id: 2,
    name: 'MySQL',
    IconComponent: MySQLIcon, // Componente del ícono para mostrar
    iconPath: '/icons/mysql.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://www.mysql.com/',
  },
  {
    id: 3,
    name: 'PostgreSQL',
    IconComponent: PostgreSQLIcon, // Componente del ícono para mostrar
    iconPath: '/icons/postgresql.svg', // Ruta al archivo SVG en /public/icons/
    linkUrl: 'https://www.postgresql.org/',
  },
  // Puedes agregar más íconos con sus respectivas rutas
];

const Database: React.FC = () => {
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

export default Database;