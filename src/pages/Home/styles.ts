import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #fffefd;
`;

export const Main = styled.main`
  margin: 125px;
  max-width: 612px;  
  display: flex;
  flex-direction: column;
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

export const Contacts = styled.div`
  margin-top: 25px;
  max-width: 459px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

export const Button = styled.button`
  width: 124px;
  height: 32px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  background-color: #fffefd;
  box-shadow: 4px 4px 2px 0 rgba(0,0,0,0.35);

  &:hover {
    background-color: #f87b1b;
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
`;