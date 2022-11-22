import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavBar.css';

const NavBar = () => (
  <div className={classes.NavBar} >
    <Link to='/' className={classes.NavLink} > Users </Link>
    <Link to='pizza' className={classes.NavLink} > Pizza </Link>
  </div>
);

export default NavBar;