import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleCard = ({ cardDetails }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardDetails.img} />
      <Card.Body>
        <Card.Title>{cardDetails.title}</Card.Title>
        <Card.Text>{cardDetails.day}</Card.Text>
        <Card.Text>{cardDetails.description}</Card.Text>
        <Button variant="dark">BOOK NOW</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
