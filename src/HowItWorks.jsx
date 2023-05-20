// components/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const Step = ({ number, title, description }) => (
  <div className="step">
    <div className="step-number">{number}</div>
    <h4 className="step-title">{title}</h4>
    <p className="step-description">{description}</p>
  </div>
);

const HowItWorks = () => {
  const stepsData = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create an account and complete the application process.',
    },
    {
      number: 2,
      title: 'Get Approved',
      description: 'Wait for approval after submitting your application.',
    },
    {
      number: 3,
      title: 'Start Using',
      description: 'Once approved, you can start using your new credit card.',
    },
  ];

  return (
    <div className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps">
        {stepsData.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;