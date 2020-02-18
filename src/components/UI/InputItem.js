import React from 'react';
import styled, { css } from 'styled-components';

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

const InputCSS = css`
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

const InputElement = styled.input`
  ${ InputCSS }
`;
const TextareaElement = styled.textarea`
  ${ InputCSS }
`;
const SelectElement = styled.select`
  ${ InputCSS }
`;

const generateTextareaFromProps = (props) => (
  <TextareaElement
    value = { props.value }
    placeholder = { props.elementConfig.placeholder }
  />
);

const generateInputFromProps = (props) => (
  <InputElement
    type = { props.type }
    value = { props.value }
    placeholder = { props.elementConfig.placeholder }
  />
);

const generateSelectFromProps = (props) => (
  <SelectElement
    value = { props.value }>
    {
      props.elementConfig.options
        .map(option =>
          <option
            key = { option.value }
            value = { option.value }>
            { option.display }
          </option>
        )
    }
  </SelectElement>
);


const generateElementFromProps = (props) => {
  if (props.elementType === 'textarea') {
    return generateTextareaFromProps(props);
  } else if (props.elementType === 'select') {
    return generateSelectFromProps(props);
  }
  return generateInputFromProps(props);
}

const InputItem = (props) => (
  <DivInputItem>
    <Label>{ props.label }</Label>
    {
      generateElementFromProps(props)
    }
  </DivInputItem>
);

export default InputItem;
