import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: #fffefd;
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
`;

export const TechGrid = styled.div`
  display: flex
  flex-wrap: wrap
  gap: 24px;
`;

export const TechCard = styled.div`
  display: flex
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 16px;
  color: #f2f0e5;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
  cursor: pointer;

  &:hover {
    color: #f87b1b;
  }
`;

export const TechName = styled.h3``;
