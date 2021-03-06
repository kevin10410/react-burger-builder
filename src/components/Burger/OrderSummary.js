import React from 'react';
import {
  ButtonDanger,
  ButtonSuccess,
} from '../../component-style/ButtonStyle';

const OrderSumary = (props) => (
  <React.Fragment>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {
        Object.keys(props.ingredients)
          .map(ingredient => 
            <li key = { ingredient }>
              <span
                style = {{textTransform: 'capitalize'}}
              >{ingredient}:</span>
              <span>{ props.ingredients[ingredient] }</span>
            </li>
          )
      }
    </ul>
    <p><strong>Total Price: { props.totalPrice }</strong></p>
    <p>Continue to Checkout?</p>
    <ButtonDanger
      onClick = { () => { props.cancelPurchase() } }
    >CANCEL</ButtonDanger>
    <ButtonSuccess
      onClick = { () => { props.continuePurchase() }}
    >CONTINUE</ButtonSuccess>
  </React.Fragment>
);

export default OrderSumary