import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-itens: center;
  color: #fffefd;
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

export const Main = styled.main`
  display: grid;
  place-items: center;
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;