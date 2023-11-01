import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 12px;
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  display: block;
  text-transform: capitalize;

  background-color: #0a66c2;
  border: 0;
  border-radius: 25px;
  color: #ffffff;
  font-size: 14px;
  padding: 5px 5px;
  width: 100px;

  &:hover {
    background-color: #16437e;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  
`;
