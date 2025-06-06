import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaTools, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      title: 'Doctor Online Appointment System',
      duration: 'Feb 2024 – Apr 2024',
      tech: 'PHP, HTML, CSS, MySQL (Workbench), XAMPP',
      points: [
        'Developed a web-based appointment system for booking consultations with doctors.',
        'Built responsive UI and integrated backend using MySQL Workbench via XAMPP.',
      ],
    },
    {
      title: 'Library Management System',
      duration: 'Nov 2024 – May 2025',
      tech: 'ReactJS, Bootstrap, CSS, Node.js, Express.js, MySQL (CMD)',
      points: [
        'Built a full-stack app for managing books, users, and borrow/return records.',
        'Implemented role-based logins (Admin, Librarian, User) with individual dashboards.',
        'Used MySQL for tracking books, users, and transaction history.',
      ],
    },
    {
      title: 'Movie Request Telegram Bot',
      duration: 'Mar 2025',
      tech: 'Python (Flask), HTML, CSS, Bootstrap, MySQL, Render.com',
      points: [
        'Created a Telegram bot to respond to movie requests with download/streaming links.',
        'Deployed service using Render.com for public access.',
      ],
    },
    {
      title: 'Question Paper & Online Exam System (In Progress)',
      duration: 'Apr 2025 – Present',
      tech: 'Python (Flask), HTML, CSS, Bootstrap, MySQL',
      points: [
        'Developing a platform for faculty to securely create and manage question papers.',
        'Building online examination module with real-time evaluation and student login.',
      ],
      institution: 'A.V.V.M Sri Pushpam College',
    },
  ];

  return (
    <div id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center border-bottom pb-3">🚀 Projects</h2>
        <Row>
          {projectList.map((proj, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm border-0 custom-card">
                <Card.Body>
                  <Card.Title className="text-primary fs-5">{proj.title}</Card.Title>

                  <Card.Text className="text-muted mb-2">
                    <FaCalendarAlt className="me-2 text-secondary" />
                    <strong>{proj.duration}</strong>
                  </Card.Text>

                  {proj.institution && (
                    <Card.Text className="text-muted mb-2">
                      <FaUniversity className="me-2 text-secondary" />
                      <strong>{proj.institution}</strong>
                    </Card.Text>
                  )}

                  <Card.Text className="mb-2">
                    <FaTools className="me-2 text-secondary" />
                    <strong>Technologies:</strong> {proj.tech}
                  </Card.Text>

                  <ul className="ps-3">
                    {proj.points.map((point, i) => (
                      <li key={i} className="mb-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .custom-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        h2::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background-color: #0d6efd;
          margin: 8px auto 0;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
