"use client";

import { Container, Button } from "react-bootstrap";
import dynamic from "next/dynamic";
import { FaCompass } from "react-icons/fa";
import { Destination } from "@/types";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { 
  ssr: false,
  loading: () => <div className="bg-light h-100 min-vh-50 rounded-lg"></div>
});

interface MapSectionProps {
  destinations: Destination[];
}

const MapSection = ({ destinations }: MapSectionProps) => {
  return (
    <section className="bg-light section-padding py-5">
      <Container className="py-5 text-center">
        <h2 className="display-4 fw-black text-dark mb-4">Island Navigator</h2>
        <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          Navigate through the magical island and plan your adventure.
        </p>
        
        <div className="map-container-wrapper p-3 bg-white rounded-5 shadow-sm mb-5">
          <div className="map-container" style={{ height: '600px' }}>
            <MapComponent 
              center={[9.177, 124.717]} 
              zoom={11} 
              destinations={destinations} 
            />
          </div>
        </div>
        
        <Button variant="primary" size="lg" className="rounded-full px-5">
          Full Island Map <FaCompass className="ms-2" />
        </Button>
      </Container>
    </section>
  );
};

export default MapSection;
