import React, { Component } from 'react';

class Input extends Component {
  state = {
    query: ''
  }

  onChangeHandler = event => this.setState({ query: event.target.value });

  onKeyPressHandler = event => {
    if (event.key === 'Enter' && this.state.query) {
      this.props.onEnterPressed(this.state.query)
    }
  }

  render() {
    return (
      <div className="navbar-input-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.query}
          onKeyPress={this.onKeyPressHandler}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}

export { Input };
