import styled from 'styled-components';

export const ButtonBase =  styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

export const ButtonSuccess = styled(ButtonBase)`
  color: #5C9210;
`;

export const ButtonDanger = styled(ButtonBase)`
  color: #944317;
`;