//import Image from "next/image";
import GithubIcon from "@/components/icons/GitHubIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import TailwindCSSIcon from "@/components/icons/TailwindCSSIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";

export default function Home() {
  return (

   <div id="top" className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="text-center">
        <h1 className="text-3xl font-bold">SVG-RS - Free SVG Icons</h1>
        <p className="text-gray-700 mt-2 dark:text-white">
        Explore a wide collection of free SVG icons to download.
        </p>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        {/* Aquí puedes agregar la cuadrícula de iconos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Ejemplo de ítem de icono */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center">
            <svg
              className="h-10 w-10 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <GithubIcon width={24} height={24} fill="#000" />
            </svg>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center">
            <svg
              className="h-10 w-10 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <NextJsIcon width={24} height={24} fill="#000" />
            </svg>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center">
            <svg
              className="h-10 w-10 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <TypeScriptIcon width={24} height={24} fill="#000" />
            </svg>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center">
            <svg
              className="h-10 w-10 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <TailwindCSSIcon width={24} height={24} fill="#000" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
