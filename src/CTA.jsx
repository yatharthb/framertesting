// components/CTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <div className="cta">
      <h2 className="cta-title">Get Started with Our Credit Card Today</h2>
      <p className="cta-description">Enjoy exclusive benefits and rewards</p>
      <Link to="/apply" className="cta-button">
        Apply Now
      </Link>
    </div>
  );
};

export default CTA;