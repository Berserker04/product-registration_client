export const fetchClient = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<IResponse> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const config = {
    method: "GET",
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return res(data);
};

const res = ({ data = [], message = "", status = 200 }: IResponse) => ({
  data,
  message,
  status,
});
