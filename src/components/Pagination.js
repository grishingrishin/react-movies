import React from 'react';

const Pagination = ({ currentPage, totalPages, changePageHandler }) => {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {currentPage === 1 ?
        <li className='page-item disabled'>
          <span className='page-link'>Previous</span>
        </li> :
        <li className='page-item'>
          <span className='page-link' onClick={() => changePageHandler(currentPage - 1)}>Previous</span>
        </li>}
        <li className='page-item'>
          <span className='page-link' onClick={() => changePageHandler()}>1</span>
        </li>
        <li className='page-item'>
          <span className='page-link' onClick={() => changePageHandler()}>2</span>
        </li>
        <li className='page-item'>
          <span className='page-link' onClick={() => changePageHandler()}>3</span>
        </li>
        {currentPage === totalPages ?
        <li className='page-item disabled'>
          <span className='page-link'>Next</span>
        </li> :
        <li className='page-item'>
          <span className='page-link' onClick={() => changePageHandler(currentPage + 1)}>Next</span>
        </li>} 
      </ul>
    </nav>
  );
}

export default Pagination;