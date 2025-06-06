import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import {
  FaLinkedin,
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaBriefcase,
  FaGlobe,
} from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_csc7gzd',       // Replace with your actual Service ID
      'template_fyze43i',      // Replace with your Template ID
      formRef.current,
      'rk0ub7OlgwbsiibVX'        // Replace with your Public Key
    ).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        e.target.reset(); // Clears the form
        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          {submitted && <Alert variant="success">Message sent successfully!</Alert>}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message here..." required />
            </Form.Group>

            <Button variant="primary" type="submit">Send Message</Button>
          </Form>

          {/* Social Icons */}
          <div className="text-center mt-4">
            <h5>Or connect with me:</h5>
            <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ fontSize: '1.8rem', color: '#0077b5' }} title="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:your-email@gmail.com" className="mx-3" style={{ fontSize: '1.8rem', color: '#db4437' }} title="Gmail"><FaGoogle /></a>
            <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ fontSize: '1.8rem', color: '#333' }} title="GitHub"><FaGithub /></a>
            <a href="https://instagram.com/your-instagram-id" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ fontSize: '1.8rem', color: '#e1306c' }} title="Instagram"><FaInstagram /></a>
            <a href="https://www.naukri.com/mnjuser/profile?id=your-naukri-id" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ fontSize: '1.8rem', color: '#18a1b7' }} title="Naukri"><FaBriefcase /></a>
            <a href="https://my.indeed.com/p/your-indeed-id" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ fontSize: '1.8rem', color: '#2557a7' }} title="Indeed"><FaGlobe /></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
