"use client";

import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Card, Button, Badge } from 'react-bootstrap';
import { destinations } from '@/data/destinations';
import Link from 'next/link';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Spot', 'Hotel', 'Restaurant', 'Activity'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="py-5 mt-5 pt-5">
      <div className="section-title text-start mb-5">
        <h1 className="display-4 fw-bold">Explore Destinations</h1>
        <p className="lead text-muted">Discover the perfect spot for your next adventure in Camiguin.</p>
      </div>
      
      {/* Filters */}
      <Card className="border-0 shadow-sm p-4 mb-5 rounded-4">
        <Row className="g-3">
          <Col md={8}>
            <Form.Group>
              <Form.Label className="fw-bold small text-uppercase ls-wide">Search by Name</Form.Label>
              <InputGroup className="shadow-sm rounded-pill overflow-hidden border">
                <InputGroup.Text className="bg-white border-0">
                   <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control 
                  placeholder="Where would you like to go?" 
                  className="border-0 py-3 shadow-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label className="fw-bold small text-uppercase ls-wide">Category</Form.Label>
              <Form.Select 
                className="py-3 rounded-pill shadow-sm border"
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card>

      {/* Results */}
      <Row className="g-4">
        {filteredDestinations.length > 0 ? (
            filteredDestinations.map(dest => (
            <Col md={6} lg={4} key={dest.id}>
                <Card className="h-100 hover-shadow">
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
                    <Card.Text className="text-muted mb-4 text-truncate">
                        {dest.description}
                    </Card.Text>
                    <Button as={Link} href={`/destination/${dest.id}`} variant="outline-primary" className="w-100 fw-bold border-2">View Details</Button>
                </Card.Body>
                </Card>
            </Col>
            ))
        ) : (
            <Col>
                <div className="text-center py-5">
                    <h3>No destinations found</h3>
                    <p className="text-muted">Try adjusting your search filters.</p>
                </div>
            </Col>
        )}
      </Row>
    </Container>
  );
}
