import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return(
      <Wrapper>
        <BurgerBuilder/>
      </Wrapper>
    );
  }
}

export default App;
