import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Quote } from 'lucide-react'; // Optional icon (needs lucide-react installed)

const About = () => {
  return (
    <div
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e0e0e0)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card
              className="border-0 shadow rounded-4 p-4"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                borderRadius: '1.5rem',
              }}
            >
              <Card.Body>
                <div className="text-center mb-4">
                  <Quote size={40} color="#0d6efd" />
                </div>
                <Card.Title
                  className="mb-4 text-center"
                  style={{
                    fontSize: '2.8rem',
                    fontWeight: '600',
                    color: '#0d6efd',
                    letterSpacing: '0.5px',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  About Me
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '1.15rem',
                    lineHeight: '1.9',
                    color: '#343a40',
                    fontWeight: '400',
                    textAlign: 'justify',
                  }}
                >
                  I’m a <strong>tech enthusiast</strong> with a deep passion for learning and exploring modern
                  technologies. I’ve completed certifications from <strong>Citi</strong> and{' '}
                  <strong>Hewlett Packard Enterprise</strong>, which helped me develop a strong foundation in
                  problem-solving and industry workflows.
                  <br />
                  <br />
                  I actively seek opportunities to grow in <strong>software development, IT systems</strong>, and
                  <strong> emerging tech trends</strong>. I believe in continuous learning and love building real-world
                  solutions through hands-on projects.
                  <br />
                  <br />
                  My focus is on creating impactful work and connecting with like-minded professionals who are
                  passionate about <strong>innovation and technology</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
