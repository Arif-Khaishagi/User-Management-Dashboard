import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className="pagination">
      <button onClick={() => paginate('prev')} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={() => paginate('next')} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
