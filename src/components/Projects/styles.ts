import styled from 'styled-components';

export const Main = styled.main`
  margin: 125px; 
  color: #fffefd; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 72px;
  text-align: left;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;