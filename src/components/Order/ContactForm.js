import React from 'react';
import styled from 'styled-components';

import InputItem from '../UI/InputItem';
import { ButtonSuccess } from '../../component-style/ButtonStyle';


const DivContactForm = styled.div``;

const ContactForm = (props) => (
  <DivContactForm>
    <h4>Enter your Contact Data</h4>
    <form>
      {
        props.orderForm && Object.entries(props.orderForm)
          .map(([key, value]) => (
            <InputItem
              elementType = { value.elementType }
              elementConfig = { value.elementConfig }
              value = { value.value }
            />
          ))
      }
      <ButtonSuccess
        onClick = { (event) => { props.postOrder(event) } }
      >Order</ButtonSuccess>
    </form>
  </DivContactForm>
);

export default ContactForm;

