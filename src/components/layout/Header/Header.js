import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../common/Logo/Logo';
import { MenuNav } from '../../features/MenuNav/MenuNav';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';

import styles from './Header.module.scss';

class Component extends React.Component {
  render(){
    const { cart } = this.props;
    return (
      <div className={clsx(styles.root)}>
        <div className={clsx(styles.logo)}>
          <Logo />
        </div>
        <div className={clsx(styles.nav)}>
          <MenuNav cart={cart}/>
        </div>
      </div>
    );
  }
}



Component.propTypes = {
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
