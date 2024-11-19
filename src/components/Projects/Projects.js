import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import baloon from "../../Assets/Projects/baloon.png";
import diabities from "../../Assets/Projects/bakery.jpg";
import news from "../../Assets/Projects/intern.jpg";
import warehouse from "../../Assets/Projects/warehouse.png";
import textutils from "../../Assets/Projects/textutils.png";

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
              imgPath={news}
              isBlog={false}
              title="Intern Management System"
              description=" Intern Management System is website based on .Net MVC Angluar and Sql where intern details is storing here we can create intern details and we can add new interns in the system"
              ghLink="AbhinavUpadhyay7/InternManagementSystem"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="School Website"
              description="School website is basically one website where we are displaying school information like school details award details etc "
              ghLink="AbhinavUpadhyay7/Schoolwebsite"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabities}
              isBlog={false}
              title="BakeryWebsite"
              description="BakeryWebsite is website where we can sell the bakery products online where
                       customer can buy all products in website user can create
                           account and login to buy products In website we have admin
                     panel where admin can manage products as well as customer
                              details.etc."
              ghLink="https://github.com/AbhinavUpadhyay7/BakeryWebsite/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
