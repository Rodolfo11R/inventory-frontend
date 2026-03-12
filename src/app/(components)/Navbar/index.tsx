"use client";

import React from "react";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setSideBarCollapsed } from "@/state";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleDarkMode = () => dispatch(setIsDarkMode(!isDarkMode));
  const toggleSidebar = () => dispatch(setSideBarCollapsed(!isSidebarCollapsed));

  return (
    <div className="flex justify-between items-center w-full mb-7 gap-4">

      {/* LADO IZQUIERDO: Toggle Sidebar + Barra de Búsqueda */}
      <div className="flex items-center gap-3 flex-1">

        {/* Botón colapsar Sidebar */}
        <button
          onClick={toggleSidebar}
          className={`p-2.5 rounded-full flex-shrink-0 transition-all
            ${isDarkMode
              ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white"
              : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
            }`}
        >
          <Menu size={20} />
        </button>

        {/* Barra de Búsqueda */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search
              size={18}
              className={isDarkMode ? "text-zinc-500" : "text-gray-400"}
            />
          </div>
          <input
            type="text"
            placeholder="Buscar en el inventario..."
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all
              ${isDarkMode
                ? "bg-zinc-800 border-zinc-700 text-gray-100 placeholder-zinc-500 focus:border-blue-500"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 shadow-sm"
              }`}
          />
        </div>
      </div>

      {/* LADO DERECHO: Título + Toggle Modo Oscuro */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Título */}
        <h2 className={`hidden md:block text-lg font-extrabold tracking-tight transition-colors
          ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          MscStock{" "}
          <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
            Inventory
          </span>
        </h2>

        {/* Botón de Notificaciones */}
        <button
          className={`relative p-2.5 rounded-full transition-all shadow-sm flex-shrink-0
            ${isDarkMode
              ? "bg-zinc-800 hover:bg-zinc-700 text-gray-300"
              : "bg-gray-100 hover:bg-blue-100 text-gray-600"
            }`}
        >
          <Bell size={20} />
          {/* Badge contador */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
            3
          </span>
        </button>

        {/* Botón Modo Oscuro */}
        <button
          onClick={toggleDarkMode}
          className={`p-2.5 rounded-full transition-all shadow-sm flex-shrink-0
            ${isDarkMode
              ? "bg-zinc-800 hover:bg-zinc-700"
              : "bg-gray-100 hover:bg-blue-100"
            }`}
        >
          {isDarkMode ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-gray-600" size={20} />
          )}
        </button>

        {/* DIVISOR VERTICAL */}
        <div className={`w-px h-7 mx-1 ${isDarkMode ? "bg-zinc-700" : "bg-gray-200"}`} />

        {/* PERFIL DE USUARIO - Clickeable a /settings */}
        <Link href="/settings">
          <div className={`flex items-center gap-3 cursor-pointer rounded-xl px-2 py-1 transition-all
            ${isDarkMode ? "hover:bg-zinc-800" : "hover:bg-gray-100"}`}>
            {/* Imagen de perfil */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent flex-shrink-0">
              <Image
                src="/yo.png"
                alt="Perfil de usuario"
                fill
                className="object-cover"
              />
            </div>
            {/* Nombre del usuario */}
            <div className="hidden md:flex flex-col leading-tight">
              <span className={`text-sm font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                Pepe Pecas
              </span>
              <span className={`text-xs ${isDarkMode ? "text-zinc-500" : "text-gray-400"}`}>
                Administrador
              </span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
