import Image from "next/image";
import React from "react";

import logo from "@/assets/images/logo.png";

export const Header = () => {
  return (
    <nav className="bg-white border-gray-200 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={logo}
            className="h-14"
            alt="Flowbite Logo"
            width={150}
            height={150}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#273480]">
            Registro de productos
          </span>
        </a>
      </div>
    </nav>
  );
};
