import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  padding: 50px 50px;
`;

export const Title = styled.h1`
  font-size: 42px;
  padding-bottom: 10px;
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  transition: all 0.5s ease;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      background-color: #222;
      color: #eee;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
    margin-left: 5px;
  }
`;
