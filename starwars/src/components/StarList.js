import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarCard from './StarCard';
import { Container, Row } from "reactstrap";
import styled from 'styled-components';

export default function StarList() {

    const [stars, setStar] = useState([]);

  useEffect(() => {
    axios
    .get(`https://lambda-swapi.herokuapp.com/api/people/`)
    .then(response => {
      console.log('star wars characters', response.data.results)
      setStar(response.data.results);
    })
    .catch(error => {
      console.log('The data was not returned', error);
    });
  }, []);

  return (
    <Container>
        <Row>
            <List>
            {stars.map(star => {
                return (
                <StarCard 
                key={star.id}
                star={star}
                />
                );
            })}
            </List>
        </Row>
    </Container>
  );
}

const List = styled.div`
    width: 100%;
    display: flex;
    margin: 1% auto;
    border: 2px solid black;
    border-radius: 5px;
    background-color: rgba(0,0,0, 0.5);
    color: rgb(255, 232, 31);
    width: 62%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    &:hover {
        transition: all .7s ease-in-out;
        transform: scale(1.3);
        background-color: rgb(5,5,5);
    }
    }
   
`;


