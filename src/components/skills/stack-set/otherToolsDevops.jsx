import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJenkins, FaPython, FaLinux  } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";



const OtherDevopsTools = () => {
  return (
    <Row className="wrapper"
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons-devops-2">
        <FaJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops-2">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops-2">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops-2">
        <SiTerraform />
      </Col>
    </Row>
  );
};

export default OtherDevopsTools;
