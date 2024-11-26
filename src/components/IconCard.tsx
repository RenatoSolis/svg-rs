import React from 'react';
//import Image from 'next/image';
import CopyIcon from '@/components/icons/CopyIcon';
import DownloadIcon from '@/components/icons/DownloadIcon';
import LinkIcon from '@/components/icons/LinkIcon';

interface IconCardProps {
  name: string;
  IconComponent: string | React.ElementType;
  iconPath: string;
  linkUrl: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, IconComponent, iconPath, linkUrl }) => {
  // Copiar SVG al portapapeles
  const handleCopy = () => {
    fetch(iconPath)
      .then((response) => response.text())
      .then((svgText) => {
        navigator.clipboard.writeText(svgText);
        alert('SVG copiado al portapapeles');
      })
      .catch((error) => console.error('Error al copiar el SVG:', error));
  };

  // Descargar SVG como archivo
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = iconPath; // Usa la ruta directa al archivo
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center dark:text-black dark:bg-[#1e1e2e]"
      style={{ maxWidth: '170px' }}
    >
      <div className="text-gray-500 dark:text-white">
      <IconComponent />
      </div>

      <p className="mt-2 text-center font-medium dark:text-white">{name}</p>
      <div className="flex justify-center gap-2 mt-3">
        <button
          className="text-sm px-2 py-1 bg-gray-200 rounded flex items-center gap-2"
          onClick={handleCopy}
        >
          <CopyIcon className="h-4 w-4 text-gray-700" />
        </button>
        <button
          className="text-sm px-2 py-1 bg-gray-200 rounded flex items-center gap-2"
          onClick={handleDownload}
        >
          <DownloadIcon className="h-4 w-4 text-gray-700" />
        </button>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-2 py-1 bg-gray-200 rounded flex items-center justify-center"
        >
          <LinkIcon className="h-4 w-4 text-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default IconCard;

