import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column; 
  flex: 2 1 0;
  color: #fffefd;
`; 

export const Title = styled.h1`
  font-size: 32px;
  justify-content: start;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
`;

export const Content = styled.div`
  background: rgba(20, 35, 58, 0.79);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;