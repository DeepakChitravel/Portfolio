import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div id="about" className="py-5" style={{ background: 'linear-gradient(to bottom right, #ffffff, #e9ecef)' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-lg border-0 rounded-4 p-4" style={{ backgroundColor: '#ffffff' }}>
              <Card.Body>
                <Card.Title 
                  className="mb-4 text-center" 
                  style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 'bold', 
                    color: '#0d6efd',
                    letterSpacing: '1px'
                  }}
                >
                  About Me
                </Card.Title>
                <Card.Text 
                  style={{ 
                    fontSize: '1.15rem', 
                    lineHeight: '1.8', 
                    color: '#495057',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}
                >
                  I’m a <strong>tech enthusiast</strong> with a strong passion for learning and exploring new technologies. I’ve completed certification programs from <strong>Citi</strong> and <strong>Hewlett Packard Enterprise</strong>, which gave me valuable exposure to real-world technology and problem-solving concepts.

                  <br /><br />
                  I constantly seek opportunities to grow in areas like <strong>software development, IT systems, and emerging tech trends</strong>. I believe in lifelong learning and enjoy building practical skills that can contribute to real-world solutions.

                  <br /><br />
                  Currently, I’m focused on gaining hands-on experience and connecting with professionals who share a love for <strong>innovation and technology</strong>.

                  
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
