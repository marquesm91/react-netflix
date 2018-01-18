import React, { Component } from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';

class Home extends Component {
  render() {
    const {
      movieJumbotron,
      favoriteList,
      onAddListPressed,
      comedyMovies,
      animationMovies,
      horrorMovies,
      scifiMovies,
      lastestMovies
    } = this.props;

    return (
      <div className="home-container">
        {movieJumbotron ? <Jumbotron
          movie={movieJumbotron}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        /> : null}

        {lastestMovies.length ? <Carousel title="Nos Cinemas">
          {lastestMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel> : null}

        {comedyMovies.length ? <Carousel title="Comédia">
          {comedyMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel> : null}

        {scifiMovies.length ? <Carousel title="Ficção Científica">
          {scifiMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel> : null}

        {animationMovies.length ? <Carousel title="Animação">
          {animationMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel> : null}

        {horrorMovies.length ? <Carousel title="Terror">
          {horrorMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteList={favoriteList}
              onAddListPressed={movie => onAddListPressed(movie)}
            />
          ))}
        </Carousel> : null}
      </div>
    );
  }
}

export default Home;
