"use client";

import Table from "@/components/table/Table";
import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import { ModalView } from "@/components/modal/Modal";
import ProductSearch from "./components/ProductSearch";
import {
  setDeleteProduct,
  setProductService,
  setUpdateProductService,
} from "@/services/products.service";
import { confirmDeleteAlert } from "@/utils/sendAlerts";
import toast from "react-hot-toast";
import {
  paginateInit,
  propsFilterInit,
  STATUS_CODE,
} from "@/types/common/commonInit";

import { useFetchAllProducts } from "@/services/useFetchProducts";

const ProductPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [products, setProducts] = useState<IProductDto[]>([]);
  const [product, setProduct] = useState<IProductDto>();
  const [paginate, setPaginate] = useState<IPaginate>(paginateInit);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<IPropsFilter>(propsFilterInit);
  const [filterText, setFilterText] = useState<string>("");

  const { isLoading, data, refetch }: any = useFetchAllProducts(filter);

  const saveHandler = async (product: IProduct) => {
    const response = await setProductService(product.name);

    if (response.status === STATUS_CODE.SUCCESS) {
      toast.success("Producto registrado");
      refetch();
      setOpenModal(false);
    }
  };

  const editHandler = async (product: IProductDto) => {
    setProduct(product);
    setOpenModalEdit(true);
  };

  const updateHandler = async (product: IProduct) => {
    const response = await setUpdateProductService(product);
    if (response.status === STATUS_CODE.SUCCESS) {
      toast.success("Producto actualizado");
      refetch();
      setOpenModalEdit(false);
    }
  };

  const deleteHandler = async (id: string) => {
    const sendDelete = async (id: string) => {
      const response = await setDeleteProduct(id);
      if (response.status === STATUS_CODE.SUCCESS) {
        toast.success("Producto eliminado");
        refetch();
      }
    };

    confirmDeleteAlert({
      fn: sendDelete,
      data: id,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      setProducts(data?.products);
      setPaginate(data?.paginate);
    }
  }, [isLoading, data]);

  useEffect(() => {
    setFilter({
      page: currentPage,
      filterText: filterText,
    });
    setTimeout(() => {
      refetch();
    }, 100);
  }, [currentPage, filterText]);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <button
        onClick={() => setOpenModal(true)}
        type="button"
        className="w-[500px] text-white bg-[#273480] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-lg px-5 py-2.5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
