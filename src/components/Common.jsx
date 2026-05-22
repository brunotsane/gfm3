import React from 'react';

export function PageHero({ title, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(12, 32, 39, .78), rgba(12, 32, 39, .22)), url(${image})` }}>
      <p className="eyebrow">GFM3</p>
      <h1>{title}</h1>
    </section>
  );
}

export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
