/* eslint-disable @typescript-eslint/no-unused-vars */
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] | any;
  message: string;
  status: string;
}

interface IStatusCode {
  SUCCESS: string;
  ERROR: string;
}
