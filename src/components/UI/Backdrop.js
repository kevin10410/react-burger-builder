import React from 'react';
import styled from 'styled-components';

const DivBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = (props) => (
  props.show &&
  <DivBackdrop
    onClick = { () => { props.cancel() } }
  />
);

export default Backdrop;