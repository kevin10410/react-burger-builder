import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Wrapper from './components/Wrapper/Wrapper';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
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
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
