import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, addToCart, removeOneFromCart, removeCart, sendOrderRequest } from '../../../redux/cartRedux';
import { loadOrdersRequest } from '../../../redux/ordersRedux';
import { getAccount } from '../../../redux/accountRedux';

import styles from './Cart.module.scss';
import { CartWishes } from '../../common/CartWishes/CartWishes';
import { GoogleLog } from '../../common/GoogleLog/GoogleLog';

const shortid = require('shortid');

class Cart extends React.Component {
  async componentDidMount(){
    //set today date to state
    await this.props.loadOrders();
    const today = new Date();
    this.setState({date: today.getDate() + '.' + (1 + today.getMonth()) + '.' + today.getFullYear()});
    this.setState({totalPrice: this.setTotal(this.props.cart)});
    this.setState({products: this.props.cart});
  }

  state = {
    _id: shortid.generate(),
    name: this.props.account.name,
    phone: null,
    email: this.props.account.email,
    date: '',
    products: [],
    totalPrice: this.setTotal(this.props.cart),
  };

  changeAmount (type, toFind){
    let products = this.state.products;
    const productFromArray = products.find(product => product.id === toFind.id);
    const index = products.indexOf(productFromArray);
    const findedProduct = products[index];
    const amount = findedProduct.amount;
    let newAmount = null;

    if(type === 'more' ){
      newAmount = amount + 1;
    } else if(type === 'less' && amount >= 2){
      newAmount = amount - 1;
    } else if(type === 'less' && amount === 1){
      newAmount = 1;
    }
    let newProduct = {...findedProduct, amount: newAmount, totalCost: findedProduct.price * newAmount};
    products[index] = newProduct;
    this.setState({products: products});
    this.setState({totalPrice: this.setTotal(products)});
    localStorage.setItem('cart', JSON.stringify(products));
  }

  setTotal(products){
    let cost = null;
    products.map(product => {
      cost += product.totalCost;
      return cost;
    });
    return cost;
  }

  submitForm = (e) => {
    e.preventDefault();
    const order = this.state;
    const reg = /^[0-9]+$/;
    const tested = reg.test(order.phone);

    if(tested){
      this.props.removeCart();
      localStorage.setItem('cart', JSON.stringify([]));
      this.props.sendOrder(order);
      window.alert('Your order has been placed for processing');
    } else {
      window.alert('Invalid phone number');
    }

  }

  removeFromLocal = (id) => {
    const local = JSON.parse(localStorage.getItem('cart'));
    const product = local.find(product => product.id === id);
    const index = local.indexOf(product);
    local.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(local));
    this.setState({products: local});
  }

  render(){
    const { cart, account } = this.props;

    if(cart.length === 0){
      return(
        <div className={styles.root}><h2>Your cart is empty !</h2></div>
      );
    } else {
      return(
        <div className={clsx(styles.root)}>
          <div className={styles.container}>
            <List>
              {this.state.products.map(product => (
                <ListItem divider key={product.id}>
                  <ListItemAvatar>
                    <Avatar
                      src={product.type === 'cake' ? require('../../../images/products/cakes/' + product.img) : require('../../../images/products/cupcakes/' + product.img)}
                      variant='square'
                      className={styles.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <div className={styles.titleRemove}>
                          {product.title}
                          <button className={clsx(styles.amountButton, styles.deleteButton)} onClick={() => {
                              this.props.removeOneFromCart(product.id);
                              this.removeFromLocal(product.id);
                              this.setState({totalPrice: this.setTotal(this.state.products)});
                            }}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          variant='body1'
                        >
                          {'price: $' + product.price}
                        </Typography>
                        <Typography
                          variant='body1'
                        >
                          {'amount: x' + product.amount}
                          <button className={styles.amountButton} onClick={() => this.changeAmount('more', product)}>+</button>
                          <button className={styles.amountButton} onClick={() => this.changeAmount('less', product)}>-</button>
                        </Typography>
                        <Typography
                          variant='body1'
                        >
                          {'total cost: $' + product.totalCost}
                        </Typography>
                        {product.wishes ? (
                          <div className={styles.wishesWrapper}>
                            <CartWishes wishes={product.wishes}/>
                          </div>
                        ) : ''}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <div className={styles.totalContainer}>
              <h2>Total cost: ${this.state.totalPrice}</h2>
            </div>
            <div className={styles.formContainer}>
              {account.name && account.email ? (
                <form className={styles.form} onSubmit={this.submitForm}>
                <TextField
                  className={styles.textField}
                  label='Your name:'
                  disabled
                  value={this.state.name}
                  fullWidth
                  margin="dense"
                ></TextField>
                <TextField
                  className={styles.textField}
                  label='E-mail:'
                  disabled
                  value={this.state.email}
                  fullWidth
                  margin="dense"
                ></TextField>
                <TextField
                  onChange={(event) => {
                    this.setState({phone: event.target.value});
                  }}
                  className={styles.textField}
                  label='Type your phone:'
                  type="tel"
                  required
                  fullWidth
                  margin="dense"
                ></TextField>

                <button
                  type='submit'
                >Submit</button>
              </form>
              ) : (
                <div className={styles.needLog}>
                  <h4>To place an order click below and log in</h4>
                  <GoogleLog />
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  removeOneFromCart: PropTypes.func,
  removeCart: PropTypes.func,
  loadCartRequest: PropTypes.func,
  sendOrder: PropTypes.func,
  loadOrders: PropTypes.func,
  account: PropTypes.object,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  account: getAccount(state)
});

const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch(addToCart(data)),
  removeOneFromCart: index => dispatch(removeOneFromCart(index)),
  removeCart: () => dispatch(removeCart()),
  sendOrder: (data) => dispatch(sendOrderRequest(data)),
  loadOrders: () => dispatch(loadOrdersRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Cart);

export {
  // Component as Cart,
  Container as Cart,
  Cart as CartComponent,
};
