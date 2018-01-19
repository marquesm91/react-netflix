import React from 'react';
import { Button } from './index';

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'original';

const Jumbotron = ({ movie, favoriteList, onAddListPressed }) => (
  <div className="jumbotron-container" style={{ backgroundImage: `url(${imageUrl}${size}${movie.backdrop_path})` }}>
    <div className="jumbotron-info-container">
      <div className="jumbotron-info">
        <span className="jumbotron-title">{movie.title}</span>
        <span className="jumbotron-description">{movie.overview ? movie.overview : 'Esse filme ainda não tem uma descrição.'}</span>
        <div className="jumbotron-sub-info">
          <div className="jumbotron-year" style={{ fontSize: '23px' }}>{movie.release_date ? movie.release_date.split('-')[0] : null}</div>
          <div className="jumbotron-rating">{movie.vote_average}</div>
        </div>
        <div className="jumbotron-buttons">
          <Button type="play" icon="play" onButtonPressed={() => console.log('Assistir!')}>
            Assistir
          </Button>
          <Button
            icon={favoriteList.filter(l => l.id === movie.id).length ? 'check' : 'plus'}
            onButtonPressed={() => onAddListPressed(movie)}
          >
            Minha Lista
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export { Jumbotron };
