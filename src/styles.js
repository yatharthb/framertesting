// styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledFAQ = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  max-width: 800px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
`;

export const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const AccordionWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const AccordionHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  cursor: pointer;
  border-bottom: 1px solid #eeeeee;
`;

export const Question = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Answer = styled(motion.p)`
  margin: 0;
  padding: 1rem;
  background-color: #f6f6f6;
  font-size: 1rem;
`;