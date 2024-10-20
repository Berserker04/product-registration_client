
"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      {/* <p className="dark:text-white">{`Total de 1 1`}</p> */}
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={20}
        onPageChange={onPageChange}
        previousLabel="Atras"
        nextLabel="Siguiente"
        showIcons
      />
    </div>
  );
}

export default Paginate;