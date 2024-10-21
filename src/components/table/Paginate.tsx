"use client";

import { paginateInit } from "@/types/common/commonInit";
import { Pagination } from "flowbite-react";

interface props {
  paginate: IPaginate;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Paginate = ({
  paginate = paginateInit,
  currentPage,
  setCurrentPage,
}: props) => {
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex flex-col  overflow-x-auto sm:justify-center sm:items-center justify-center items-center">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={paginate.totalPages}
        onPageChange={onPageChange}
        previousLabel="Atras"
        nextLabel="Siguiente"
        showIcons
      />
      <p className="dark:text-white">{`Total de productos ${paginate?.total}`}</p>
    </div>
  );
};

export default Paginate;
