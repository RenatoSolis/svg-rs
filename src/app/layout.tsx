import { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./ui/fonts";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { AppSidebar } from "../components/VerticalMenu"; // Importar el nuevo Sidebar
import { SidebarProvider } from "@/components/ui/sidebar"; // Importar el SidebarProvider

export const metadata: Metadata = {
  title: "SVG-RS - Iconos SVG Gratis",
  description: "SVG-RS es una galería de iconos SVG gratuitos y descargables en múltiples formatos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${montserrat.className} antialiased relative text-black dark:text-white`}
      >
        <div
          className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-800 dark:bg-gray-950 
    bg-lightRadial dark:bg-darkRadial"
        ></div>
        {/* Agregar el SidebarProvider */}
        <SidebarProvider>
          <div className="flex min-h-screen">
            {/* Sidebar (en lugar de VerticalMenu) */}
            <AppSidebar />
            {/* Contenedor Principal */}
            <div className="flex-1 flex flex-col">
              {<Header />}
              {/* Contenido de la Página */}
              <main className="flex-1 p-6">{children}</main>
              {/* Footer */}
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
