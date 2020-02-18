import React from 'react';
import styled from 'styled-components';

const DivInputItem = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const InputStyle = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  font: inherit;
  padding: 6px 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

const InputElement = styled(InputStyle)``;
const TextareaElement = styled(InputStyle)``;

const InputItem = (props) => (
  <DivInputItem>
    <Label>{ props.label }</Label>
    {
      props.type === 'textarea'
        ? <InputElement {...props}/>
        : <TextareaElement {...props}/>
    }
  </DivInputItem>
);

export default InputItem;
