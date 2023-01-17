import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <nav className={classes.nav}>
      <div className={classes.nav_brand}>
        <h1>
          <Link to="/">Math Magicians</Link>
        </h1>
      </div>
      <ul className={classes.nav_group}>
        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.nav_link} to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.nav_link} to="/quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
