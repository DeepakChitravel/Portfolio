// EducationExperience.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/EducationExperience.css';

const education = [
  {
    title: 'High School Degree',
    duration: '2018 - 2020',
    description: 'Completed Higher Secondary Schooling with focus on science and mathematics.',
  },
  {
    title: "Bachelor's Degree (B.Sc.)",
    duration: '2020 - 2023',
    description: 'Studied Computer Science at A.V.V.M. Sri Pushpam College, affiliated to Bharathidasan University.',
  },
  {
    title: 'Master Degree (M.C.A.)',
    duration: '2023 - 2025',
    description: 'Master of Computer Applications at A.V.V.M. Sri Pushpam College,affiliated to Bharathidasan University.',
  },
];

const EducationExperience = () => {
  return (
    <div className="timeline-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h4 className="timeline-title">EDUCATION</h4>
            <div className="timeline">
              {education.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot" />
                  <div className="timeline-content hover-card">
                    <p className="text-success fw-bold">{item.duration}</p>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EducationExperience;
