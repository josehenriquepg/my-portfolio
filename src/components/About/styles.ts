import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  color: #fffefd;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  text-align: center;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
`;

export const Subtitle = styled.h2`
  text-align: center;
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const SocialMedia = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: #fffefd;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));

  &:hover {
    color: #f87b1b;
  }
`;


