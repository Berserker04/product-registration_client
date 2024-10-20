import { getFilter } from "@/helpers/getFilter";
// import { sendToastFromResponse } from "@/helpers/sendToast";
import { fetchClient } from "@/utils/fetchClient";

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
  const res = await fetchClient(`${URL}`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  //   sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    product: res?.data || {},
  };
};

export const setUpdateProductService = async (
  product: IProduct
): Promise<IProductResponseOnly> => {
  const res = await fetchClient(`${URL}/${product.id}`, {
    method: "PUT",
    body: JSON.stringify({ name: product.name }),
  });
  //   sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    product: res?.data || {},
  };
};

export const setDeleteProduct = async (
  id: string
): Promise<IProductResponseOnly> => {
  const res = await fetchClient(`${URL}/${id}`, { method: "DELETE" });
  //   sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    product: res?.data || {},
  };
};
