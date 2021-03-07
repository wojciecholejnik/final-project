import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MenuButton.module.scss';

const Component = ({name, to}) => (
  <Link to={'/' + name} className={clsx(styles.root)}>
    <p >{name}</p>
  </Link>
);

Component.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MenuButton,
  // Container as MenuButton,
  Component as MenuButtonComponent,
};
