"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Destination } from "@/types";

interface FeaturedDestinationsProps {
  destinations: Destination[];
}

const FeaturedDestinations = ({ destinations }: FeaturedDestinationsProps) => {
  return (
    <section className="section-padding py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase letter-spacing-wide fw-bold mb-3">Popular This Season</h6>
          <h2 className="display-4 fw-black text-dark">Must-Visit Spots</h2>
        </div>
        
        <Row className="g-4">
          {destinations.map((dest) => (
            <Col lg={4} md={6} key={dest.id}>
              <Link href={`/destination/${dest.id}`} className="text-decoration-none">
                <Card className="h-100 border-0 shadow-sm overflow-hidden card-premium">
                  <div style={{ height: '300px' }}>
                    <Card.Img 
                      variant="top" 
                      src={dest.imageUrl} 
                      className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale" 
                      alt={dest.name} 
                    />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <h3 className="h4 fw-bold mb-3 font-heading text-dark">{dest.name}</h3>
                    <p className="text-muted small mb-0">{dest.shortDescription}</p>
                    <div className="mt-4 text-primary fw-bold d-flex align-items-center gap-2">
                      View Details <FaChevronRight size={10} />
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedDestinations;
