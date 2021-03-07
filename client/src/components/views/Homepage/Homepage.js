import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
// const logoCake = require('../../../images/homepage/logo-cake.png');

const Component = () => (
  <div className={clsx(styles.root)}>
    <img alt='logo-cake' className={styles.logoCake} src={require('../../../images/homepage/logo-cake.png')}></img>
    <div className={styles.text}>
      <h3 className={styles.title}>Every occasion deserves a cake !</h3>
      {/* <h5 className={styles.subtitle}>Welcome to BuBa Bakery, where every cupcake is an experience, and every cake is an extravaganza! Come see what people have been raving about, and try one for yourself.</h5> */}
    </div>
  </div>
);


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
