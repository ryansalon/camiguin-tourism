"use client";

import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaCompass } from 'react-icons/fa';

const AppNavbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Initialize state but don't depend on it for the first render to match server
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      setScrolled(window.scrollY > 50);
    } else {
      setScrolled(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { href: "/", label: "Discover" },
    { href: "/search", label: "Destinations" },
    { href: "/saved", label: "My Travel" },
  ];

  // Helper to determine text color
  const getTextColorClass = (isActive: boolean) => {
    if (scrolled) {
      return isActive ? 'text-primary' : 'text-dark hover-primary';
    }
    return isActive ? 'text-white' : 'text-white-50 hover-white';
  };

  const getBrandColorClass = () => {
    return scrolled ? 'text-dark' : 'text-white';
  };

  const getIconBgClass = () => {
    return scrolled ? 'bg-primary text-white' : 'bg-white text-primary';
  };

  // Prevent flash or hydration mismatch by using mounted state for dynamic classes if needed
  // but for simple classes it's usually fine to just let the client update after hydration.
  
  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`transition-all duration-500 py-3 ${scrolled ? 'glass-nav shadow-sm py-2' : 'bg-transparent'}`}
    >
      <Container>
        <Navbar.Brand as={Link as any} href="/" className="d-flex align-items-center gap-2">
          <motion.div 
            className={`d-flex align-items-center justify-content-center rounded-circle p-2 shadow-sm ${getIconBgClass()}`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <FaCompass size={22} />
          </motion.div>
          <span className={`h4 mb-0 fw-black letter-spacing-tight font-heading ${getBrandColorClass()}`}>
            Camiguin<span className={scrolled ? 'text-primary' : 'text-secondary'}>Tourism</span>
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setIsOpen(!isOpen)}
          className="border-0 shadow-none"
        >
          <div className={`hamburger ${isOpen ? 'open' : ''} ${scrolled ? '' : 'white'}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Nav.Link 
                  as={Link as any}
                  key={link.href}
                  href={link.href} 
                  className={`position-relative px-3 fw-bold transition-all ${getTextColorClass(isActive)}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`position-absolute bottom-0 start-0 w-100 ${scrolled ? 'bg-primary' : 'bg-white'}`}
                      style={{ height: '3px', borderRadius: '4px' }}
                    />
                  )}
                </Nav.Link>
              );
            })}
            
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <Button 
                variant={scrolled ? "primary" : "secondary"} 
                className="rounded-full px-4 fw-bold shadow-sm"
              >
                Plan Your Trip
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
