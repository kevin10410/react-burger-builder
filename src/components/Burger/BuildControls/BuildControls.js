import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl';

const DivBuildControls = styled.div`
  width: 100%;
  background-color: #CF8F2E;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <DivBuildControls>
    {
      controls.map(ctrl =>
        <BuildControl
          key = {ctrl.label}
          label = {ctrl.label}
          type = {ctrl.type}
          increaseIngredient = { props.increaseIngredient }
          decreaseIngredient = { props.decreaseIngredient }
        />
      )
    }
  </DivBuildControls>
);

export default BuildControls;