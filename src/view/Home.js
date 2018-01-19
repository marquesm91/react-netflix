import React from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';

const Home = ({ movieJumbotron, favoriteList, onAddListPressed, movies }) => (
  <div className="home-container">
    <Jumbotron
      movie={movieJumbotron}
      favoriteList={favoriteList}
      onAddListPressed={movie => onAddListPressed(movie)}
    />

    <Carousel title="Nos Cinemas">
      {movies.lastestMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Os melhores para te dar aquele susto">
      {movies.horrorMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Para chorar de rir">
      {movies.comedyMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Filmes que farão você viajar em outro mundo">
      {movies.scifiMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Animações para relaxar sua tarde">
      {movies.animationMovies.map(movie => (
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

export default Home;
