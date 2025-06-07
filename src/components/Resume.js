import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div id="resume" className="py-5 bg-light">
      <Container className="text-center">
        <h2 className="mb-3">📄 My Resume</h2>
        <p className="mb-4">Click the button below to download my latest resume in PDF format.</p>

        <Button
  variant="primary"
  href={`${process.env.PUBLIC_URL}/Deepak_Resume.pdf`}
  download
  size="lg"
  className="d-flex align-items-center gap-2 justify-content-center mx-auto"
  style={{ maxWidth: '250px' }}
>
  <FaDownload />
  Download Resume
</Button>

      </Container>
    </div>
  );
};

export default Resume;
