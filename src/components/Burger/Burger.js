import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const DivBurger = styled.div`
  margin: auto;
  width: 100%;
  height: 250px;
  overflow-y: auto;
  text-align: center;
  font-weight: bold:
  font-size: 12rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

const Burger = (props) => {


  return (
    <DivBurger className="burger">
      <BurgerIngredient type="breadTop"/>
      <BurgerIngredient type="salad"/>
      <BurgerIngredient type="bacon"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="breadBottom"/>
    </DivBurger>
  );
};

export default Burger;