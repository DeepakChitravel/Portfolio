import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div
      id="resume"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Card
          className="p-4 shadow border-0 text-center"
          style={{
            maxWidth: '500px',
            backgroundColor: '#fff',
            borderRadius: '1rem',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0d6efd',
              marginBottom: '1rem',
            }}
          >
            📄 My Resume
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              marginBottom: '1.5rem',
            }}
          >
            Download my latest resume showcasing my skills, certifications, and project experience.
          </p>

          <Button
            variant="primary"
            href={`${process.env.PUBLIC_URL}/Deepak_Resume.pdf`}
            download
            size="lg"
            className="d-flex align-items-center gap-2 justify-content-center mx-auto"
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FaDownload />
            Download Resume
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Resume;
