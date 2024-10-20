interface IPropsFilter {
  page?: number;
  filterText?: string;
  limit?: number;
}

interface IPropsFilterType {
  type: "page" | "filterText";
  value: string | number;
}

interface IPaginate {
  currentPage: number;
  totalPages: number;
  total: number;
}

interface IToast {
  type: "success" | "warning" | "error";
  message: string;
}

interface IResponse {
  data: any[] | any;
  message: string;
  status: number;
}

interface IStatusCode {
  SUCCESS: number;
  CREATED: number;
  ERROR: number;
  BAD_REQUEST: number;
  UNAUTHORIZED: number;
  FORBIDDEN: number;
  NOT_FOUND: number;
  CONFLICT: number;
}
