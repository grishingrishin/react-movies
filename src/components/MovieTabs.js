import React from 'react';

const movies = [
  {
    movie: 'Popularity desc',
    sort: 'popularity.desc',
  },
  {
    movie: 'Revenue',
    sort: 'revenue.desc',
  },
  {
    movie: 'Vote average',
    sort: 'vote_average.desc',
  },
]

const MovieTabs = ({ sort, changeHandler }) => {
  const getClassByLink = value => {
    return `nav-link ${sort === value ? 'active' : ''}`
  }
  return (
    <ul className='tabs nav nav-pills'>
      {movies.map((item, index) => (
        <li className='nav-item' key={index}>
        <span
          className={getClassByLink(item.sort)}
          onClick={() => changeHandler(item.sort)}
        >{item.movie}</span>
      </li>
      ))}
    </ul>
  );
}

export default MovieTabs;