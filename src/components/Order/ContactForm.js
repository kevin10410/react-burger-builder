import React from 'react';
import styled from 'styled-components';

import { ButtonSuccess } from '../../component-style/ButtonStyle';


const DivContactForm = styled.div``;

const Input = styled.input`
  display: block;
`;

const ContactForm = (props) => (
  <DivContactForm>
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
        onClick = { (event) => { props.postOrder(event) } }
      >Order</ButtonSuccess>
    </form>
  </DivContactForm>
);

export default ContactForm;

