import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

export default function App() {
  return (
    <StyledApp>
      <H1>THE WILD OASIS</H1>
      <Button>djkls</Button>
      <Input type="number" placeholder="Number"></Input>
    </StyledApp>
  );
}
