import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhinav Upadhyay </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently Working in LTIMindtree as Software Engineer |RPA Developer|
            <br />
            I have completed my BSc in Information Technologies from S.N.College of Science and Commerce.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Code
            </li>
            <li className="about-activity">
              <ImPointRight /> Listining Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Typing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
