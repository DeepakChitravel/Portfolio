import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  const techStack = [
    "React", "Flask", "Bootstrap", "Spring Boot",
    "Twilio", "Mockito", "JUnit", "MongoDB",
    "MySQL", "REST API", "HTML", "CSS",
    "Postman API", "Node", "Express","Git","GitHub",
    "JavaScript","Node",
    "Express"
  ];

  return (
    <motion.div
      id="hero"
      className="py-5"
      style={{
        background: 'linear-gradient(to bottom right, #f8f9fa, #e0eafc)',
        fontFamily: "'Poppins', sans-serif"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="shadow-lg rounded-circle overflow-hidden mx-auto"
              style={{
                width: '280px',
                height: '280px',
                border: '6px solid #0d6efd',
              }}
            >
              <Img
                src="/Deepak_photo.jpeg"
                alt="Deepak"
                fluid
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </Col>

          <Col md={7} className="text-center text-md-start">
            <motion.h1
              className="fw-bold mb-2"
              style={{ fontSize: '2.8rem', color: '#0d6efd' }}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Deepak
            </motion.h1>
            <h4 className="mb-3 text-secondary">Junior Software Developer</h4>
            <p className="lead fw-semibold">Tech Stack</p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start mb-4">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Badge
                    bg="dark"
                    className="me-2 mb-2 px-3 py-2"
                    style={{ fontSize: '0.9rem', borderRadius: '12px' }}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
            <motion.div className="mt-3 d-flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="primary" size="lg">
                  Contact Me
                </Button>
              </motion.a>
              <motion.a
                href="/Deepak_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="outline-dark" size="lg">
                  Download Resume
                </Button>
              </motion.a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Hero;
