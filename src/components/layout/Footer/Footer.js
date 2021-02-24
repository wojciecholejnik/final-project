import React from 'react';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={clsx(styles.root)}>
    <a href='http://www.facebook.com'><i className="fab fa-facebook-square"></i></a>
    <a href='http://www.instagram.com'><i className="fab fa-instagram"></i></a>
    <a href='http://www.twitter.com'><i className="fab fa-twitter"></i></a>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
