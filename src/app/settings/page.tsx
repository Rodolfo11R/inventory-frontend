"use client";

import React from "react";
import { useAppSelector } from "@/app/redux";
import { User, Shield, Bell, Palette, Database, ChevronRight } from "lucide-react";
import Image from "next/image";

const settingsSections = [
  {
    icon: User,
    title: "Información Personal",
    description: "Nombre, correo electrónico y datos de contacto",
  },
  {
    icon: Shield,
    title: "Seguridad y Privacidad",
    description: "Contraseña, autenticación y permisos de acceso",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description: "Configurar alertas de inventario y avisos del sistema",
  },
  {
    icon: Palette,
    title: "Apariencia",
    description: "Tema, modo oscuro y preferencias visuales",
  },
  {
    icon: Database,
    title: "Sistema e Inventario",
    description: "Configuración general del sistema de inventario",
  },
];

const Settings = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="max-w-3xl mx-auto">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className={`text-3xl font-black tracking-tight ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
          Configuración
        </h1>
        <p className={`mt-1 text-sm ${isDarkMode ? "text-zinc-500" : "text-gray-500"}`}>
          Administra tu cuenta y preferencias del sistema
        </p>
      </div>

      {/* TARJETA DE PERFIL */}
      <div className={`flex items-center gap-5 p-6 rounded-2xl mb-8 border transition-all
        ${isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-100 shadow-sm"}`}>
        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-2 flex-shrink-0">
          <Image
            src="/yo.png"
            alt="Perfil de usuario"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className={`text-xl font-extrabold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            Pepe Pecas
          </span>
          <span className={`text-sm font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
            Administrador del Sistema
          </span>
          <span className={`text-xs mt-1 ${isDarkMode ? "text-zinc-500" : "text-gray-400"}`}>
            rodolfo.roman@itz.edu.mx
          </span>
        </div>
        <div className="ml-auto">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md">
            Editar Perfil
          </button>
        </div>
      </div>

      {/* SECCIONES DE CONFIGURACIÓN */}
      <div className={`rounded-2xl border overflow-hidden divide-y transition-all
        ${isDarkMode
          ? "bg-zinc-900 border-zinc-800 divide-zinc-800"
          : "bg-white border-gray-100 divide-gray-100 shadow-sm"
        }`}>
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.title}
              className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all group
                ${isDarkMode ? "hover:bg-zinc-800" : "hover:bg-gray-50"}`}
            >
              <div className={`p-2.5 rounded-xl flex-shrink-0
                ${isDarkMode ? "bg-zinc-800 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                <Icon size={20} />
              </div>
              <div className="flex flex-col flex-1">
                <span className={`text-sm font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                  {section.title}
                </span>
                <span className={`text-xs ${isDarkMode ? "text-zinc-500" : "text-gray-400"}`}>
                  {section.description}
                </span>
              </div>
              <ChevronRight
                size={18}
                className={`flex-shrink-0 transition-transform group-hover:translate-x-1
                  ${isDarkMode ? "text-zinc-600" : "text-gray-300"}`}
              />
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default Settings;
