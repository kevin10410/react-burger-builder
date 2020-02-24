import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../Order/Order';
import Spinner from '../UI/Spinner';

import { FETCH_ORDERS } from '../../store/actions/orders';

class Orders extends Component {

  async componentDidMount() {
    this.props.fetchOrders();
  };

  render() {
    const Orders = this.props.orders
      && this.props.orders
        .map(order => (
          <Order
            {...order}
            key = { order.orderId }
          />
        ));

    return (
      <div>
        { 
          this.props.isLoading
            ? <Spinner/>
            : Orders 
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  orders: state.reducerOrders.orders,
  isLoading: state.reducerOrders.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(FETCH_ORDERS()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
