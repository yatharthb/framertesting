// components/HowItWorks.jsx
import React from 'react';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const HowItWorksContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StepCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  marginBottom: theme.spacing(4),
}));

const StepNumber = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'primary.main',
});

const StepTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
}));

const StepDescription = styled(Typography)({
  fontSize: '1rem',
});

const Step = ({ number, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StepCard>
          <CardContent>
            <StepNumber component="span">{number}</StepNumber>
            <StepTitle variant="h5" component="h4">
              {title}
            </StepTitle>
            <StepDescription component="p">{description}</StepDescription>
          </CardContent>
        </StepCard>
      </motion.div>
    </Grid>
  );
};

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
    <HowItWorksContainer component="section">
      <Container>
        <Typography variant="h3" component="h2" align="center">
          How It Works
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {stepsData.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </Grid>
      </Container>
    </HowItWorksContainer>
  );
};

export default HowItWorks;