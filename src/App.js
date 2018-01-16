import React from 'react';
import CarouselSlider from 'react-slick';
import './App.css'

const logoUrl = require('./icons/logo.png');
const avatarUrl = require('./icons/empty_avatar.jpg');
const jumbotronUrl = require('./icons/jumbotron.jpg');

class NetflixApp extends React.Component {
  state = {
    movies: [
      {title: 'Dory'},
      {title: 'Procurando Nemo'},
      {title: 'Pixar'},
      {title: 'Meu Malvado Favorito'},
    ]
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    return (
      <div className="app">
        <div className="navbar-container">
          <img src={logoUrl} alt='navbar-logo' />
          <div className="navbar-list-field">
            <i className="fa fa-list" aria-hidden="true"></i>
            <span>Minha Lista</span>
          </div>
          <div className="navbar-input-field">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" palceholder="Título do filme"/>
          </div>
          <div className="dropdown">
            <img src={avatarUrl} alt='navbar-avatar' onClick={this.openDropDown}/>
            <div className="dropdown-content">
              <ul style={{ listStyle: 'none' }}>
                <li onClick={() => console.log('clicked!')} >Perfil</li>
                <li>Sair</li>
              </ul>
            </div>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>

        <div className="bigpic">
          <span className="bigletters">Nome</span>
          <span className="bigletters">Autor</span>
          <span className="bigletters">Descrição</span>
        </div>

        <CarouselSlider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
          <div><h3>10</h3></div>
          <div><h3>11</h3></div>
          <div><h3>12</h3></div>
          <div><h3>13</h3></div>
          <div><h3>14</h3></div>
          <div><h3>15</h3></div>
          <div><h3>16</h3></div>
          <div><h3>17</h3></div>
        </CarouselSlider>
      </div>
    )
  }
}
export default NetflixApp;
