import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Gran Connect"
              description="Platform linking youth volunteers
with old age homes, enabling event
coordination, mentorship programs,
and interactive activities to support
senior citizens."
              ghLink="https://github.com/mysteec/mysteec.github.io.git"
              demoLink="https://mysteec-github-io.vercel.app"
            />
          </Col>

         
            
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
