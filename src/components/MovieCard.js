import React from 'react';
import { Button } from './index';

const MovieCard = ({ movie, favoriteList, onAddListPressed }) => (
  <div className="movie-card" style={{ backgroundImage: `url(${movie.image})` }}>
    <div className="movie-card-info">
      <div className="movie-card-title">{movie.title}</div>
      <div className="movie-card-rating">{movie.rating}</div>
      <div className="movie-card-description">{movie.description}</div>
    </div>
    <div className="movie-card-button-container">
      <Button
        buttonStyleOptions="round-button"
        iconStyleOptions="fa-fw"
        icon={favoriteList.filter(l => l.id === movie.id).length ? 'check' : 'plus'}
        onButtonPressed={() => onAddListPressed(movie)}
      />
    </div>
  </div>
);

export { MovieCard };
