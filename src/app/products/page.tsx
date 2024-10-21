"use client";

import Table from "@/components/table/Table";
import React from "react";
import ProductForm from "./components/ProductForm";
import { ModalView } from "@/components/modal/Modal";
import ProductSearch from "./components/ProductSearch";
import useProductHook from "./hooks/useProductHook";

const ProductPage = () => {
  const {
    openModal,
    openModalEdit,
    products,
    product,
    paginate,
    setCurrentPage,
    setFilterText,
    saveHandler,
    editHandler,
    updateHandler,
    deleteHandler,
    setOpenModal,
    isLoading,
    currentPage,
    setOpenModalEdit,
  } = useProductHook();

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <button
        onClick={() => setOpenModal(true)}
        type="button"
        className="w-full sm:w-[300px] md:w-[500px] text-white bg-[#273480] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-lg px-5 py-2.5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Añadir producto
      </button>

      <ProductSearch setFilterText={setFilterText} />

      <Table
        products={products}
        isLoading={isLoading}
        paginate={paginate}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <ModalView openModal={openModal} setOpenModal={setOpenModal}>
        <ProductForm
          title="Registrar nuevo producto"
          saveHandler={saveHandler}
        />
      </ModalView>
      <ModalView openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
        <ProductForm
          product={product}
          title="Actualizar producto"
          saveHandler={updateHandler}
        />
      </ModalView>
    </div>
  );
};

export default ProductPage;
