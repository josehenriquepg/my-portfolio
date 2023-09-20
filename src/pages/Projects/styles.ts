import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #fffefd;
`;

export const Main = styled.main`
  margin: 125px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 72px;
  text-align: left;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
`;

export const Subtitle = styled.h2`
  padding-right: 81px;
  margin: 0;
  text-align: justify;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  text-align: justify;
`;

export const Article = styled.article`
  grid-row: span 4;
  display: grid;
  grid-template-rows: subgrid;
`;