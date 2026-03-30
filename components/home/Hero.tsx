"use client";

import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="position-relative vh-100 d-flex align-items-center overflow-hidden">
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 z-n1"
        style={{
          backgroundImage: 'url("/images/shutterstock-camiguin-island.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-2 fw-black text-white mb-4 letter-spacing-tight">
                Experience the <br />
                <span className="text-secondary">Magic of Camiguin</span>
              </h1>
              <p className="lead text-white opacity-90 mb-5 fs-4 fw-light">
                Discover the "Island Born of Fire" — a paradise of pristine beaches, 
                seven volcanoes, and mystical springs.
              </p>
              <Button as={Link} href="/search" variant="secondary" size="lg" className="px-5 py-3 rounded-full shadow-lg">
                Explore Destinations
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
