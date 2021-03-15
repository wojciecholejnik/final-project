import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../../common/MenuButton/MenuButton';
import { LogButton } from '../../common/LogButton/LogButton';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAccount } from '../../../redux/accountRedux.js';

import styles from './MenuNav.module.scss';


class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    account: PropTypes.object,
  }

  click = (text) => {
    const element = document.getElementById(text);
    element.classList.add(styles.clicked);
    setTimeout(()=>{element.classList.remove(styles.clicked)}, 100);
  }

  render(){
    const { cart, account } = this.props;
    return (
      <div className={clsx(styles.root)}>
        <MenuButton name={'order'} />
        <MenuButton name={'about'} />
        <div className={styles.cart}>
          <Badge onClick={() => {this.click('cart')}}component={NavLink} to={'/cart'} badgeContent={null || cart.length} color='primary'>
            <ShoppingCartIcon id={'cart'} className={styles.cartIcon} fontSize='large'/>
          </Badge>
        </div>
        <div className={styles.log}>
          <LogButton account={account}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  account: getAccount(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as MenuNav,
  Component as MenuNavComponent,
};
