"use client";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterCTA = () => {
  return (
    <section className="section-padding py-5 bg-white">
      <Container className="py-5 text-center">
        <h2 className="display-4 fw-black text-dark mb-3">Join the Adventure</h2>
        <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          Get exclusive travel tips, secret spot alerts, and the latest news from Camiguin.
        </p>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form className="d-flex flex-column flex-sm-row gap-2 p-2 bg-light rounded-full border">
              <Form.Control 
                type="email" 
                placeholder="Email address" 
                className="rounded-full border-0 px-4 py-3 bg-transparent shadow-none"
              />
              <Button variant="primary" className="rounded-full px-5 py-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                Join <FaPaperPlane size={14} />
              </Button>
            </Form>
            <p className="text-muted mt-3 small">No spam, just island magic. Unsubscribe anytime.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsletterCTA;
