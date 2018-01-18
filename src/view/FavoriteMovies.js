import React from 'react';
import { MovieCard } from '../components';

const FavoriteMovies = ({ favoriteList, title, onAddListPressed }) => (
  <div className="movie-list-container">
    <h1>{title}</h1>
    <ol className="movie-list-grid">
      {favoriteList.map(movie => (
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

export default FavoriteMovies;
