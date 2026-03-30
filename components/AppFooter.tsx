"use client";

import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaCompass } from 'react-icons/fa';
import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 position-relative overflow-hidden">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      <Container className="position-relative z-1">
        <Row className="g-5 mb-5">
          <Col lg={4}>
            <div className="d-flex align-items-center mb-4">
              <div className="bg-white text-dark rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                <FaCompass size={24} />
              </div>
              <div>
                <h4 className="mb-0 fw-bold font-heading">Camiguin<span className="text-warning">Tourism</span></h4>
                <small className="text-white-50">Island Born of Fire</small>
              </div>
            </div>
            <p className="text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
              Your ultimate guide to the mystical island of Camiguin. Discover pristine beaches, waterfalls, and volcanoes in this untouched paradise.
            </p>
            <div className="d-flex gap-3">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-white bg-opacity-10 text-white p-2 rounded-circle hover-lift d-flex align-items-center justify-content-center" style={{width: 40, height: 40, transition: 'all 0.3s'}}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Col>
          
          <Col sm={6} lg={2} className="offset-lg-1">
            <h5 className="fw-bold mb-4 text-warning">Explore</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {['Home', 'Destinations', 'Saved Places', 'Itinerary Planner'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white-50 text-decoration-none hover-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col sm={6} lg={2}>
            <h5 className="fw-bold mb-4 text-warning">Experience</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {['Beaches', 'Waterfalls', 'Volcanoes', 'Heritage', 'Diving'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3}>
            <h5 className="fw-bold mb-4 text-warning">Stay Updated</h5>
            <p className="text-white-50 mb-3 small">Subscribe for secret spots and seasonal alerts.</p>
            <div className="position-relative">
              <input 
                type="email" 
                className="form-control bg-white bg-opacity-10 border-0 text-white placeholder-white-50 rounded-pill py-3 px-4 pe-5" 
                placeholder="Email address" 
              />
              <button className="btn btn-warning rounded-circle position-absolute top-0 end-0 m-1 d-flex align-items-center justify-content-center shadow-sm" style={{width: 40, height: 40}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </Col>
        </Row>
        
        <div className="border-top border-white border-opacity-10 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="small text-white-50 mb-2 mb-md-0">&copy; {new Date().getFullYear()} Camiguin Tourism Office.</p>
          <div className="d-flex gap-4 small text-white-50">
            <a href="#" className="text-reset text-decoration-none hover-white">Privacy</a>
            <a href="#" className="text-reset text-decoration-none hover-white">Terms</a>
            <a href="#" className="text-reset text-decoration-none hover-white">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}