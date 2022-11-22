import React from 'react';

import classes from './PizzaImage.css';
import PizzaImg from '../../assets/images/pizza.jpg';

const pizzaImage = (props) => (
  <div className={classes.PizzaImage} >
    <img src={PizzaImg} alt="pizza-image" className={classes.PizzaImg} draggable={false} />
  </div>
);

export default pizzaImage;