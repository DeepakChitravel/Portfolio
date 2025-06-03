import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    {
      title: 'Library Management System',
      description: 'React + Node.js + MySQL based system for managing books.',
      link: 'https://github.com/yourusername/library-project'
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio using React and Bootstrap.',
      link: 'https://yourportfolio.com'
    }
  ];

  return (
    <div id="projects" className="py-5 bg-light">
      <Container>
        <h2>Projects</h2>
        <Row>
          {projectList.map((proj, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                  <Button variant="primary" href={proj.link} target="_blank">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
