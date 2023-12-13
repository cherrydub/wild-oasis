import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">THE WILD OASIS</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button>djkls</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number"></Input>
      </StyledApp>
    </>
  );
}
