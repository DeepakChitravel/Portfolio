import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import {
  FaLinkedin,
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaBriefcase,
  FaGlobe,
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          {submitted && <Alert variant="success">Message sent successfully!</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>

          {/* Social Icons */}
          <div className="text-center mt-4">
            <h5>Or connect with me:</h5>
            <a
              href="https://www.linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              style={{ fontSize: '1.8rem', color: '#0077b5' }}
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="mx-3"
              style={{ fontSize: '1.8rem', color: '#db4437' }}
              title="Gmail"
            >
              <FaGoogle />
            </a>

            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              style={{ fontSize: '1.8rem', color: '#333' }}
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/your-instagram-id"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              style={{ fontSize: '1.8rem', color: '#e1306c' }}
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.naukri.com/mnjuser/profile?id=your-naukri-id"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              style={{ fontSize: '1.8rem', color: '#18a1b7' }}
              title="Naukri"
            >
              <FaBriefcase />
            </a>

            <a
              href="https://my.indeed.com/p/your-indeed-id"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              style={{ fontSize: '1.8rem', color: '#2557a7' }}
              title="Indeed"
            >
              <FaGlobe />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
