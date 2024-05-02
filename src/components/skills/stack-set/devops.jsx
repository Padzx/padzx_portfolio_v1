


import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrDocker } from "react-icons/gr";
import { SiYaml, SiKubernetes, SiGithubactions } from "react-icons/si";
import { FaAws, FaGitlab, FaGitAlt } from "react-icons/fa";




const DevopsSkills = () => {
  return (
    <Row className="wrapper"
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons-devops">
        <GrDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops">
        <SiYaml />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops">
        <FaGitlab  />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops">
        <FaGitAlt  />
      </Col>
      <Col xs={4} md={2} className="tech-icons-devops">
        <SiGithubactions />
      </Col>
    </Row>
  );
};

export default DevopsSkills;
