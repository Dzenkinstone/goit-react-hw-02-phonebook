import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  margin-bottom: 30px;
  &:focus {
    outline: none;
    border: 2px solid rgb(0, 191, 255);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  background-color: white;
  border: 1px solid rgb(192, 192, 192);
  padding: 2px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
`;
