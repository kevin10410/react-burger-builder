import React, { Component } from 'react';

import Order from '../Order/Order';
import Spinner from '../UI/Spinner';

import { getOrders } from '../../api/orderService';

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  startLoading = () => {
    this.setState({ loading: true });
  }

  endLoading = () => {
    this.setState({ loading: false });
  }

  async componentDidMount() {
    this.startLoading();
    await getOrders()
      .then(res => res.data)
      .then(orders => {
        this.setState({ orders });
      })
      .catch(err => console.log(err));
    this.endLoading();
  };

  render() {
    const Orders = this.state.orders
      .map(order => (
        <Order
          {...order}
          key = { order.orderId }
        />
      ));

    return (
      <div>
        { 
          this.state.loading
            ? <Spinner/>
            : Orders 
        }
      </div>
    );
  }
};

export default Orders;
