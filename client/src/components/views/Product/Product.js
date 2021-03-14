import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Loading } from '../../common/Loading/Loading';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { TextField } from '@material-ui/core';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneRequest, getOne, getProductStats } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';

import styles from './Product.module.scss';
const shortid = require('shortid');

class Component extends React.Component {

  async componentDidMount(){
    await this.props.getOneRequest(this.props.match.params.id.split('-')[1], this.props.match.params.id.split('-')[0]);

    if(this.props.product){
      this.setState({
        type: this.props.match.params.id.split('-')[0],
        title: this.props.product.title,
        img: this.props.product.img,
        price: this.props.product.price,
        totalCost: this.props.product.price * this.state.amount,
      });
    }
  }

  state = {
    id: shortid.generate(),
    type: '',
    title: '',
    img: '',
    price: '',
    amount: 1,
    wishes: '',
    totalCost: null,
  };

  setToCart = (product) => {
    if(JSON.parse(localStorage.getItem('cart'))){
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const cart = [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  setAmount = (type) => {
    if(type === 'more'){
      let stateAmount = this.state.amount + 1;
      this.setState({
        amount: stateAmount,
      })
    } else if(type === 'less'){
      let stateAmount = this.state.amount - 1;
      if(this.state.amount > 1){
        this.setState({
          amount: stateAmount,
        })
      }
    }
  }

  buttonTransition = (type) => {
    let svg = document.getElementById(type);
    svg.classList.add(styles.clicked);
    setTimeout(()=>{svg.classList.remove(styles.clicked)}, 100);
  }


  render(){
    const matchType = this.props.match.params.id.split('-')[0];

    if(this.props.stats.active || !this.props.product){
      return (<div className={styles.root}><Loading /></div>);
    } else if(this.props.stats.error){
      return (<div className={styles.root}><h2>{this.props.stats.error}</h2></div>);
    } else if(!this.props.stats.active){

      return (
        <div className={clsx(styles.root)}>
          <Grid container spacing={2} >
            <Grid item xs={12} >
              <img className={styles.img} alt={this.props.product.title} src={matchType === 'cake' ? require('../../../images/products/cakes/' + this.props.product.img) : require('../../../images/products/cupcakes/' + this.props.product.img)}></img>
            </Grid>
            <Grid item xs={12} >
              <div className={styles.container}>
                <div className={styles.innerContainer}>
                  <div className={styles.title}>{this.props.product.title}</div>
                  <div className={styles.price}>${this.state.totalCost}</div>
                </div>
                <div className={styles.optionContainer}>
                  <div className={clsx(styles.optionWrapper, styles.textFileWrapper, styles.textField)}>
                    <TextField
                      onChange={(event) => {
                        this.setState({wishes: event.target.value});
                      }}
                      label='Your wishes:'
                      multiline
                    ></TextField>
                  </div>
                  <div className={clsx(styles.optionWrapper, styles.amountWrapper, styles.amount)}>
                  <p className={styles.amountLabel}>Amount:</p>
                    <div className={styles.amountInner}>
                      <p className={styles.amountValue}>{this.state.amount}</p>
                      <div className={styles.buttons}>
                        <button className={clsx(styles.amountButton, styles.moreButton)} id='more' onClick={() => {
                          this.setAmount('more');
                          this.buttonTransition('more');
                        }}>
                          +
                        </button>
                        <button className={styles.amountButton} id='less' onClick={() => {
                          this.setAmount('less')
                          this.buttonTransition('less')
                          }}>
                            -
                          </button>
                      </div>
                    </div>

                  </div>
                </div>
                <Button
                  className={styles.button}
                  variant='contained'
                  color='primary'
                  size='large'
                  startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
                  onClick={() => {
                    this.props.addToCart(this.state);
                    this.setToCart(this.state);
                  }}
                  component={NavLink}
                  to='/cart'
                >
                  Add to cart
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

Component.propTypes = {
  match: PropTypes.object,
  addToCart: PropTypes.func,
  product: PropTypes.object,
  stats: PropTypes.object,
};

const mapStateToProps = state => ({
  product: getOne(state),
  stats: getProductStats(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
  getOneRequest: (id, type) => dispatch(getOneRequest(id, type)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
