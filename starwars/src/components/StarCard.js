import React from "react";

const StarCard = props => {
    return(
        <div className ="star-list" >
            <h2>Star Wars Name: {props.star.name} </h2>
            <h3>Height: {props.star.height}</h3>
            <h3>Mass: {props.star.mass}</h3>
            <h3>Hair Color: {props.star.hair_color}</h3>
            <h3>Skin Color: {props.star.skin_color}</h3>
            <h3>Eye Color: {props.star.eye_color}</h3>
            <h3>Birth Year: {props.star.birth_year}</h3>
            <h3>Gender: {props.star.gender}</h3>
        </div>
    );
};

export default StarCard;

