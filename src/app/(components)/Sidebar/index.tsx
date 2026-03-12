"use client";

import React from "react";
import {
  Archive,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  Box,
  User,
  Settings,
  CircleDollarSign,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setSideBarCollapsed } from "@/state";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
  isDarkMode: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
  isDarkMode,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center gap-3 transition-all
          ${isCollapsed ? "justify-center py-4 px-4" : "justify-start px-8 py-4"}
          ${isActive
            ? "bg-blue-600 text-white"
            : isDarkMode
              ? "text-gray-300 hover:bg-zinc-800 hover:text-white"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        {!isCollapsed && (
          <span className="font-medium">{label}</span>
        )}
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setSideBarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div
      className={`fixed flex flex-col h-full shadow-md z-40 transition-all duration-300
        ${isSidebarCollapsed ? "w-16 md:w-24" : "w-64 md:w-72"}
        ${isDarkMode ? "bg-[#111113] border-r border-zinc-800" : "bg-white border-r border-gray-200"}`}
    >
      {/* LOGO */}
      <div className={`flex items-center pt-8 pb-4 ${isSidebarCollapsed ? "justify-center px-3" : "justify-between px-6"}`}>
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
            <Archive className="text-white w-5 h-5" />
          </div>
          {!isSidebarCollapsed && (
            <h1 className={`text-xl font-black ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
              MscStock
            </h1>
          )}
        </div>
        <button
          className={`md:hidden p-2 rounded-full ${isDarkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-gray-700"}`}
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-4">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
          isDarkMode={isDarkMode}
        />
        <SidebarLink
          href="/inventory"
          icon={Clipboard}
          label="Inventario"
          isCollapsed={isSidebarCollapsed}
          isDarkMode={isDarkMode}
        />
        <SidebarLink
          href="/products"
          icon={Box}
          label="Productos"
          isCollapsed={isSidebarCollapsed}
          isDarkMode={isDarkMode}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Usuarios"
          isCollapsed={isSidebarCollapsed}
          isDarkMode={isDarkMode}
        />
        <SidebarLink
          href="/settings"
          icon={Settings}
          label="Configuración"
          isCollapsed={isSidebarCollapsed}
          isDarkMode={isDarkMode}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Gastos"
          isCollapsed={isSidebarCollapsed}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* FOOTER */}
      <div className="mb-10 flex justify-center">
        <p className={`text-xs font-semibold tracking-wide transition-all duration-300
          ${isSidebarCollapsed 
            ? "-rotate-90 origin-center whitespace-nowrap mb-8" 
            : "text-center"}
          ${isDarkMode ? "text-zinc-600" : "text-gray-400"}`}
        >
          &copy; 2025 Rodolfo Roman Cruz
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
