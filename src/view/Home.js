import React, { Component } from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';

class Home extends Component {
  render() {
    const { movieJumbotron, favoriteList, onAddListPressed, movies } = this.props;

    return (
      <div className="home-container">
        <Jumbotron
          movie={movieJumbotron}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />

        <Carousel title="Recomendados">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel>

        <Carousel title="Animação">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Home;
