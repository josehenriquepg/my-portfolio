import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #212123;
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

  &:hover {
    color: #f87b1b;
  }
`;

export const Button = styled.button`
  width: 124px;
  height: 36px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f2f0e5;

  &:hover {
    background-color: #f87b1b;
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
`;