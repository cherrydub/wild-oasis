import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orange; */
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">THE WILD OASIS</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button variations="primary" size="medium">
                Check in
              </Button>
              <Button variations="secondary" size="small">
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number"></Input>
              <Input type="number" placeholder="Number"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
