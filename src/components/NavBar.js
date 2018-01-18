import React, { Component } from 'react';
import { Logo, Menu, Input, Avatar } from './index';
import * as Movies from '../api/Movies';

class NavBar extends Component {
  state = {
    page: 'início'
  }

  changeMenuMarkerHandler = (page) => this.setState({ page });

  doSearch = query => {
    Movies.search(query).then(res => console.log(res));
  }

  render() {
    return (
      <div className="navbar-container">
        <Logo changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)} />
        <Menu
          page={this.state.page}
          changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)}
        />
        <Input
          placeholder="Título do filme"
          onEnterPressed={query => this.doSearch(query)}
        />
        <Avatar />
      </div>
    );
  }
}

export { NavBar };
