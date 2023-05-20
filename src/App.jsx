// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import Security from './Security';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Add other routes for Privacy Policy, Terms of Service, etc. */}
      </Routes>
      <Features />
      <Testimonials />
      <HowItWorks />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </Router>
  );
};

export default App;