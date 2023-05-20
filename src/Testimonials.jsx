// components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const Testimonial = ({ image, name, profession, quote }) => (
  <div className="testimonial">
    <img className="testimonial-image" src={image} alt={name} />
    <h4 className="testimonial-name">{name}</h4>
    <p className="testimonial-profession">{profession}</p>
    <p className="testimonial-quote">{quote}</p>
  </div>
);

const Testimonials = () => {
  const testimonialData = [
    {
      image: 'https://via.placeholder.com/100',
      name: 'John Doe',
      profession: 'Software Engineer',
      quote: 'This is the best credit card I have ever used. The rewards are amazing!',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Jane Smith',
      profession: 'Designer',
      quote: 'I love the cashback offers and the low interest rates. Highly recommended!',
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">Happy Customers</h2>
      <div className="testimonials-carousel">
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;