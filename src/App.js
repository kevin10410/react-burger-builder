import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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

    const routes = this.props.isLogin
      ? (<>
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
            path="/logout"
            component={ Logout }
          />
          <Redirect to="/"/>
        </>)
      : (
          <>
            <Route
              path="/login"
              component={ Login }
            />
            <Redirect to="/login"/>
          </>
        )

    return(
      <Wrapper>
        <Switch>
          { routes }
        </Switch>
      </Wrapper>
    );
  }
};

const mapStateToProps = state => ({
  isLogin: state.reducerLogin.token !== null,
});

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(CHECK_TOKEN()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
