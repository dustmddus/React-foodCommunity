import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  border-radius: 15px;
  margin-top: 15px;
  padding-left: 15px;
  font-size: 15px;
  :focus {
    outline: none;
    border-color: #25a4cd;
    box-shadow: 0 0 15px #25a4cd;
  }
`;

export const SubmitBtn = styled.button`
  margin-left: 10px;
  width: 50px;
  height: 35px;
  border-radius: 10px;
  background-color: #25a4cd;
  color: white;
`;
