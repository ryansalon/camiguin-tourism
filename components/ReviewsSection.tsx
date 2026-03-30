"use client";

import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaStar, FaUserCircle } from 'react-icons/fa';

interface Review {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
}

const mockReviews: Review[] = [
  { id: 1, user: "Alice Walker", rating: 5, date: "Oct 12, 2023", comment: "Absolutely breathtaking views! The water was crystal clear." },
  { id: 2, user: "John Doe", rating: 4, date: "Sep 28, 2023", comment: "Great experience, but a bit crowded during the weekend." },
  { id: 3, user: "Maria Garcia", rating: 5, date: "Aug 15, 2023", comment: "A must-visit! The sunset here is magical." },
];

export default function ReviewsSection({ destinationName }: { destinationName: string }) {
  return (
    <div className="mt-5">
      <h3 className="fw-bold mb-4">Reviews for {destinationName}</h3>
      
      <Row className="mb-4">
        <Col md={4} className="text-center mb-3 mb-md-0">
          <div className="display-1 fw-bold text-warning">4.7</div>
          <div className="text-warning mb-2">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-muted" />
          </div>
          <div className="text-muted">Based on 128 reviews</div>
        </Col>
        <Col md={8}>
           {[5, 4, 3, 2, 1].map(num => (
             <div className="d-flex align-items-center mb-1" key={num}>
               <span className="me-2 small fw-bold">{num}</span>
               <FaStar className="text-warning me-2 small" />
               <ProgressBar now={num === 5 ? 70 : num === 4 ? 20 : 5} className="flex-grow-1" style={{ height: '8px' }} variant="warning" />
             </div>
           ))}
        </Col>
      </Row>

      <div className="d-flex flex-column gap-3">
        {mockReviews.map(review => (
          <Card key={review.id} className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <FaUserCircle size={40} className="text-muted me-3" />
                  <div>
                    <h6 className="mb-0 fw-bold">{review.user}</h6>
                    <small className="text-muted">{review.date}</small>
                  </div>
                </div>
                <div className="text-warning">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <p className="mb-0 text-secondary">{review.comment}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
