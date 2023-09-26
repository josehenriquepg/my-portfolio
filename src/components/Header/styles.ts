import styled from 'styled-components';

export const Nav = styled.div`
  padding: 16px;
  display: flex;
  align-itens: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  gap: 12px;
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