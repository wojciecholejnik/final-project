import React from 'react';
// import PropTypes from 'prop-types';
import { Logo } from '../../common/Logo/Logo';
import { MenuNav } from '../../features/MenuNav/MenuNav';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = () => (
  <div className={clsx(styles.root)}>
    <div className={clsx(styles.logo)}>
      <Logo />
    </div>
    <div className={clsx(styles.nav)}>
      <MenuNav />
    </div>
  </div>
);

// Component.propTypes = {

// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
