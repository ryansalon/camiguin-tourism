/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from 'next/navigation';
import { destinations } from '@/data/destinations';
import { Container, Row, Col, Card, Badge, Button, ListGroup } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaClock, FaMapMarkerAlt, FaStar, FaShip, 
  FaPlane, FaRoute, FaChevronLeft, FaHeart, 
  FaShareAlt, FaCalendarAlt, FaCheckCircle 
} from 'react-icons/fa';
import Link from 'next/link';
import ReviewsSection from '@/components/ReviewsSection';

// Dynamically import Map to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/MapComponent'), { 
  ssr: false,
  loading: () => <div className="bg-light rounded-4 h-100" style={{ minHeight: '400px' }}></div>
});

export default function DestinationDetail() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : null;
  
  const destination = useMemo(() => destinations.find(d => d.id === id), [id]);
  const [activeStart, setActiveStart] = useState<'benoni' | 'airport'>('benoni');
  const [isSaved, setIsSaved] = useState(false);

  if (!destination) {
    return (
      <Container className="py-5 mt-5 pt-5 text-center">
        <div className="py-5">
          <h2 className="display-4 fw-bold mb-4">Destination not found</h2>
          <p className="text-muted mb-5">The place you are looking for might have been moved or renamed.</p>
          <Button as={Link as any} href="/search" variant="primary" className="rounded-full px-5">Back to Destinations</Button>
        </div>
      </Container>
    );
  }

  const LOCATIONS = {
    benoni: { name: 'Benoni Port', lat: 9.1377, lng: 124.7928, icon: <FaShip /> },
    airport: { name: 'Camiguin Airport', lat: 9.2536, lng: 124.7069, icon: <FaPlane /> }
  };

  const calculateInfo = (point: 'benoni' | 'airport') => {
    const start = LOCATIONS[point];
    const R = 6371; 
    const dLat = (destination.latitude - start.lat) * Math.PI / 180;
    const dLon = (destination.longitude - start.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(start.lat * Math.PI / 180) * Math.cos(destination.latitude * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const dist = R * c * 1.25;
    const minutes = Math.round((dist / 35) * 60);
    
    const arrivalTime = new Date();
    arrivalTime.setMinutes(arrivalTime.getMinutes() + minutes);
    
    return {
        dist: dist.toFixed(1) + " km",
        time: minutes + " mins",
        arrivalTime: arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const activeInfo = calculateInfo(activeStart);

  const mockDirections = [
    `Start from ${LOCATIONS[activeStart].name}`,
    `Head towards the Circumferential Road`,
    `Continue for ${activeInfo.dist} with scenic views`,
    `Arrive at ${destination.name} around ${activeInfo.arrivalTime}`
  ];

  return (
    <main className="bg-light min-vh-100">
      {/* Light & Clean Header */}
      <section className="position-relative overflow-hidden pt-5 bg-white" style={{ minHeight: '500px' }}>
        {/* Subtle Blurred Background Layer */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 z-0"
          style={{
            backgroundImage: `url(${destination.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(60px) opacity(0.1)',
            transform: 'scale(1.1)'
          }}
        />
        
        <Container className="position-relative z-1 pt-5 pb-5">
          <Link href="/search" className="text-dark text-decoration-none d-inline-flex align-items-center gap-2 border px-4 py-2 rounded-full mb-4 bg-white shadow-sm hover-lift">
            <FaChevronLeft className="text-primary" /> Back to Explore
          </Link>
          
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-2 order-lg-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="position-relative"
              >
                <div className="p-2 bg-white rounded-5 shadow-lg border border-gray-100">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name} 
                    className="w-100 h-100 object-fit-cover rounded-4"
                    style={{ maxHeight: '450px', width: 'auto', minWidth: '100%' }}
                  />
                </div>
              </motion.div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge bg="primary-light" className="text-primary mb-3 px-3 py-2 rounded-full fw-bold border border-primary border-opacity-10">
                  {destination.category}
                </Badge>
                <h1 className="display-3 fw-black mb-3 letter-spacing-tight text-dark">
                  {destination.name}
                </h1>
                <div className="d-flex flex-wrap align-items-center gap-4 text-muted">
                  <span className="d-flex align-items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" /> {destination.address}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <FaStar className="text-warning" /> {destination.rating} ({destination.reviewCount || 0} reviews)
                  </span>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="g-4">
          <Col lg={8}>
            {/* Overview Card */}
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0">Overview</h3>
                <div className="d-flex gap-2">
                  <Button 
                    variant={isSaved ? "danger" : "outline-danger"} 
                    className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '45px', height: '45px' }}
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <FaHeart fill={isSaved ? "white" : "currentColor"} />
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '45px', height: '45px' }}
                  >
                    <FaShareAlt />
                  </Button>
                </div>
              </div>
              
              <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
                {destination.description}
              </p>
              
              <div className="row g-3 mb-4">
                {destination.features?.map((feature, i) => (
                  <Col sm={6} md={4} key={i}>
                    <div className="d-flex align-items-center gap-2 p-3 bg-light rounded-3">
                      <FaCheckCircle className="text-primary" />
                      <span className="small fw-bold">{feature}</span>
                    </div>
                  </Col>
                ))}
              </div>

              <hr className="my-5 opacity-10" />
              
              <h4 className="fw-bold mb-4">Best Time to Visit</h4>
              <div className="p-4 rounded-4 bg-primary-light border-start border-4 border-primary">
                <div className="d-flex gap-3 align-items-center">
                  <FaCalendarAlt className="text-primary" size={24} />
                  <div>
                    <p className="mb-0 fw-bold text-dark">{destination.bestTime || "Year-round"}</p>
                    <small className="text-muted">Recommended for the best experience</small>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map & Directions */}
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4">
              <div className="p-4 bg-white border-bottom">
                <h4 className="fw-bold mb-0">Location & Getting There</h4>
              </div>
              <div style={{ height: '400px' }}>
                <MapComponent 
                  center={[destination.latitude, destination.longitude]} 
                  zoom={14} 
                  destinations={[destination]}
                  selectedId={destination.id}
                  userLocation={[LOCATIONS[activeStart].lat, LOCATIONS[activeStart].lng]}
                />
              </div>
              <div className="p-4 bg-white">
                <p className="small text-muted text-uppercase letter-spacing-wide fw-bold mb-3">Directions from {LOCATIONS[activeStart].name}</p>
                <div className="d-flex flex-column gap-3">
                  {mockDirections.map((step, i) => (
                    <div key={i} className="d-flex gap-3">
                      <div className="small fw-bold text-primary">{i + 1}.</div>
                      <div className="small text-muted">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Reviews Section */}
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <ReviewsSection destinationName={destination.name} />
            </Card>
          </Col>

          <Col lg={4}>
            {/* Travel Calculator Card */}
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden sticky-top" style={{ top: '100px' }}>
              <div 
                className="p-4 shadow-sm"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
              >
                <h5 className="fw-bold mb-0 text-white">Plan Your Visit</h5>
              </div>
              <Card.Body className="p-4">
                <div className="mb-4">
                  <label className="small text-muted text-uppercase fw-bold mb-3 d-block">Starting Point</label>
                  <Row className="g-2">
                    <Col xs={6}>
                      <Button 
                        variant={activeStart === 'benoni' ? "primary" : "outline-primary"}
                        className={`w-100 py-3 rounded-4 border-2 ${activeStart === 'benoni' ? 'shadow-md' : 'bg-light border-opacity-10'}`}
                        onClick={() => setActiveStart('benoni')}
                      >
                        <FaShip size={24} className={`mb-2 ${activeStart === 'benoni' ? 'text-white' : 'text-primary'}`} />
                        <div className={`small fw-bold ${activeStart === 'benoni' ? 'text-white' : 'text-primary'}`}>Benoni Port</div>
                      </Button>
                    </Col>
                    <Col xs={6}>
                      <Button 
                        variant={activeStart === 'airport' ? "primary" : "outline-primary"}
                        className={`w-100 py-3 rounded-4 border-2 ${activeStart === 'airport' ? 'shadow-md' : 'bg-light border-opacity-10'}`}
                        onClick={() => setActiveStart('airport')}
                      >
                        <FaPlane size={24} className={`mb-2 ${activeStart === 'airport' ? 'text-white' : 'text-primary'}`} />
                        <div className={`small fw-bold ${activeStart === 'airport' ? 'text-white' : 'text-primary'}`}>Airport</div>
                      </Button>
                    </Col>
                  </Row>
                </div>

                <div className="bg-light p-4 rounded-4 mb-4">
                  <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                    <span className="text-muted small">Travel Time</span>
                    <span className="fw-black text-primary fs-5">{activeInfo.time}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                    <span className="text-muted small">Distance</span>
                    <span className="fw-bold">{activeInfo.dist}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted small">ETA</span>
                    <span className="fw-bold">{activeInfo.arrivalTime}</span>
                  </div>
                </div>

                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="px-0 py-3 bg-transparent border-light d-flex align-items-center gap-3">
                    <div className="p-2 rounded-circle bg-primary-light text-primary">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <div className="small text-muted">Operating Hours</div>
                      <div className="fw-bold">{destination.operatingHours || "8:00 AM - 5:00 PM"}</div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>

                <Button variant="secondary" size="lg" className="w-100 rounded-full fw-bold py-3 shadow-sm">
                  Book a Tour Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
