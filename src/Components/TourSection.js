import React from "react";
import { Badge, Container, ListGroup } from "react-bootstrap";
import CardSection from "./CardSection";

const TourSection = () => {
  return (
    <Container fluid className="p-0 text-center bg-dark">
      <Container className="p-5">
        <h1 className="text-uppercase text-white">Tour Dates</h1>
        <p className="fst-italic text-secondary">
          Remember to book your tickets!
        </p>
        <ListGroup>
          <ListGroup.Item as="li" className="d-flex align-items-start">
            <div className="fw-bold me-2">Subheading</div>
            <Badge bg="danger">14</Badge>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex align-items-start">
            <div className="fw-bold me-2">Subheading</div>
            <Badge bg="danger">14</Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="fw-bold me-2">Subheading</div>
            <Badge bg="dark" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
        <CardSection />
      </Container>
    </Container>
  );
};

export default TourSection;
