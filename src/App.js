import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar, MovieCard } from './components';
import Home from './view/Home';
import ListMovies from './view/ListMovies';
import Profile from './view/Profile';
import * as Movies from './api/Movies';

import './App.css'

class NetflixCloneApp extends React.Component {
  state = {
    favoriteList: [],
    movieJumbotron: {},
    comedyMovies: [],
    animationMovies: [],
    scifiMovies: [],
    horrorMovies: [],
    lastestMovies: [],
    fetchedMovies: []
  }

  componentDidMount() {
    Movies.getMostPopular().then(res => this.setState({ movieJumbotron: res }));
    Movies.getInTheater().then(res => this.setState({ lastestMovies: res.results }));
    Movies.getByGenrer('Comédia').then(res => this.setState({ comedyMovies: res.results }));
    Movies.getByGenrer('Animação').then(res => this.setState({ animationMovies: res.results }));
    Movies.getByGenrer('Ficção científica').then(res => this.setState({ scifiMovies: res.results }));
    Movies.getByGenrer('Terror').then(res => this.setState({ horrorMovies: res.results }));
  }

  getMovies = () => this.state.movies.map(movie => (
    <MovieCard
      key={movie.id}
      movie={movie}
      favoriteList={this.state.favoriteList}
      onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
    />
  ));

  toggleMovieInFavoriteList = movie => {
    const { favoriteList } = this.state;
    let index = favoriteList.map(l => l.id).indexOf(movie.id);

    if (index === -1) {
      this.setState({ favoriteList: [...favoriteList, movie] });
    } else {
      this.setState({ favoriteList: [
        ...favoriteList.slice(0, index),
        ...favoriteList.slice(index + 1)
      ]});
    }

  }

  onSearchMoviesHandler = fetchedMovies => {
    this.setState({ fetchedMovies })
    console.log(this.props)
  }

  render() {
    return (
      <div className="app">
        <NavBar onSearchMovies={this.onSearchMoviesHandler} />
        <Route exact path='/' render={() => (
          <Home
            lastestMovies={this.state.lastestMovies}
            comedyMovies={this.state.comedyMovies}
            animationMovies={this.state.animationMovies}
            scifiMovies={this.state.scifiMovies}
            horrorMovies={this.state.horrorMovies}
            movies={this.state.movies}
            movieJumbotron={this.state.movieJumbotron}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
        <Route path='/favorites' render={() => (
          <ListMovies
            title="Minha Lista"
            movies={this.state.favoriteList}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
        <Route path='/profile' render={() => (
          <Profile title="Informações do Perfil" />
        )} />
        <Route path='/search' render={() => (
          <ListMovies
            title="Resultados da Pesquisa"
            movies={this.state.fetchedMovies}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
      </div>
    )
  }
}
export default NetflixCloneApp;
