import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { loadCartRequest } from '../../../redux/cartRedux';

import styles from './MainLayout.module.scss';

class Component extends React.Component {

  componentDidMount(){
    this.props.loadCartRequest();
  }

  render(){
    const { className, children } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loadCartRequest: PropTypes.func,
  loadProductsRequest: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  loadCartRequest: () => dispatch(loadCartRequest()),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};
