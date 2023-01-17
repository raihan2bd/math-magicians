import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import classes from './Layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
