// pages/Help.tsx
import React from 'react';
import styled from 'styled-components';


const Help: React.FC = () => {


  const HelpContainer = styled.div`
  min-height: 700px; /* Adjust this based on typical smartphone height */
  display: flex;
  flex-direction: column; /* Align content vertically */
  justify-content: flex-start; /* Align content at the top */
  align-items: center; /* Center horizontally */
  text-align: center;
  padding-top: 2rem; /* Add padding at the top */

`;
  return (
    <HelpContainer>
      <h1>Help</h1>
    </HelpContainer>
  );
};

export default Help;
