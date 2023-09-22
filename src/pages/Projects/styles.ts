import styled from 'styled-components';

export const Container = styled.div`
  color: #fffefd;
`;

export const Main = styled.main`
  display: grid;
  place-items: center;
  width: 100%;
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

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;