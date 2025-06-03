import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

const certificates = [
  { name: 'HP Life - AI for Beginners', url: '/HPLife.png', icon: 'cpu-fill' },
  { name: 'Citi - Software Development', url: '/citi.png', icon: 'code-slash' },
  { name: 'AWS - Solution Architect', url: '/AWS.png', icon: 'cloud-upload-fill' },
  { name: 'Responsive Web Design', url: '/freecodecamp.png', icon: 'devices' },
  { name: 'Hawett Packard Enterprise', url: '/hawett.png', icon: 'server' },
  { name: 'Microsoft - Generative AI', url: '/Microsoft.png', icon: 'windows' },
  { name: 'Postman for Beginner', url: '/Postman.png', icon: 'envelope-paper-fill' },
  { name: 'Twilio', url: '/twilio.png', icon: 'telephone-fill' },
];

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleShow = (cert) => {
    setSelected(cert);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const isPdf = (url) => url.toLowerCase().endsWith('.pdf');

  return (
    <div id="certificates" className="py-5" style={{ backgroundColor: '#e9ecef' }}>
      <Container>
        <h2 className="text-center text-primary fw-bold mb-5" style={{ letterSpacing: '2px' }}>
          Certificates
        </h2>
        <Row className="justify-content-center g-4">
          {certificates.map((cert, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className="w-100 rounded-3 shadow-sm text-truncate d-flex align-items-center gap-2"
                onClick={() => handleShow(cert)}
                style={{
                  padding: '1rem 1.25rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0d6efd';
                  e.target.style.color = 'white';
                  e.target.style.boxShadow = '0 6px 12px rgba(13,110,253,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#0d6efd';
                  e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
                }}
              >
                <i className={`bi bi-${cert.icon}`} style={{ fontSize: '1.3rem' }}></i>
                <span>{cert.name}</span>
              </Button>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} size="xl" centered scrollable>
          <Modal.Header closeButton>
            <Modal.Title>{selected?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selected && isPdf(selected.url) ? (
              <iframe
                src={selected.url}
                title={selected.name}
                style={{ width: '100%', height: '80vh', border: 'none', borderRadius: '0.5rem' }}
              />
            ) : (
              <img
                src={selected?.url}
                alt={selected?.name}
                className="img-fluid rounded"
                style={{ maxHeight: '80vh', objectFit: 'contain', borderRadius: '0.5rem' }}
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Certificates;
