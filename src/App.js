import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const Btn = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: "Roboto";
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 17px;
  border: 2px solid grey;
  outline: none;
  transition: background-size 0.7s ease;
  &:hover{
    cursor: pointer;
    background-size: 450px;
    background: -webkit-linear-gradient(
    top right,
    #007d35 0%,
    #0f574e 40%,
    #0f574e 100%
  );
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

function App() {
  const [quote, saveQuote] = useState({});
  const getAPI = async () => {
    const apiResult = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await apiResult.json();
    saveQuote(quote[0]);
  };

  useEffect(() => {
    getAPI()
  }, []);

  return (
    <Container>
      <Quote quote={quote} />
      <Btn onClick={getAPI}>Get Lucky!</Btn>
    </Container>
  );
}

export default App;
