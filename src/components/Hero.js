import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';

const Hero = () => {
  const techStack = [
    "React", "Flask", "Bootstrap", "Spring Boot",
    "Twilio", "Mockito", "JUnit", "MongoDB",
    "MySQL", "REST API", "HTML", "CSS",
    "Postman API", "Node", "Express"
  ];

  return (
    <div id="hero" className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <Image
              src="/Deepak_photo.jpeg"
              alt="Deepak"
              roundedCircle
              fluid
              className="shadow"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={7} className="text-center text-md-start">
            <h1 className="fw-bold">Hi, I'm <span className="text-primary">Deepak</span></h1>
            <h4 className="mb-3">Junior Software Developer</h4>
            <p className="lead">Tech Stack:</p>
            <div className="mb-3">
              {techStack.map((tech, idx) => (
                <Badge bg="secondary" className="me-1 mb-1" key={idx}>
                  {tech}
                </Badge>
              ))}
            </div>
            <Button variant="primary" href="#contact" className="me-2">Contact Me</Button>
            <Button variant="outline-dark" href="/resume.pdf" download>Download Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
