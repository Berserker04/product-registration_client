export const getFilter = (
  page: number | undefined,
  filterText: string = "",
  limit: number | undefined
) => {
  let filter = "";
  if (page || filterText || limit) {
    filter += "?s";
  }
  filter += page ? `&page=${page}` : "";
  filter += filterText ? `&filter=${filterText}` : "";
  filter += limit ? `&limit=${limit}` : "";

  return filter;
};
