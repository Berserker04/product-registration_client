"use client";

import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Paginate from "./Paginate";
import { useFetchAllProducts } from "@/services/useFetchProducts";
import {
  setDeleteProduct,
  setProductService,
  setUpdateProductService,
} from "@/services/products.service";
import moment from "moment";
import { paginateInit } from "@/types/common/commonInit";
import { ModalView } from "../modal/Modal";
import ProductForm from "@/app/products/components/ProductForm";

const Table = () => {
  const [products, setProducts] = useState<IProductDto[]>([]);
  const [product, setProduct] = useState<IProductDto>();
  const [paginate, setPaginate] = useState<IPaginate>(paginateInit);

  const [openModal, setOpenModal] = useState(false);

  const getDatatime = (product: IProductDto) => {
    return moment(product.createdAt.toString()).format("DD/MM/YYYY hh:mm:ss");
  };

  const editHandler = async (product: IProductDto) => {
    setProduct(product);
    setOpenModal(true);
  };

  const deleteHandler = async (id: string) => {
    const response = await setDeleteProduct(id);

    if (response.status === 200 || response.status === 201) {
      // filterSeasons();
    }
  };

  const { isLoading, data, refetch }: any = useFetchAllProducts({});

  const saveHandler = async (product: IProduct) => {
    await setUpdateProductService(product);
    setOpenModal(false);
  };

  useEffect(() => {
    if (!isLoading) {
      setProducts(data?.products);
      setPaginate(data?.paginate);
    }
  }, [isLoading]);

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
          {products.map((product, i: number) => (
            <tr key={product.id} className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {i + 1}
              </th>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4"> {getDatatime(product)}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => editHandler(product)}
                  title="edit"
                  type="button"
                  className="mr-1 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteHandler(product.id)}
                  title="delete"
                  type="button"
                  className="ml-1 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {isLoading && (
            <tr className="bg-white dark:bg-gray-800">
              <td colSpan={4} className="px-6 py-4 text-center">
                Cargando productos...
              </td>
            </tr>
          )}
          {!isLoading && products.length == 0 && (
            <tr className="bg-white dark:bg-gray-800">
              <td colSpan={4} className="px-6 py-4 text-center">
                No hay productos registrados
              </td>
            </tr>
          )}
        </tbody>
        <tfoot className="bg-[#273480] text-white">
          <tr>
            <td colSpan={4} className="pt-1 pb-1">
              <Paginate paginate={paginate} />
            </td>
          </tr>
        </tfoot>
      </table>
      <ModalView openModal={openModal} setOpenModal={setOpenModal}>
        <ProductForm
          product={product}
          title="Actualizar producto"
          saveHandler={saveHandler}
        />
      </ModalView>
    </div>
  );
};

export default Table;
