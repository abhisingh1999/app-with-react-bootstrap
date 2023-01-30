import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

const ContactSection = () => {
  return (
    <Container className="p-5">
      <h1 className="text-uppercase text-center">CONTACT</h1>
      <p className="fst-italic text-secondary text-center">Fan? Drop a note!</p>
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faLocationDot} className="me-3" />
              Dapibus ac facilisis in
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faPhone} className="me-3" />
              Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="text-end">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
