import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSnapchat,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <img
        src="https://www.w3schools.com/w3images/map.jpg"
        alt=""
        className="w-100"
      />
      <h5>
        <Container className="text-center p-3  text-muted m-5">
          <FontAwesomeIcon icon={faFacebook} className="p-1" />
          <FontAwesomeIcon icon={faInstagram} className="p-1" />
          <FontAwesomeIcon icon={faSnapchat} className="p-1" />
          <FontAwesomeIcon icon={faPinterest} className="p-1" />
          <FontAwesomeIcon icon={faTwitter} className="p-1" />
          <FontAwesomeIcon icon={faLinkedin} className="p-1" />
          <p className="text-center p-2">
            Powerd by
            <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
          </p>
        </Container>
      </h5>
    </Container>
  );
};

export default Footer;
