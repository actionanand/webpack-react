import React, { Component } from 'react';

import PizzaImage from '../components/PizzaImage/PizzaImage';
import classes from './ContainerCommon.css';


class Pizza extends Component {
  render () {
    return (
      <div className={classes.Container} >
        <h1> Pizza </h1>
        <PizzaImage />
      </div>
    );
  }
}

export default Pizza;