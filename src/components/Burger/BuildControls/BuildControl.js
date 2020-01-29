import React from 'react';
import styled from 'styled-components';

const DivBuildControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

const DivLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const ButtonBasic = styled.button`
  cursor: pointer;
  display: block;
  font-family: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  outline: none;
  color: white;

  &:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonLess = styled(ButtonBasic)`
  background-color: #D39952;

  &:hover, &:active { background-color: #DAA972 }
`;

const ButtonMore = styled(ButtonBasic)`
  background-color: #8F5E1E;
  &:hover, &:active { background-color: #99703F }
`;

const BuildControl = (props) => (
  <DivBuildControl>
    <DivLabel>{props.label}</DivLabel>
    <ButtonLess>Less</ButtonLess>
    <ButtonMore>More</ButtonMore>
  </DivBuildControl>
);

export default BuildControl;