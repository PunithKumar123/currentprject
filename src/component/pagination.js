import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button 
        onClick={() =>
          paginate(currentPage === 1 ? currentPage : currentPage - 1)
        }
        className={currentPage === 1 ? "disabled" : ""}
      >
        {"<"}
      </button>
      {pageNumbers.map((number) =>
        number === 1 || number === currentPage - 1 || number === currentPage || number === currentPage + 1 || number === pageNumbers.length ? (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ) : number === currentPage + 2 || number === currentPage - 2 ? (
          <span key={number} className="ellipsis">
            ...
          </span>
        ) : null
      )}
      <button
        onClick={() =>
          paginate(
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? currentPage
              : currentPage + 1
          )
        }
        className={
          currentPage === Math.ceil(totalItems / itemsPerPage) ? "disabled" : ""
        }
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;