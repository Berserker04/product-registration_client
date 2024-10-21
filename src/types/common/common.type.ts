interface IPropsFilter {
  page?: number;
  filterText?: string;
  limit?: number;
}

interface IPaginate {
  currentPage: number;
  totalPages: number;
  total: number;
}

interface IResponse {
  data: any[] | any;
  message: string;
  status: string;
}

interface IStatusCode {
  SUCCESS: string;
  ERROR: string;
}
