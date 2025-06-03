import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const educationData = [
  {
    degree: 'M.C.A.',
    institution: 'Bharathidasan University – A.V.V.M. Sri Pushpam College, Poondi',
    duration: '2023 - 2025',
    icon: 'bi-laptop',
  },
  {
    degree: 'B.Sc.',
    institution: 'Bharathidasan University – A.V.V.M. Sri Pushpam College, Poondi',
    duration: '2020 - 2023',
    icon: 'bi-book',
  },
  {
    degree: 'HSC',
    institution: 'State Board – Sri Shanmuka Matric Hr Sec School',
    duration: '2020',
    icon: 'bi-journal-check',
  },
  {
    degree: 'SSLC',
    institution: 'State Board – Sri Shanmuka Matric Hr Sec School',
    duration: '2018',
    icon: 'bi-journal-check',
  },
];

const Education = () => {
  return (
    <div id="education" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center text-primary mb-5 fw-bold" style={{ fontSize: '2.5rem' }}>
          <i className="bi bi-mortarboard-fill me-2"></i>Education
        </h2>
        <Row className="justify-content-center">
          {educationData.map((edu, index) => (
            <Col md={10} lg={8} key={index} className="mb-4">
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body className="d-flex align-items-start">
                  <i className={`bi ${edu.icon} text-primary me-4`} style={{ fontSize: '2rem' }}></i>
                  <div>
                    <Card.Title className="text-dark fw-bold fs-4">{edu.degree}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{edu.institution}</Card.Subtitle>
                    <Card.Text className="text-secondary">{edu.duration}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
