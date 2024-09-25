import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw; 
  background-color: #333;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  &:hover {
    color: #f0f0f0;
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  z-index: 2000;
  margin-right: 2rem;

  & div {
    height: 4px;
    width: 25px;
    background-color: white;
    margin: 3px 0;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  /* Animation for transforming hamburger to "X" */
  & div:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 8px)' : 'none'};
  }

  & div:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? 0 : 1};
  }

  & div:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -8px)' : 'none'};
  }

  @media (max-width: 768px) {
    display: flex; /* Show on mobile */
  }
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  display: none; /* Initially hidden on larger screens */
  flex-direction: column;
  position: absolute;
  top: 80px;
  background-color: #444; 
  right: 0; /* Align the dropdown to the right */
  width: 100%;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; /* Fade effect */
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-40px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;

  /* Show dropdown on mobile */
  @media (max-width: 768px) {
    display: flex; /* Show on mobile */
  }

  & a {
    padding: 15px 20px; /* Increase padding for more clickable area */
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem; /* Make text larger */
    width: 100%; /* Ensure link takes full width */
    text-align: center; /* Center the text */
    transition: background-color 0.3s ease, color 0.3s ease;
    
    &:hover {
      background-color: #555;
    }
  }
`;


const NavLinksContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 0 3rem;

  @media (max-width: 768px) {
    display: none; /* Hide in mobile view */
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo />
      <Hamburger isOpen={isOpen} onClick={toggleDropdown}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Dropdown isOpen={isOpen}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
      </Dropdown>
      <NavLinksContainer>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
