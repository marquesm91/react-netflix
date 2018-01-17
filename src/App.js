import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import './App.css'

const logoUrl = require('./icons/logo.png');
const avatarUrl = require('./icons/empty_avatar.jpg');

class NetflixApp extends React.Component {
  state = {
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
    activeItemIndex: 1,
    listPage: false,
    favoriteList: []
  }

  getMovies = () => this.state.movies.map(movie => (
    <div key={movie.id} className="movie-card" style={{ backgroundImage: `url(${movie.image})` }}>
      <div className="movie-card-info">
        <div className="movie-card-title">{movie.title}</div>
        <div className="movie-card-rating">{movie.rating}</div>
        <div className="movie-card-description">{movie.description}</div>
      </div>
      <div className="movie-card-add-button">
        <button onClick={() => this.setState({ favoriteList: [...this.state.favoriteList, movie]})}>ADD</button>
      </div>
    </div>
  ));

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
  goToListPage = () => this.setState({ listPage: true });
  goToMainPage = () => this.setState({ listPage: false });

  render() {
    return (
      <div className="app">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <img className="navbar-logo" src={logoUrl} alt='navbar-logo' onClick={this.goToMainPage}/>
          </div>
          <div className="navbar-options">
            <span onClick={this.goToMainPage} style={{ borderColor: this.state.listPage ? null : '#B8130D' }}>Início</span>
            <span onClick={this.goToListPage} style={{ borderColor: this.state.listPage ? '#B8130D' : null }}>Minha Lista</span>
          </div>
          <div className="navbar-input-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Titulo do filme"/>
          </div>
          <div className="dropdown">
            <img src={avatarUrl} alt='navbar-avatar' onClick={this.openDropDown}/>
            <div className="dropdown-content">
              <ul style={{ listStyle: 'none' }}>
                <li onClick={() => console.log('clicked!')}>Conta</li>
                <li>Sair</li>
              </ul>
            </div>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>
        {this.state.listPage ?
          <div>
            <h1>Minha Lista</h1>
            <ol className="movie-list-grid">
              {this.state.favoriteList.map(movie => (
                <li key={movie.id}>
                  <div className="movie-card" style={{ backgroundImage: `url(${movie.image})` }}>
                    <div className="movie-card-info">
                      <div className="movie-card-title">{movie.title}</div>
                      <div className="movie-card-rating">{movie.rating}</div>
                      <div className="movie-card-description">{movie.description}</div>
                    </div>
                    <div className="movie-card-add-button">
                      <button onClick={() => this.setState({ favoriteList: this.state.favoriteList.filter(l => l.id !== movie.id)})}>REMOVE</button>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        :
          <div>
            <div className="jumbotron-container" style={{ backgroundImage: `url('http://seriesemcena.com.br/wp-content/uploads/2017/09/431311.jpg')`}}>
              <div className="jumbotron-info-container">
              <div className="jumbotron-info">
                <span className="jumbotron-title">Nome</span>
                <span className="jumbotron-description">Descrição</span>
                <div className="jumbotron-buttons">
                  <button onClick={() => console.log('Assistir!')}>Assistir</button>
                  <button onClick={() => this.setState({ favoriteList: [...this.state.favoriteList, {
                    id: 4,
                    title: 'Meu Malvado Favorito',
                    'rating': 2,
                    'image': 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/yo1ef57MEPkEE4BDZKTZGH9uDcX.jpg',
                    'description': 'bla bla bla'
                  }]})}>ADD</button>
                </div>
              </div>
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-title">
                Recomendados
              </div>
              <div className="carousel-content">
                <ItemsCarousel
                  // Placeholder configurations
                  enablePlaceholder
                  numberOfPlaceholderItems={5}
                  minimumPlaceholderTime={1000}
                  placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                  // Carousel configurations
                  numberOfCards={3}
                  gutter={12}
                  showSlither={true}
                  firstAndLastGutter={true}
                  freeScrolling={false}

                  // Active item configurations
                  requestToChangeActive={this.changeActiveItem}
                  activeItemIndex={this.state.activeItemIndex}
                  activePosition={'center'}

                  chevronWidth={24}
                  rightChevron={<i className="fa fa-angle-right fa-5x" aria-hidden="true" style={{ color: '#999'}}></i>}
                  leftChevron={<i className="fa fa-angle-left fa-5x" aria-hidden="true" style={{ color: '#999'}}></i>}
                  outsideChevron={false}
                >
                  {this.getMovies()}
                </ItemsCarousel>
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-title">
                Animação
              </div>
              <div className="carousel-content">
                <ItemsCarousel
                  // Placeholder configurations
                  enablePlaceholder
                  numberOfPlaceholderItems={5}
                  minimumPlaceholderTime={1000}
                  placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                  // Carousel configurations
                  numberOfCards={3}
                  gutter={12}
                  showSlither={true}
                  firstAndLastGutter={true}
                  freeScrolling={false}

                  // Active item configurations
                  requestToChangeActive={this.changeActiveItem}
                  activeItemIndex={this.state.activeItemIndex}
                  activePosition={'center'}

                  chevronWidth={24}
                  rightChevron={<i className="fa fa-angle-right fa-5x" aria-hidden="true" style={{ color: '#999'}}></i>}
                  leftChevron={<i className="fa fa-angle-left fa-5x" aria-hidden="true" style={{ color: '#999'}}></i>}
                  outsideChevron={false}
                >
                  {this.getMovies()}
                </ItemsCarousel>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
export default NetflixApp;
