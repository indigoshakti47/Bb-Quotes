import React from "react";
import styled from '@emotion/styled'

const Container = styled.div `
    max-width:800px;
    padding: 3rem;
    margin-top: 10rem;
    border-radius: 6px;
    background-color: white;
    h3 { 
        position: relative;
        text-align: center;
        font-family: 'Roboto';
        padding-left: 4rem;
        color: black;
        &::before {
            content: open-quote;
            position: absolute;
            font-size: 10rem;
            color: black;
            left: -1rem;
            top: -2rem;

        }
    }
    h5 {
        font-family: 'Roboto';
        font-style: italic;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        margin-top: 2rem;
        color: grey;


    }

`;
const Quote = ({ quote }) => {
    if(Object.keys(quote).length === 0 ) return null;
  return (
    <Container>
      <h3> {quote.quote}</h3>
      <h5> {quote.author}</h5>
    </Container>
  );
};

export default Quote;
