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
  border: 1px solid #fff;
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
  text-align: left;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  width: 70%;
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fff;
`;

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.li`
  margin: 5px;
  font-size: 32px;
  list-style: none;
  color: #f2f0e5;
  filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.35));
  cursor: pointer;

  &:hover {
    color: #f87b1b;
  }
`;