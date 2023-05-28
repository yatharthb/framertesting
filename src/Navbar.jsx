// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavbarLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const NavbarLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  '&.active': {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const NavbarAuth = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const NavbarButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 'bold',
  color: 'white',
  borderColor: 'white',
  '&:hover': {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
}));

const Navbar = () => {
  const MotionNavLink = ({ children, ...props }) => {
    const theme = useTheme();
    return (
      <motion.div
        initial={{ borderBottom: '0px solid transparent' }}
        whileHover={{ borderBottom: `2px solid ${theme.palette.secondary.main}` }}
        transition={{ duration: 0.3 }}
      >
        <NavbarLink {...props}>{children}</NavbarLink>
      </motion.div>
    );
  };

  return (
    <StyledAppBar elevation={0}>
      <Container>
        <StyledToolbar>
          <NavbarLinks>
            <MotionNavLink exact to="/">
              Home
            </MotionNavLink>
            <MotionNavLink to="/products">Products</MotionNavLink>
            <MotionNavLink to="/faq">FAQ</MotionNavLink>
            <MotionNavLink to="/about">About Us</MotionNavLink>
            <MotionNavLink to="/contact">Contact</MotionNavLink>
          </NavbarLinks>
          <NavbarAuth>
            <NavbarButton variant="outlined">Sign In</NavbarButton>
            <NavbarButton variant="outlined">Sign Up</NavbarButton>
          </NavbarAuth>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;