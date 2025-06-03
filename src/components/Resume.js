import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Resume = () => {
  return (
    <div id="resume" className="py-5">
      <Container>
        <h2>Resume</h2>
        <p>You can download my resume using the button below.</p>
        <Button variant="success" href="/resume.pdf" download>Download Resume</Button>
      </Container>
    </div>
  );
};

export default Resume;
