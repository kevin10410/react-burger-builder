import React from 'react';
import styled from 'styled-components';

import InputItem from '../UI/InputItem';
import { ButtonSuccess } from '../../component-style/ButtonStyle';


const DivContactForm = styled.div``;

const ContactForm = (props) => (
  <DivContactForm>
    <h4>Enter your Contact Data</h4>
    <form>
      <InputItem type="text"
        name="name"
        placeholder="Your name"
      />
      <InputItem type="text"
        name="email"
        placeholder="Your email"
      />
      <InputItem type="text"
        name="street"
        placeholder="Street"
      />
      <InputItem type="text"
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

