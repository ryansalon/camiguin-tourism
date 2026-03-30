"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaUmbrellaBeach, FaUtensils, FaMountain } from "react-icons/fa";

const QuickStats = () => {
  return (
    <div className="bg-white py-5 shadow-sm border-bottom border-gray-100">
      <Container>
        <Row className="text-center g-4">
          {[
            { icon: FaUmbrellaBeach, label: "20+ Beaches", sub: "Pristine Spots" },
            { icon: FaUtensils, label: "15+ Eats", sub: "Local Cuisines" },
            { icon: FaMountain, label: "7 Volcanoes", sub: "Island Peaks" }
          ].map((stat, i) => (
            <Col key={i} md={4}>
              <div className="d-flex flex-column align-items-center">
                <stat.icon className="text-primary mb-3" size={24} />
                <h4 className="fw-bold text-dark mb-1">{stat.label}</h4>
                <p className="text-muted small mb-0">{stat.sub}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default QuickStats;
