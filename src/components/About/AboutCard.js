import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am an  <span className="purple"> AI/ML enthusiast</span>{" "}
            and<span className="purple"> Frontend developer</span>.
            <br />
            passionate about building intelligent and user-friendly digital solutions. I enjoy exploring emerging technologies while crafting seamless user experiences
            <br /><span className="purple"> BTECH(Artificial Intelligence)</span> at{" "}
            <span className="purple">BIT MESRA </span>.
            
            <br />
            <br />
            Beyond tech, I actively engage in management and leadership roles
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Curator of TEDxBITJaipur
            </li>
            <li className="about-activity">
              <ImPointRight /> Promotions Lead of the cultural committee.
            </li>
            <li className="about-activity">
              <ImPointRight /> Media head at msa bit jaipur
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
