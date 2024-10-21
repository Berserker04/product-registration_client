interface IProduct {
  id: string;
  name: string;
}

interface IProductDto extends IProduct {
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IProductList {
  products: IProductDto[];
  paginate: IPaginate;
}

interface IProductResponse {
  products?: IProductDto[];
  paginate: IPaginate;
  message: string;
  status: string;
  error?: string;
}

interface IProductResponseOnly
  extends Omit<IProductResponse, "products" | "paginate"> {
  product?: IProductDto;
}
