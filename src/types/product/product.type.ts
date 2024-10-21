interface IProduct {
  id: string;
  name: string;
}

interface IProductDto extends IProduct {
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IProductResponse {
  products?: IProductDto[];
  paginate: IPaginate;
  message: string;
  status: string;
  error?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IProductResponseOnly
  extends Omit<IProductResponse, "products" | "paginate"> {
  product?: IProductDto;
}
