import { useQuery } from "@tanstack/react-query";
import { getAllProductsService } from "./products.service";

const limit = 10;

export const useFetchAllProducts = ({ page, filterText }: IPropsFilter) => {
  return useQuery({
    queryKey: ["allProducts", limit],
    queryFn: () => getAllProductsService({ page, filterText }),
  });
};
