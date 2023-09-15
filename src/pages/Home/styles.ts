import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #f2f0e5;
`;

export const Main = styled.main`
  padding: 100px;
  width: 60%;
`;

export const Title = styled.h1`
  text-align: left;
`;

export const Subtitle = styled.h2`
  text-align: left;
`;

export const Text = styled.p``;

export const Contacts = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SocialMedia = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: #f2f0e5;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));

  &:hover {
    color: #f87b1b;
  }
`;

export const Button = styled.button`
  width: 124px;
  height: 36px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  background-color: #f2f0e5;
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