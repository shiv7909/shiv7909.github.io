import React from 'react';

const Categories = () => {
  return (
    <section className="section browse">
      <div className="section-eyebrow">Properties</div>
      <h2 className="section-headline">Browse by property type</h2>
      <p className="section-sub">From plots to penthouses. All property types in one place, with real verified listings.</p>

      <div className="browse-grid">
        <div className="type-card">
          <div className="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <div className="type-label">Plots</div>
          <div className="type-count">320+ listings</div>
        </div>
        <div className="type-card">
          <div className="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
          </div>
          <div className="type-label">Houses</div>
          <div className="type-count">190+ listings</div>
        </div>
        <div className="type-card">
          <div className="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <div className="type-label">Flats</div>
          <div className="type-count">410+ listings</div>
        </div>
        <div className="type-card">
          <div className="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
          </div>
          <div className="type-label">Commercial</div>
          <div className="type-count">88+ listings</div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
