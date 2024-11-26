import React from 'react';
//import Link from 'next/link';
import ScrollButton from './ScrollButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-black dark:text-zinc-200/90 ">
          © {currentYear}{' '}
          <a href="https://sage-dieffenbachia-ac2873.netlify.app/" className="hover:underline">
            Renato Solis
          </a>
          . SVG-RS. Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
          {/* <Link href="/#sobre-mi" className="hover:underline me-4 md:me-6">
              Sobre mí
            </Link> */}
          </li>
          <li className='font-bold'>
            <a
              id="contacto"
              href="mailto:renatosolismedina99@gmail.com"
              className="hover:underline"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <ScrollButton /> {/* Aquí se incluye el componente de desplazamiento */}
    </footer>
  );
};

export default Footer;


