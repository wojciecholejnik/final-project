import React from 'react';
// import PropTypes from 'prop-types';

import clsx from 'clsx';

import CircularProgress from '@material-ui/core/CircularProgress';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Loading.module.scss';

const Component = () => (
  <div className={clsx(styles.root)}>
    <div className={styles.container}>
      <CircularProgress />
    </div>
  </div >
);

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Loading,
  // Container as Loading,
  Component as LoadingComponent,
};
