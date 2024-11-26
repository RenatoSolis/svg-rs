// VerticalMenu.tsx
// "use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="w-60">
      {/* Encabezado de la barra lateral */}
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-bold text-pretty">
          <Link href="/">SVG-RS</Link>
        </h2>
      </SidebarHeader>

      {/* Contenido de la barra lateral */}
      <SidebarContent>
        <SidebarGroup>
          <Link
            href="/icons-ui"
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 block p-2 rounded-md transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            User Interface
          </Link>
        </SidebarGroup>

        <SidebarGroup>
          <Link
            href="/database"
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 block p-2 rounded-md transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Database
          </Link>
        </SidebarGroup>

        <SidebarGroup>
          <Link
            href="/framework"
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 block p-2 rounded-md transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Framework
          </Link>
        </SidebarGroup>

        <SidebarGroup>
          <Link
            href="/language"
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 block p-2 rounded-md transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Language
          </Link>
        </SidebarGroup>

        <SidebarGroup>
          <Link
            href="/software"
            className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-500 block p-2 rounded-md transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Software
          </Link>
        </SidebarGroup>      
      </SidebarContent>

      {/* Pie de página de la barra lateral */}
      <SidebarFooter className="p-4">
        {/* <p className="text-sm text-gray-500">© 2024 Renato Solis</p> */}
      </SidebarFooter>
    </Sidebar>
  );
}
