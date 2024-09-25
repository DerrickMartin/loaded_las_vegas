import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa'; // Import icons

const FooterContainer = styled.footer`
  background-color: #6A7B8C; /* Grayish faded blue */
  color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; /* Add some padding */
  position: relative;
`;

const CopyrightText = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  & a {
    color: white;
    font-size: 24px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f0f0f0;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <CopyrightText>©CompanyName 2024</CopyrightText>
      <IconContainer>
        <Link to="/">
          <FaTimes />
        </Link>
        <Link to="/">
          <FaInstagram />
        </Link>
        <Link to="/">
          <FaYoutube />
        </Link>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
