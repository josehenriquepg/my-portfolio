import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #f2f0e5;
`;

export const Main = styled.main`
  padding: 150px;
  width: 60%;  
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
  padding: 0;
  margin: 0;
  width: 50%;
  text-align: left;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;

export const Contacts = styled.div`
  margin-top: 50px;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMedia = styled.a`
  margin: 5px 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
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