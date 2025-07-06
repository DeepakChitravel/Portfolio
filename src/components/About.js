import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { UserRound, ArrowDown } from 'lucide-react';

const About = () => {
  return (
    <div
      id="about"
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            marginBottom: '2rem',
            letterSpacing: '1px',
          }}
        >
          ABOUT ME
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              className="p-4 border-0 shadow-lg"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                color: '#fff',
              }}
            >
              <div className="text-center mb-3">
                <UserRound size={48} color="#0d6efd" />
              </div>
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                  }}
                >
                  I'm a passionate tech enthusiast focused on building responsive web applications,
                  developing APIs, and exploring emerging technologies. My skills include <strong>React.js, Node.js, PHP, MongoDB, MySQL</strong> and more.
                  <br /><br />
                  I've completed certifications from industry leaders like <strong>Citi</strong>, <strong>Hewlett Packard Enterprise</strong>,
                  <strong> Microsoft</strong>, and <strong>AWS</strong>. I enjoy turning ideas into real-world solutions and continuously improving through learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Scroll Indicator */}
        <div
          className="d-flex flex-column align-items-center mt-5"
          style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <ArrowDown color="#fff" />
          <span style={{ fontSize: '0.9rem', color: '#ccc' }}>Scroll Down</span>
        </div>
      </Container>
    </div>
  );
};

export default About;
