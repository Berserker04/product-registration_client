"use client";

import Table from "@/components/table/Table";
import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import { ModalView } from "@/components/modal/Modal";
import ProductSearch from "./components/ProductSearch";
import { setProductService } from "@/services/products.service";

const ProductPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const saveHandler = async (product: IProduct) => {
    await setProductService(product.name);
    setOpenModal(false);
  };
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <button
        onClick={() => setOpenModal(true)}
        type="button"
        className="w-[500px] text-white bg-[#273480] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-lg px-5 py-2.5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Añadir producto
      </button>

      <ProductSearch />

      <Table />

      <ModalView openModal={openModal} setOpenModal={setOpenModal}>
        <ProductForm
          title="Registrar nuevo producto"
          saveHandler={saveHandler}
        />
      </ModalView>
    </div>
  );
};

export default ProductPage;
