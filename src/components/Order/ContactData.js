import React, { Component } from 'react';
import styled from 'styled-components';

import { ButtonSuccess } from '../../component-style/ButtonStyle';

const DivContactData = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const Input = styled.input`
  display: block;
`;

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
  }
  
  render() {
    return (
      <DivContactData>
        <h4>Enter your Contact Data</h4>
        <form>
          <Input type="text"
            name="name"
            placeholder="Your name"
          />
          <Input type="text"
            name="email"
            placeholder="Your email"
          />
          <Input type="text"
            name="street"
            placeholder="Street"
          />
          <Input type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <ButtonSuccess
            onClick = { (event) => { this.orderHandler(event) } }
          >Order</ButtonSuccess>
        </form>
      </DivContactData>
    );
  };
}; 

export default ContactData;