import React, { useState } from "react";
import { Container, Row, Col, Modal, Tooltip, OverlayTrigger } from "react-bootstrap";

const certificates = [
  { name: "HP Life - AI for Beginners", url: "/HPLife.png" },
  { name: "Citi - Software Development", url: "/citi.png" },
  { name: "AWS - Solution Architect", url: "/AWS.png" },
  { name: "Responsive Web Design", url: "/freecodecamp.png" },
  { name: "Hawett Packard Enterprise", url: "/hawett.png" },
  { name: "Microsoft - Generative AI", url: "/Microsoft.png" },
  { name: "Postman for Beginner", url: "/Postman.png" },
  { name: "Twilio", url: "/twilio.png" },
];

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleShow = (cert) => {
    setSelected(cert);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div
      id="certificates"
      className="py-5"
      style={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}
    >
      <Container>
        <h2
          className="text-center fw-bold mb-5"
          style={{
            letterSpacing: "2px",
            fontSize: "2.5rem",
            color: "#222",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          My Certificates
        </h2>

        <Row className="justify-content-center g-4">
          {certificates.map((cert, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="d-flex justify-content-center"
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${index}`}>{cert.name}</Tooltip>}
              >
                <div
                  onClick={() => handleShow(cert)}
                  style={{
                    width: "130px",
                    height: "130px",
                    backgroundColor: "#fff",
                    borderRadius: "1rem",
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  className="certificate-logo"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(0,0,0,0.15), 0 0 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.05)";
                  }}
                >
                  <img
                    src={cert.url}
                    alt={cert.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: "0.75rem",
                      filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))",
                    }}
                    loading="lazy"
                  />
                </div>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          size="xl"
          centered
          scrollable
          contentClassName="rounded-4 shadow-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selected?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selected && selected.url.toLowerCase().endsWith(".pdf") ? (
              <iframe
                src={selected.url}
                title={selected.name}
                style={{ width: "100%", height: "80vh", border: "none" }}
              />
            ) : (
              <img
                src={selected?.url}
                alt={selected?.name}
                className="img-fluid rounded"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Certificates;
