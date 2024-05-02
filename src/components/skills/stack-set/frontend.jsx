import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaVuejs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";


const FrontendSkills = () => {
  return (
    <Row className="wrapper"
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons-frontend ">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons-frontend ">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons-frontend ">
        <RiJavascriptFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons-frontend ">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons-frontend ">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons-frontend ">
        <FaVuejs />
      </Col>
    </Row>
  );
};

export default FrontendSkills;
