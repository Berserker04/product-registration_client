import {
  setDeleteProduct,
  setProductService,
  setUpdateProductService,
} from "@/services/products.service";
import { useFetchAllProducts } from "@/services/useFetchProducts";
import {
  paginateInit,
  propsFilterInit,
  STATUS_CODE,
} from "@/types/common/commonInit";
import { confirmDeleteAlert } from "@/utils/sendAlerts";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useProductHook = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [products, setProducts] = useState<IProductDto[]>([]);
  const [product, setProduct] = useState<IProductDto>();
  const [paginate, setPaginate] = useState<IPaginate>(paginateInit);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<IPropsFilter>(propsFilterInit);
  const [filterText, setFilterText] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }, [currentPage, filterText, refetch]);

  return {
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
  };
};

export default useProductHook;
