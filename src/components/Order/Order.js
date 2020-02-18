import React from 'react';
import styled from 'styled-components';

const DivOrder = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

const SpanIngredient = styled.span`
  display: inline-block;
  text-transform: capitalize;
  margin: 0 8px;
  border: 1px solid #ccdc;
  padding: 5px;
`;

const Order = (props) => (
  <DivOrder>
    {
      props.ingredients &&
      <p>
        Ingredients:
        {
          Object.keys(props.ingredients)
            .filter(ingredient => props.ingredients[ingredient])
            .map(ingredient => (
              <SpanIngredient
                key = { ingredient }
              >{`${ingredient} (${props.ingredients[ingredient]})`}
              </SpanIngredient>
            ))
        }
      </p>
    }
    <p>Price: 
      <strong>{ props.price }</strong>
    </p>
  </DivOrder>
);

export default Order;
