import React, { Component } from 'react';

import classes from './ContainerCommon.css';

class Users extends Component {
  render () {
    return (
      <div className={classes.Container} >
        <h1> The Users </h1>
        <p> Welcome to Pizza app! </p>
      </div>
    );
  }
}

export default Users;