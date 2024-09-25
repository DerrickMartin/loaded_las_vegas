// components/Logo.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import LogoImageSrc from '../assets/sky.jpg'; 


const LogoContainer = styled.div`
  text-align: center;
  padding: 1rem;
  margin-left: 1rem;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 60px;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
        <Link to="/"> 
          <LogoImage src={LogoImageSrc} alt="Logo" />
        </Link>
    </LogoContainer>
  );
};

export default Logo;
