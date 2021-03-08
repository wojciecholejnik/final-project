import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../../common/MenuButton/MenuButton';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MenuNav.module.scss';

class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
  }

  componentDidMount(){
    this.setState({activePage: '/'});
  }

  setActiveMenuButton = (name) => {
    this.setState({activePage: '/'+name});
    console.log(name);
  };

  render(){
    const { cart } = this.props;
    return (
      <div className={clsx(styles.root)}>
        <MenuButton name={'order'} />
        <MenuButton name={'about'} />
        <div className={styles.cart}>
          <Badge component={NavLink} to={'/cart'} badgeContent={null || cart.length} color='primary'>
            <ShoppingCartIcon className={styles.cartIcon} fontSize='large'/>
          </Badge>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MenuNav,
  // Container as MenuNav,
  Component as MenuNavComponent,
};
