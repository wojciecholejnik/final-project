import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import styles from './Order.module.scss';
import { Loading } from '../../common/Loading/Loading';

import { connect } from 'react-redux';
import { getCakes, getCupcakes, getProductStats, loadProductsRequest } from '../../../redux/productsRedux';


class Component extends React.Component {

  componentDidMount(){
    this.props.loadProducts();
  }

  state = {
    width: Math.max(document.documentElement.clientWidth),
  }

  changeWidth(){
    window.addEventListener('resize', () => {
      this.setState({width: Math.max(document.documentElement.clientWidth)});
    });
  }

  render(){
    this.changeWidth();
    if(this.props.stats.active){
      return (<div className={styles.root}><Loading /></div>);
    } else if(this.props.stats.error){
      return (<div className={styles.root}><h2>{this.props.stats.error}</h2></div>);
    } else if(!this.props.stats.active){

      const {cakes, cupcakes} = this.props;

      return (
        <div className={styles.root}>
          {/* Cakes horizontal swiper */}
          <div className={styles.swiperDiv}>
            <h2 className={styles.title}>These are our cakes: </h2>
            <GridList spacing={6} className={styles.gridList} cols={this.state.width > 600 ? 3.2 : 1.15} cellHeight={this.state.width > 600 ? 230 : 200}>
              {cakes.map((tile) => (
                <GridListTile component={NavLink} to={'/product/cake-' + tile._id} key={tile._id}>
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
            <GridList spacing={6} className={styles.gridList} cols={this.state.width > 600 ? 3.2 : 1.15} cellHeight={this.state.width > 600 ? 230 : 200}>
              {cupcakes.map((tile) => (
                <GridListTile component={NavLink} to={'/product/cupcake-' + tile._id } key={tile._id}>
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
}

Component.propTypes = {
  loadProducts: PropTypes.func,
  stats: PropTypes.object,
  cakes: PropTypes.array,
  cupcakes: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

const mapStateToProps = state => ({
  stats: getProductStats(state),
  cakes: getCakes(state),
  cupcakes: getCupcakes(state),
});



const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Order,
  Container as Order,
  Component as OrderComponent,
};
