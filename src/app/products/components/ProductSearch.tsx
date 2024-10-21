import React from "react";
import { FaSearch } from "react-icons/fa";

interface props {
  setFilterText: (text: string) => void;
}

const ProductForm = ({ setFilterText }: props) => {
  return (
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
          onChange={({ target }) => setFilterText(target.value)}
        />
      </div>
    </form>
  );
};

export default ProductForm;
