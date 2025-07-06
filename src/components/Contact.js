import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_csc7gzd',
      'template_fyze43i',
      formRef.current,
      'rk0ub7OlgwbsiibVX'
    ).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <div
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #eef2f3, #8e9eab)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif",
        padding: '3rem 1rem',
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: '700',
            color: '#0d6efd',
            letterSpacing: '1px',
            fontSize: '2.5rem',
          }}
        >
          Let's Connect
        </h2>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              className="shadow-lg p-4 border-0"
              style={{
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <div className="text-center mb-3">
                <FaEnvelopeOpenText size={40} color="#0d6efd" />
              </div>

              {submitted && (
                <Alert variant="success" className="text-center">
                  Thank you! Your message has been sent.
                </Alert>
              )}

              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message..." required />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>

            <div className="text-center mt-4">
              <h5 className="mb-3" style={{ fontWeight: '600' }}>
                Or Find Me Here
              </h5>
              <a
                href="https://www.linkedin.com/in/Deepak-Chitravel"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
                style={{ fontSize: '2rem', color: '#0077b5' }}
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/DeepakChitravel/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
                style={{ fontSize: '2rem', color: '#333' }}
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
