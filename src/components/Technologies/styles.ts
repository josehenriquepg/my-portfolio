import styled from 'styled-components';

export const Main = styled.main`
  color: #fffefd; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h2`
`;

export const Icons = styled.div`
  display: flex;
  gap: 160px;
`;

export const Icon = styled.li`
  
  font-size: 64px;
  list-style: none;
  color: #f2f0e5;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
  cursor: pointer;

  &:hover {
    color: #f87b1b;
  }
`;