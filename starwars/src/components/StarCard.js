import React from "react";
import {
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
  } from "reactstrap";

const StarCard = props => {
    return(
    <Row className="row">
    <Col className="col-12 cold-md-4" >
        <Card>
            <CardBody>
            <CardTitle className="col">{props.star.name}</CardTitle>
            <CardSubtitle className="col">Height: {props.star.height}</CardSubtitle>
            <CardSubtitle className="col">Mass: {props.star.mass}</CardSubtitle>
            <CardSubtitle className="col">Hair Color: {props.star.hair_color}</CardSubtitle>
            <CardSubtitle className="col">Skin Color: {props.star.skin_color}</CardSubtitle>
            <CardSubtitle className="col">Eye Color: {props.star.eye_color}</CardSubtitle>
            <CardSubtitle className="col">Birth Year: {props.star.birth_year}</CardSubtitle>
            <CardSubtitle className="col">Gender: {props.star.gender}</CardSubtitle>
            </CardBody>
        </Card>
    </Col>
    </Row>
    );
};


export default StarCard;

