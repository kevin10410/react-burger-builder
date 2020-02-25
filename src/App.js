import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from './components/Wrapper/Wrapper';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Order from './components/Orders';
import Login from './containers/Login';
import Logout from './containers/Logout';
import { CHECK_TOKEN } from './store/actions/login';

class App extends Component {

  componentDidMount() {
    this.props.checkToken();
  };

  render() {
    return(
      <Wrapper>
        <Switch>
          <Route 
            path="/"
            exact
            component={ BurgerBuilder }
          />
          <Route
            path="/checkout" 
            component={ Checkout }
          />
          <Route
            path="/orders"
            component={ Order }
          />
          <Route
            path="/login"
            component={ Login }
          />
          <Route
            path="/logout"
            component={ Logout }
          />
        </Switch>
      </Wrapper>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(CHECK_TOKEN()),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
