// components/Features.jsx
import React from 'react';
import './Features.css';

const Feature = ({ title, icon, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Features = () => {
  const featureData = [
    {
      title: 'Low-interest rates',
      icon: '💰',
      description: 'Enjoy competitive interest rates on all your transactions.',
    },
    {
      title: 'Rewards',
      icon: '🎁',
      description: 'Earn points on every purchase and redeem them for amazing rewards.',
    },
    {
      title: 'Cashback offers',
      icon: '💸',
      description: 'Get cashback on a wide range of transactions and save more.',
    },
  ];

  return (
    <div className="features">
      <h2 className="features-title">Our Premium Features</h2>
      <div className="features-grid">
        {featureData.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;