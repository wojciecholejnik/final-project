import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCakes, getCupcakes } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

class Component extends React.Component {

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

    return (
      <div className={clsx(styles.root)}>
        <Grid container spacing={2} alignContent="center" justify="center" alignItems="center">
          <Grid item xs={12} alignContent="center" justify="center" alignItems="center">
            <img className={styles.img} alt={product.title} src={matchType === 'cake' ? require('../../../images/products/cakes/' + product.img) : require('../../../images/products/cupcakes/' + product.img)}></img>
          </Grid>
          <Grid item xs={12} >
            <div className={styles.container}>
              <div className={styles.innerContainer}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>${product.price}</div>
              </div>
              <Button
                className={styles.button}
                variant='contained'
                color='primary'
                size='large'
                startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
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
};




const mapStateToProps = state => ({
  cakes: getCakes(state),
  cupcakes: getCupcakes(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
