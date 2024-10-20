import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Paginate from "./Paginate";

const Table = () => {
  return (
    <div className="relative overflow-x-auto w-[800px] mt-8 shadow-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs uppercase dark:text-gray-400 bg-[#273480] text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre del producto
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha de registro
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="min-h-52">
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">IPhone 13 pro max</td>
            <td className="px-6 py-4">2024-10-18 12:12:14</td>
            <td className="px-6 py-4">
              <button
                title="edit"
                type="button"
                className="mr-1 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                <FaEdit />
              </button>
              <button
                title="delete"
                type="button"
                className="ml-1 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2
            </th>
            <td className="px-6 py-4">IPhone 14 pro max</td>
            <td className="px-6 py-4">2024-10-18 12:12:13</td>
            <td className="px-6 py-4">
              <button
                title="edit"
                type="button"
                className="mr-1 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                <FaEdit />
              </button>
              <button
                title="delete"
                type="button"
                className="ml-1 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              3
            </th>
            <td className="px-6 py-4">IPhone 15 pro max</td>
            <td className="px-6 py-4">2024-10-18 12:12:12</td>
            <td className="px-6 py-4">
              <button
                title="edit"
                type="button"
                className="mr-1 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                <FaEdit />
              </button>
              <button
                title="delete"
                type="button"
                className="ml-1 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot className="bg-[#273480] text-white">
          <tr>
            <td colSpan={4} className="pt-1 pb-3">
              <Paginate />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
