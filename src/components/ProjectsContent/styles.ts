import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: #fffefd;
`;

export const Main = styled.main` 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;