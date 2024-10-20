// import { Paginate } from "@/components/table/Paginate";
// import { TableProduct } from "@/components/table/TableProduct";
import Table from "@/components/table/Table";
import React from "react";
import { FaSearch } from "react-icons/fa";

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <button
        type="button"
        className="w-[500px] text-white bg-[#273480] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-lg px-5 py-2.5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Añadir producto
      </button>
      <form className="mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch />
          </div>
          <input
            title="filter"
            type="search"
            id="search-product-icon"
            className="w-[500px] shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar producto..."
          />
        </div>
      </form>

      <Table />
    </div>
  );
};

export default ProductPage;
