import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-weight: bold;
`;

export const Network = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Info = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  width: 80%;
  text-align: left;
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #444;
  width: 100%;
  .icon{
    width: 32px;
    height: 32px;
    color: #f87b1b;
  }
`;

export const InfoContent = styled.div`
  color: #fffefd;
`;

export const InfoTitle = styled.h3`
  font-size: 14px;
`;

export const Button = styled.button`
  width: 200px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #fffefd;
  box-shadow: 4px 4px 2px 0 rgba(0,0,0,0.35);

  &:hover {
    background-color: #f87b1b;
  }
`;

