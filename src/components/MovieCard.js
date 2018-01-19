import React from 'react';
import { Button } from './index';

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;

const MovieCard = ({ movie, favoriteList, onAddListPressed }) => (
  <div className="movie-card" style={{ backgroundImage: `url(${imageUrl}${size}${movie.backdrop_path})` }}>
    <div className="movie-card-container">
      <div className="movie-card-text">
        <div className="movie-card-title">{movie.title}</div>
        <div className="movie-card-info">
          <div className="movie-card-year">{movie.release_date ? movie.release_date.split('-')[0] : null}</div>
          <div className="movie-card-rating">{movie.vote_average}</div>
        </div>
        <div className="movie-card-description">{movie.overview ? movie.overview.substring(0, TRUNCATE_LENGTH) + '...' : 'Esse filme ainda não tem uma descrição.'}</div>
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
  </div>
);

export { MovieCard };
