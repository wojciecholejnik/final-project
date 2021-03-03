import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { TextField } from '@material-ui/core';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCakes, getCupcakes } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';


import styles from './Product.module.scss';

const shortid = require('shortid');

class Component extends React.Component {

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

  componentDidMount(){
    const product = this.getOne(this.props.match.params.id.split('-')[1], this.props.match.params.id.split('-')[0]);
    this.setState({
      type: this.props.match.params.id.split('-')[0],
      title: product.title,
      img: product.img,
      price: product.price,
      totalCost: product.price * this.state.amount,
    });
  }

  getOne = (id, type) => {
    if(type === 'cake'){
      return this.props.cakes.find(product => product._id === id);
    } else {
      return this.props.cupcakes.find(product => product._id === id);
    }
  };

  render(){
    const matchType = this.props.match.params.id.split('-')[0];
    const matchId = this.props.match.params.id.split('-')[1];
    const product = this.getOne(matchId, matchType);
    const amountItems = [1,2,3,4,5,6,7,8,9,10];

    return (
      <div className={clsx(styles.root)}>
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <img className={styles.img} alt={product.title} src={matchType === 'cake' ? require('../../../images/products/cakes/' + product.img) : require('../../../images/products/cupcakes/' + product.img)}></img>
          </Grid>
          <Grid item xs={12} >
            <div className={styles.container}>
              <div className={styles.innerContainer}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>${this.state.totalCost}</div>
              </div>
              <div className={styles.optionContainer}>
                <div >
                  <TextField
                    onChange={(event) => {
                      this.setState({wishes: event.target.value});
                    }}
                    className={styles.textField}
                    label='Your wishes:'
                    multiline
                  ></TextField>
                </div>
                <div className={styles.amount}>
                  <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={1}
                    onChange={(event)=>{
                      this.setState({
                        amount: event.target.value,
                        totalCost: this.state.price * event.target.value,
                      });
                    }}
                  >
                    {amountItems.map(item => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                  </Select>
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

Component.propTypes = {
  cakes: PropTypes.array,
  cupcakes: PropTypes.array,
  match: PropTypes.object,
  addToCart: PropTypes.func,
};




const mapStateToProps = state => ({
  cakes: getCakes(state),
  cupcakes: getCupcakes(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
