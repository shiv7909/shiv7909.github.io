import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-background-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 32px', color: 'var(--color-text-primary)' }}>Ready to list your property?</h2>
        <button style={{ padding: '16px 40px', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: '600', cursor: 'pointer', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="hover:opacity-90">
          List Property <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
