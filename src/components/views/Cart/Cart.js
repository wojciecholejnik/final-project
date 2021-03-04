import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, addToCart, removeOneFromCart, removeCart } from '../../../redux/cartRedux';
import { addOrder } from '../../../redux/ordersRedux';

import styles from './Cart.module.scss';
import { Typography } from '@material-ui/core';
const shortid = require('shortid');


class Cart extends React.Component {
  state = {
    _id: shortid.generate(),
    name: '',
    phone: '',
    email: '',
    date: '',
    products: this.props.cart,
    totalPrice: this.setTotal(this.props.cart),
  };


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
    this.props.addOrder(order);
    this.props.removeCart();
    localStorage.setItem('cart', JSON.stringify([]));
    window.alert('Your order has been placed for processing');
  }

  componentDidMount(){
    //set today date to state
    const today = new Date();
    this.setState({date: today.getDate() + '.' + (1 + today.getMonth()) + '.' + today.getFullYear()});
  }

  removeFromLocal = (id) => {
    const local = JSON.parse(localStorage.getItem('cart'));
    const product = local.find(product => product.id === id);
    const index = local.indexOf(product);
    local.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(local));
  }

  render(){
    const { cart } = this.props;
    if(cart.length === 0){
      return(
        <h2>Your cart is empty !</h2>
      );
    } else {
      return(
        <div className={clsx(styles.root)}>
          <h2>Cart:</h2>
          <div className={styles.container}>
            <List>
              {cart.map(product => (
                <ListItem key={product.id} button>
                  <ListItemAvatar>
                    <Avatar
                      srcSet={product.type === 'cake' ? require('../../../images/products/cakes/' + product.img) : require('../../../images/products/cupcakes/' + product.img)}
                      variant='square'
                      className={styles.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
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
                        </Typography>
                        <Typography
                          variant='body1'
                        >
                          {'total cost: $' + product.totalCost}
                        </Typography>
                        {product.wishes ? (
                          <Typography
                            variant='body1'
                          >
                            {'wishes: ' + product.wishes}
                          </Typography>
                        ) : ''}
                      </React.Fragment>
                    }
                  />
                  <ListItemSecondaryAction onClick={() => {
                    this.props.removeOneFromCart(product.id);
                    this.removeFromLocal(product.id);
                  }}>
                    <IconButton edge="end" aria-label="delete" >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <div className={styles.totalContainer}>
              <h2>Total cost: ${this.state.totalPrice}</h2>
            </div>
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={this.submitForm}>
                <TextField
                  onChange={(event) => {
                    this.setState({name: event.target.value});
                  }}
                  className={styles.textField}
                  label='Type your name:'
                  required
                  autoComplete="off"
                  fullWidth
                  margin="dense"
                ></TextField>
                <TextField
                  onChange={(event) => {
                    this.setState({email: event.target.value});
                  }}
                  className={styles.textField}
                  label='Type your email:'
                  required
                  fullWidth
                  type="email"
                  margin="dense"
                ></TextField>
                <TextField
                  onChange={(event) => {
                    this.setState({phone: event.target.value});
                  }}
                  className={styles.textField}
                  label='Type your phone:'
                  type="number"
                  required
                  fullWidth
                  margin="dense"
                ></TextField>

                <button
                  type='submit'
                >Submit</button>
              </form>
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
  addOrder: PropTypes.func,
  loadCartRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch(addToCart(data)),
  removeOneFromCart: index => dispatch(removeOneFromCart(index)),
  removeCart: () => dispatch(removeCart()),
  addOrder: (data) => dispatch(addOrder(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Cart);

export {
  // Component as Cart,
  Container as Cart,
  Cart as CartComponent,
};
