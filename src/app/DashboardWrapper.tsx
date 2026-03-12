"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar/index";
import Sidebar from "@/app/(components)/Sidebar/index";
import StoreProvider, { useAppSelector } from "@/app/redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? "dark" : ""} flex bg-gray-50 text-gray-900 w-full min-h-screen text-sm`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full min-h-screen py-7 px-9
          ${isSidebarCollapsed ? "ml-16 md:ml-24" : "ml-64 md:ml-72"}
          ${isDarkMode ? "bg-[#18181b] text-gray-100" : "bg-gray-50 text-gray-900"}
          transition-all duration-300`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}
