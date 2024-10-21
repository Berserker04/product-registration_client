import { getFilter } from "@/helpers/getFilter";
import { STATUS_CODE } from "@/types/common/commonInit";
import { fetchClient } from "@/utils/fetchClient";
import toast from "react-hot-toast";

const URL = "/products";

export const getAllProductsService = async ({
  page,
  filterText,
  limit,
}: IPropsFilter): Promise<IProductResponse> => {
  const filter = getFilter(page, filterText, limit);

  const res = await fetchClient(`${URL}${filter}`, { cache: "no-store" });

  return {
    message: res.message,
    status: res.status,
    products: res.data.products,
    paginate: res.data.paginate,
  };
};

export const setProductService = async (
  name: string
): Promise<IProductResponseOnly> => {
  try {
    const res = await fetchClient(`${URL}`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    return getResponseData(res);
  } catch (error) {
    return getResponseData(error);
  }
};

export const setUpdateProductService = async (
  product: IProduct
): Promise<IProductResponseOnly> => {
  try {
    const res = await fetchClient(`${URL}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify({ name: product.name }),
    });
    return getResponseData(res);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return getResponseData(error);
  }
};

export const setDeleteProduct = async (
  id: string
): Promise<IProductResponseOnly> => {
  try {
    const res = await fetchClient(`${URL}/${id}`, { method: "DELETE" });
    return getResponseData(res);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return getResponseData(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResponseData = (res: any) => {
  if (res?.data) {
    return {
      message: res.message,
      status: res.status,
      product: res?.data || {},
    };
  }
  toast.error(res.message);
  return {
    message: res.message,
    status: STATUS_CODE.ERROR,
  };
};
