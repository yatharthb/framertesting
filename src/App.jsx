// App.jsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Replace with your primary color
    },
    secondary: {
      main: '#ff9800', // Replace with your secondary color
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;