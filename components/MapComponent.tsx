"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaMapMarkerAlt, FaStreetView, FaShip, FaPlane, FaStar, FaChevronRight } from 'react-icons/fa';
import { Destination } from '@/types';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

// Component to handle map center updates
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [center, zoom, map]);
  return null;
}

// Create custom photo marker icons
const createPhotoIcon = (dest: Destination, isSelected: boolean) => {
  const iconMarkup = renderToStaticMarkup(
    <div className={`custom-photo-marker ${isSelected ? 'selected' : ''}`} style={{
      position: 'relative',
      width: isSelected ? '60px' : '50px',
      height: isSelected ? '60px' : '50px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: `3px solid ${isSelected ? '#FF8C42' : 'white'}`,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        backgroundColor: 'white'
      }}>
        <img 
          src={dest.imageUrl} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt={dest.name}
        />
      </div>
      {/* Pointer Tip */}
      <div style={{
        position: 'absolute',
        bottom: '-6px',
        left: '50%',
        transform: 'translateX(-50%) rotate(45deg)',
        width: '12px',
        height: '12px',
        backgroundColor: isSelected ? '#FF8C42' : 'white',
        borderRight: `2px solid ${isSelected ? '#FF8C42' : 'rgba(0,0,0,0.1)'}`,
        borderBottom: `2px solid ${isSelected ? '#FF8C42' : 'rgba(0,0,0,0.1)'}`,
        zIndex: -1
      }} />
    </div>
  );
  
  return L.divIcon({
    html: iconMarkup,
    className: 'photo-marker-icon',
    iconSize: isSelected ? [60, 66] : [50, 56],
    iconAnchor: isSelected ? [30, 66] : [25, 56],
    popupAnchor: [0, -60]
  });
};

const entryPointIcon = (icon: React.ReactNode, color: string) => L.divIcon({
  html: renderToStaticMarkup(
    <div className="entry-point-marker shadow-lg">
      <div className="rounded-circle d-flex align-items-center justify-content-center border-3 bg-white" 
           style={{ width: '40px', height: '40px', borderColor: color, color: color }}>
        {icon}
      </div>
    </div>
  ),
  className: 'custom-entry-icon',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

interface MapProps {
  center: [number, number];
  zoom: number;
  destinations: Destination[];
  selectedId?: string;
  userLocation?: [number, number];
}

export default function MapComponent({ center, zoom, destinations, selectedId, userLocation }: MapProps) {
  const selectedDest = useMemo(() => destinations.find(d => d.id === selectedId), [destinations, selectedId]);

  const benoniMarkerIcon = useMemo(() => entryPointIcon(<FaShip size={18} />, '#00A8CC'), []);
  const airportMarkerIcon = useMemo(() => entryPointIcon(<FaPlane size={18} />, '#00A8CC'), []);

  return (
    <div className="position-relative h-100 w-100 overflow-hidden rounded-lg shadow-inner">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%", zIndex: 1, backgroundColor: '#1a1a1a' }}
      >
        <ChangeView center={center} zoom={zoom} />
        {/* Realistic Satellite Hybrid Tiles */}
        <TileLayer
          attribution='&copy; Google'
          url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        />

        {/* Static Entry Points */}
        <Marker position={[9.1377, 124.7928]} icon={benoniMarkerIcon}>
           <Popup className="custom-popup" closeButton={false}>
             <div className="p-2 text-center">
               <span className="small fw-bold text-dark">Benoni Port</span>
             </div>
           </Popup>
        </Marker>
        <Marker position={[9.2536, 124.7069]} icon={airportMarkerIcon}>
           <Popup className="custom-popup" closeButton={false}>
             <div className="p-2 text-center">
               <span className="small fw-bold text-dark">Camiguin Airport</span>
             </div>
           </Popup>
        </Marker>
        
        {/* Route Line */}
        {userLocation && selectedDest && (
          <Polyline 
            positions={[userLocation, [selectedDest.latitude, selectedDest.longitude]]}
            pathOptions={{ color: '#FF8C42', weight: 5, opacity: 0.9, lineCap: 'round', dashArray: '1, 10' }} 
          />
        )}

        {destinations.map((dest) => (
          <Marker 
              key={dest.id} 
              position={[dest.latitude, dest.longitude]} 
              icon={createPhotoIcon(dest, selectedId === dest.id)}
              zIndexOffset={selectedId === dest.id ? 1000 : 0}
          >
            <Popup className="custom-popup" closeButton={false}>
              <div className="card border-0 overflow-hidden shadow-none" style={{ width: '220px' }}>
                <div style={{ height: "120px" }}>
                  <img src={dest.imageUrl} alt={dest.name} className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="text-primary x-small fw-bold text-uppercase">{dest.category}</span>
                    <span className="small fw-bold"><FaStar className="text-warning mb-1" size={12} /> {dest.rating}</span>
                  </div>
                  <h6 className="fw-bold mb-3">{dest.name}</h6>
                  <Link href={`/destination/${dest.id}`} className="btn btn-primary btn-sm w-100 rounded-full py-2 fw-bold">
                    View Destination
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <style jsx global>{`
        .x-small { font-size: 0.65rem; }
        .leaflet-container { background: #000 !important; }
        .photo-marker-icon { background: none !important; border: none !important; }
        .custom-photo-marker.selected { z-index: 1000 !important; }
        .leaflet-popup-content-wrapper { border-radius: 16px !important; }
      `}</style>

      {/* Modern Overlay Information */}
      {selectedDest && (
        <div 
          className="position-absolute bottom-0 start-0 m-4 p-4 glass rounded-5 shadow-xl transition-all duration-500"
          style={{ zIndex: 1000, maxWidth: "320px", border: '1px solid rgba(255,255,255,0.4)' }}
        >
          <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
             <div className="bg-primary p-2 rounded-4 text-white">
                <FaMapMarkerAlt size={20} />
             </div>
             <div>
                <h5 className="fw-bold mb-0">{selectedDest.name}</h5>
                <small className="text-muted">{selectedDest.address}</small>
             </div>
          </div>
          
          <div className="mb-3">
             <p className="small text-muted mb-3">{selectedDest.shortDescription || selectedDest.description.substring(0, 80) + '...'}</p>
             <div className="d-flex flex-wrap gap-2">
                {selectedDest.tags?.slice(0, 2).map((tag, i) => (
                   <span key={i} className="badge bg-light text-muted fw-normal px-2 py-1">#{tag}</span>
                ))}
             </div>
          </div>
          
          <Button as={Link as any} href={`/destination/${selectedDest.id}`} variant="secondary" className="w-100 rounded-full py-2 fw-bold d-flex align-items-center justify-content-center gap-2">
             View Full Details <FaChevronRight size={12} />
          </Button>
        </div>
      )}
    </div>
  );
}
