// components/Security.jsx
import React from 'react';
import './Security.css';

const Security = () => {
  return (
    <div className="security">
      <h2 className="security-title">Security & Trust</h2>
      <p className="security-description">
        Your data is secure with us. We use industry-leading security technologies to ensure your information is safe.
      </p>
      <div className="security-logos">
        <img src="https://via.placeholder.com/100" alt="Security Logo 1" className="security-logo" />
        <img src="https://via.placeholder.com/100" alt="Security Logo 2" className="security-logo" />
      </div>
    </div>
  );
};

export default Security;