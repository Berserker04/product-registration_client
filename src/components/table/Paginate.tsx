"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

interface props {
  paginate: IPaginate;
}

const Paginate = ({ paginate }: props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex flex-col  overflow-x-auto sm:justify-center sm:items-center justify-center items-center">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={1}
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
