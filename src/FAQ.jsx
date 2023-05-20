// components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="question">{question}</h4>
        <span className="icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqsData = [
    {
      question: 'What is the application process?',
      answer: 'To apply, create an account and complete the application form. Once submitted, your application will be reviewed, and you will be notified of the decision.',
    },
    {
      question: 'How long does it take to get approved?',
      answer: 'The approval process typically takes 3-5 business days, depending on the volume of applications.',
    },
    {
      question: 'Can I use the card internationally?',
      answer: 'Yes, you can use the card for purchases and ATM withdrawals anywhere the card is accepted.',
    },
  ];

  return (
    <div className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqsData.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;