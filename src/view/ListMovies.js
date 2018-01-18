import React from 'react';
import { MovieCard } from '../components';

const ListMovies = ({ movies, favoriteList, title, onAddListPressed }) => (
  <div className="movie-list-container">
    <h1>{title}</h1>
    <ol className="movie-list-grid">
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard
            movie={movie}
            favoriteList={favoriteList}
            onAddListPressed={movie => onAddListPressed(movie)}
          />
        </li>
      ))}
    </ol>
  </div>
);

export default ListMovies;
