import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BandSection = () => {
  return (
    <Container className="p-5 text-center">
      <h1 className="text-uppercase">The Band</h1>
      <p className="fst-italic text-secondary">We love music</p>
      <p>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <Row>
        <Col xs="12" md="4">
          <p>Name</p>
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt=""
            className="w-75 d-block mx-auto rounded shadow"
          />
        </Col>
        <Col xs="12" md="4">
          <p>Name</p>
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt=""
            className="w-75 d-block mx-auto rounded shadow"
          />
        </Col>
        <Col xs="12" md="4">
          <p>Name</p>
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt=""
            className="w-75 d-block mx-auto rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BandSection;
