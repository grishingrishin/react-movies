import React, { Component } from 'react';
import MovieItem from './components/MovieItem';
import MovieTabs from './components/MovieTabs';
import Pagination from './components/Pagination';
import { API_URL, API_KEY_3 } from './utils/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviewsWillWatch: [],
      sortBy: 'popularity.desc',
      currentPage: '',
      totalPages: ''
    };
  }

  removeMovie = id => {
    const updateMovies = this.state.movies.filter(item => item.id !== id);
    const updateMoviesWillWatch = this.state.moviewsWillWatch.filter(item => item.id !== id);

    return this.setState({
      movies: updateMovies,
      moviewsWillWatch: updateMoviesWillWatch
    });
  }

  addMovieWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviewsWillWatch];
    updateMoviesWillWatch.push(movie);

    return this.setState({
      moviewsWillWatch: updateMoviesWillWatch
    });
  }

  removeMovieWillWatch = id => {
    const updateMoviesWillWatch = this.state.moviewsWillWatch.filter(movie => movie.id !== id);

    return this.setState({
      moviewsWillWatch: updateMoviesWillWatch
    });
  }

  updateSortBy = value => {
    return this.setState({
      sortBy: value
    });
  }

  getMovies = () => {
    return fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}&page=${this.state.currentPage}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return this.setState({
          movies: data.results,
          currentPage: data.page,
          totalPages: data.total_pages
        })
      });
  }

  changePageHandler = page => {
    return this.setState({
      currentPage: page
    });
  }

  componentDidMount() {
    return this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy || prevState.currentPage !== this.state.currentPage) {
      return this.getMovies();
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <div className='row mb-4'>
              <div className='col-12'>
                <MovieTabs sort={this.state.sortBy} changeHandler={this.updateSortBy} />
              </div>
            </div>
            <div className='row'>
              {this.state.movies.map(movie => (
                <div className='col-6 mb-4' key={movie.id} >
                  <MovieItem 
                    movie={movie}
                    removeHandler={this.removeMovie}
                    addMovieWillWatch={this.addMovieWillWatch}
                    removeMovieWillWatch={this.removeMovieWillWatch}
                  />
                </div>
              ))}
            </div>
            <div className='row'>
              <div className='col-12'>
                <Pagination 
                  currentPage={this.state.currentPage}
                  totalPages={this.state.totalPages}
                  changePageHandler={this.changePageHandler} 
                />
              </div>
            </div>
          </div>
          <div className='col-3'>
            <p>Will Watch: {this.state.moviewsWillWatch.length}</p>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;