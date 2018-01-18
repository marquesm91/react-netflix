import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar, MovieCard } from './components';
import Home from './view/Home';
import FavoriteMovies from './view/FavoriteMovies';
import Profile from './view/Profile';

import './App.css'

class NetflixCloneApp extends React.Component {
  state = {
    favoriteList: [],
    movies: [
      {
        id: 1,
        title: 'Procurando Dory',
        'rating': 4,
        'image': 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3iSCdXjDmY3DuEOUYsElu35vQU6.jpg',
        'description': 'bla bla bla'
      },
      {
        id: 2,
        title: 'Procurando Nemo',
        'rating': 3,
        'image': 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/n2vIGWw4ezslXjlP0VNxkp9wqwU.jpg',
        'description': 'bla bla bla'
      },
      {
        id: 3,
        title: 'Vida de Inseto',
        'rating': 5,
        'image': 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/gOvW00ZMoEiyRwXVkHPfBictPAl.jpg',
        'description': 'bla bla bla'
      },
      {
        id: 4,
        title: 'Meu Malvado Favorito',
        'rating': 2,
        'image': 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/yo1ef57MEPkEE4BDZKTZGH9uDcX.jpg',
        'description': 'bla bla bla'
      }
    ],
    movieJumbotron: {
      id: 99,
      title: 'The Big Bang Theory',
      rating: 5,
      image: 'http://seriesemcena.com.br/wp-content/uploads/2017/09/431311.jpg',
      description: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    }
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

  render() {
    return (
      <div className="app">
        <NavBar />
        <Route exact path='/' render={() => (
          <Home
            movies={this.state.movies}
            movieJumbotron={this.state.movieJumbotron}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
        <Route path='/favorites' render={() => (
          <FavoriteMovies
            title="Minha Lista"
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
        <Route path='/profile' render={() => (
          <Profile title="Informações do Perfil" />
        )} />
      </div>
    )
  }
}
export default NetflixCloneApp;
