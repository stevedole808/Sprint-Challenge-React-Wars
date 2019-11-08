import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarCard from './StarCard';

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
    <div className="star">
      {stars.map(star => {
        return (
          <StarCard star={star}/>
        );
      })}
    </div>
  );
}

