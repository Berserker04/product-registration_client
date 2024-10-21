"use client";

import Image from "next/image";
import React from "react";

import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const patchName = usePathname();
  return (
    <nav className="bg-white border-gray-200 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-14 w-28 sm:w-32 md:w-40"
              alt="Flowbite Logo"
            />
          </Link>
          <span className="self-center text-2xl font-semibold whitespace-nowrap color-[#273480]">
            {patchName == "/products" && "Registro de productos"}
          </span>
        </div>
      </div>
    </nav>
  );
};
