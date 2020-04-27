import React from 'react';

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  render() {
    const { movie, removeHandler, addMovieWillWatch, removeMovieWillWatch } = this.props;
    
    const { id, title, vote_average, poster_path, backdrop_path } = movie; 

    return (
      <article className='card'>
        <figure className='card-img-top'>
          <img 
            className='w-100'
            src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`} 
            alt={`Movie ${title}`} 
          />
        </figure>
        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          <p className='mb-4'>Rating {vote_average}</p>
          <div className='d-flex justify-content-end align-items-center mb-2'>
            {this.state.willWatch ? 
            <button 
              type='button' 
              className='btn btn-success mr-2'
              onClick={() => {
                this.setState({
                  willWatch: false
                });
                return removeMovieWillWatch(movie.id)
              }}
            >Remove will watch</button> : 
            <button 
              type='button' 
              className='btn btn-secondary mr-2'
              onClick={() => {
                this.setState({
                  willWatch: true
                });
                return addMovieWillWatch(movie);
              }}
            >Add will watch</button>}
            <button 
              type='button' 
              className='btn btn-text'
              onClick={() => removeHandler(id)}
            >Remove movie</button>
          </div>
        </div>
      </article>
    );
  }
}

export default MovieItem;