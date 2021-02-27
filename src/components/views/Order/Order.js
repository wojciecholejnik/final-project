import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import styles from './Order.module.scss';


import { connect } from 'react-redux';
import { getCakes, getCupcakes } from '../../../redux/productsRedux';


class Component extends React.Component {
  state = {
    width: Math.max(document.documentElement.clientWidth),
  }

  changeWidth(){
    window.addEventListener('resize', () => {
      this.setState({width: Math.max(document.documentElement.clientWidth)});
    });
  }


  render(){
    const {cakes, cupcakes} = this.props;
    this.changeWidth();
    return (
      <div className={styles.root}>
        {/* Cart */}

        {/* Cakes horizontal swiper */}
        <div className={styles.swiperDiv}>
          <h2 className={styles.title}>These are our cakes: </h2>
          <GridList spacing={15} className={styles.gridList} cols={this.state.width > 600 ? 2.2 : 1.15} cellHeight={230}>
            {cakes.map((tile) => (
              <GridListTile component={NavLink} to={'/product/cake' + tile._id} key={tile._id}>
                <img className={styles.image} src={require('../../../images/products/cakes/' + tile.img)} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>

        {/* Cupcakes horizontal swiper */}
        <div className={styles.swiperDiv}>
          <h2 className={styles.title}>... and cupcakes: </h2>
          <GridList spacing={15} className={styles.gridList} cols={this.state.width > 600 ? 2.2 : 1.15} cellHeight={230}>
            {cupcakes.map((tile) => (
              <GridListTile component={NavLink} to={'/product/cupcake' + tile._id } key={tile._id}>
                <img className={styles.image} src={require('../../../images/products/cupcakes/' + tile.img)} alt={tile.title} />
                <GridListTileBar
                  className={styles.signature}
                  title={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

}

Component.propTypes = {
  cakes: PropTypes.array,
  cupcakes: PropTypes.array,
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
  // Component as Order,
  Container as Order,
  Component as OrderComponent,
};
