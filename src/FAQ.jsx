import React from 'react';
import { Card, Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    // More FAQs...
  ];

  return (
    <Card sx={{ padding: '20px', margin: '20px' }}>
      <Grid container spacing={2}>
        {faqs.map((faq, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default FAQ;
