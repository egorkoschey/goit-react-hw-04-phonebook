import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0;
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Button = styled.button`
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
  width: 100px;
  height: 25px;
`;
