// components/Features.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Features.css';

const Card = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="feature-card"
    {...props}
  >
    {children}
  </motion.div>
);

const Icon = ({ children }) => (
  <motion.div whileHover={{ rotate: 5 }} className="feature-icon">
    {children}
  </motion.div>
);

const Feature = ({ title, icon, description }) => (
  <Card>
    <Icon>{icon}</Icon>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </Card>
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
        <AnimatePresence>
          {featureData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Features;