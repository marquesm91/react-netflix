import React from 'react';
import { Button } from './index';

const Jumbotron = ({ movie, favoriteList, onAddListPressed }) => (
  <div className="jumbotron-container" style={{ backgroundImage: `url(${movie.image})`}}>
    <div className="jumbotron-info-container">
      <div className="jumbotron-info">
        <span className="jumbotron-title">{movie.title}</span>
        <span className="jumbotron-description">{movie.description}</span>
        <div className="jumbotron-buttons">
          <Button
            type="play"
            icon="play"
            onButtonPressed={() => console.log('Assistir!')}
          >
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
