import React from 'react';
import { MapPin, Maximize, BedDouble, Bath } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$2,450,000',
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    type: 'owner',
    fee: null
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$1,250,000',
    location: 'Austin, TX',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    type: 'agent',
    fee: 'Brokerage: 1.5%'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$3,100,000',
    location: 'Miami, FL',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    type: 'owner',
    fee: null
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$850,000',
    location: 'Portland, OR',
    beds: 2,
    baths: 2,
    sqft: '1,400',
    type: 'agent',
    fee: 'Brokerage: 2%'
  }
];

const FeaturedListings = () => {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-background-primary)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px', color: 'var(--color-text-primary)' }}>Featured Spaces</h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0 }}>Curated properties with transparent pricing.</p>
          </div>
          <button style={{ background: 'transparent', border: 'none', fontSize: '15px', color: 'var(--color-text-primary)', cursor: 'pointer', fontWeight: 500 }}>
            View all properties →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {properties.map((prop) => (
            <div key={prop.id} className="listing-card">
              <div className="listing-image-container">
                <img src={prop.image} alt={prop.location} className="listing-image" />
                <div className="listing-badge-container">
                  {prop.type === 'owner' ? (
                    <span className="badge badge-owner">BY OWNER (0% Brokerage)</span>
                  ) : (
                    <span className="badge badge-agent">AGENT LISTED</span>
                  )}
                </div>
              </div>
              
              <div className="card-content">
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 4px', color: 'var(--color-text-primary)' }}>{prop.price}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-secondary)' }}>
                    <MapPin size={14} />
                    <span style={{ fontSize: '14px' }}>{prop.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderTop: '1px solid var(--color-border-tertiary)', borderBottom: '1px solid var(--color-border-tertiary)', padding: '12px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BedDouble size={16} color="var(--color-text-tertiary)" />
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{prop.beds} BHK</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Bath size={16} color="var(--color-text-tertiary)" />
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{prop.baths} Bath</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Maximize size={16} color="var(--color-text-tertiary)" />
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{prop.sqft} sq.ft</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {prop.type === 'agent' && (
                    <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: '8px' }}>
                      * {prop.fee}
                    </div>
                  )}
                  <button className={`btn w-full ${prop.type === 'owner' ? 'btn-primary' : 'btn-secondary'}`}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
