import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getOrders, loadOrdersRequest } from '../../../redux/ordersRedux';

import styles from './Orders.module.scss';
import { Loading } from '../../common/Loading/Loading';


class Component extends React.Component{
  componentDidMount(){
    this.props.loadOrders();
  }
  render(){
    if(this.props.orders.loading.active){
      return <Loading />;
    } else if(this.props.orders.loading.error){
      return (<h2>{this.props.orders.loading.error}</h2>);
    } else if(!this.props.orders.loading.active){
      const { orders } = this.props;
      return (
        <div className={styles.root}>
          {orders.orders.map(order => (
            <div className={styles.orderContainer} key={order._id}>
              <p>Order id: {order._id}</p>
              <p>Name: {order.name}</p>
              <p>Status: {order.status}</p>
              <p>Date: {order.date}</p>
              <p>Phone: {order.phone}</p>
              <p>E-mail: {order.email}</p>
              <p>Total price: ${order.totalPrice}</p>
              <p>Products: </p>
              <ul>
                {order.products.map(product => (
                  <li key={product.id}>
                    {product.title} x{product.amount} - ${product.totalCost}
                    <br/> {product.wishes ? (<p className={styles.wishes}>{product.wishes}</p>) : ''}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  }
}

Component.propTypes = {
  orders: PropTypes.object,
  loadOrders: PropTypes.func,
};

const mapStateToProps = state => ({
  orders: getOrders(state),
});

const mapDispatchToProps = dispatch => ({
  loadOrders: () => dispatch(loadOrdersRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Orders,
  Container as Orders,
  Component as OrdersComponent,
};
