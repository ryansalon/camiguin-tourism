"use client";

import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { destinations } from '@/data/destinations';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHeart, FaSadTear } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedDestinations');
    if (stored) {
      setSavedIds(JSON.parse(stored));
    }
  }, []);

  const savedDestinations = destinations.filter(d => savedIds.includes(d.id));

  const removeFavorite = (id: string) => {
    const newIds = savedIds.filter(savedId => savedId !== id);
    setSavedIds(newIds);
    localStorage.setItem('savedDestinations', JSON.stringify(newIds));
  };

  return (
    <Container className="py-5 mt-5 pt-5">
      <div className="section-title text-start mb-5">
        <h1 className="display-4 fw-bold">My Saved Destinations</h1>
        <p className="lead text-muted">Your personal list of must-visit places in Camiguin.</p>
      </div>
      
      {savedDestinations.length > 0 ? (
        <Row className="g-4">
          {savedDestinations.map((dest, index) => (
            <Col md={6} lg={4} key={dest.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-100 hover-shadow position-relative">
                  <Button 
                    variant="light" 
                    className="position-absolute top-0 end-0 m-3 rounded-circle shadow text-danger border-0"
                    onClick={() => removeFavorite(dest.id)}
                    style={{ width: '40px', height: '40px', padding: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <FaHeart />
                  </Button>
                  
                  <div className="overflow-hidden rounded-top-4">
                    <Card.Img variant="top" src={dest.imageUrl} className="card-img-top" />
                  </div>
                  <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                          <Badge bg="info">{dest.category}</Badge>
                          <span className="text-warning fw-bold small">⭐ {dest.rating}</span>
                      </div>
                      <Card.Title className="fs-4 mb-2">{dest.name}</Card.Title>
                      <Card.Text className="text-muted small mb-3">
                          <FaMapMarkerAlt className="me-1" /> {dest.address}
                      </Card.Text>
                      <Button as={Link} href={`/destination/${dest.id}`} variant="outline-primary" className="w-100 fw-bold border-2">View Details</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center py-5">
            <FaSadTear size={50} className="text-muted mb-3" />
            <h3>No saved destinations yet</h3>
            <p className="text-muted">Start exploring and save your favorite spots!</p>
            <Button as={Link} href="/search" variant="primary" className="mt-2">Find Places</Button>
        </div>
      )}
    </Container>
  );
}
