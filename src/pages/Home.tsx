// pages/Home.tsx
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 700px; /* Adjust this based on typical smartphone height */
  display: flex;
  flex-direction: column; /* Align content vertically */
  justify-content: flex-start; /* Align content at the top */
  align-items: center; /* Center horizontally */
  text-align: center;
  padding-top: 2rem; /* Add padding at the top */
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Home Page</h1>
    </HomeContainer>
  );
};

export default Home;
