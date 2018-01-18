import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="profile-container">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Profile;
