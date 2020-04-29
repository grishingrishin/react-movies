import React from 'react';

const Pagination = ({ page, totalPages, perPage, onChangePage }) => {
  let pages = [];

  for (let i = 1; i <= totalPages; i++) pages.push(i);

  const indexOfLastPage = (page + (perPage - 1)) >= totalPages ? totalPages : page + (perPage - 1);
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentPage = pages.slice(indexOfFirstPage, indexOfLastPage);

  const handleMoveLeft = () => onChangePage(page - 1);

  const handleMoveRight = () => onChangePage(page + 1);

  const handleClick = page => e => {
    return onChangePage(page);
  }

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {page === 1 ?
        <li className='page-item disabled'>
          <span className='page-link'>Previous</span>
        </li> :
        <li className='page-item'>
          <span className='page-link' onClick={handleMoveLeft}>Previous</span>
        </li>}
        {currentPage.map((page, index) => (
          <li className='page-item' key={index}>
            <span className='page-link' onClick={handleClick(page)}>{page}</span>
          </li>
        ))}
        {page === totalPages ?
        <li className='page-item disabled'>
          <span className='page-link'>Next</span>
        </li> :
        <li className='page-item'>
          <span className='page-link' onClick={handleMoveRight}>Next</span>
        </li>}
      </ul>
    </nav>
  )
}

export default Pagination;