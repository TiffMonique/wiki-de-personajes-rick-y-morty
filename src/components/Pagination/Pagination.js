import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4 text-b "
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        nextClassName="btn btn-primary next text-white"
        previousClassName="btn btn-primary prev text-white"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={(data) => {
          console.log(data);
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
