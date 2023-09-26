import styled from "styled-components";

export const Container = styled.nav`
  padding: 16px;
  display: flex;
  align-itens: center;
  justify-content: center;
  gap: 32px;
  background-color: #212123;
  box-shadow: 0 14px 10px -10px rgba(0,0,0,0.35);
`;

export const Menu = styled.ul`
  margin: 0 5px;
  list-style: none;
`;

export const MenuItems = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const MenuLinks = styled.a`
  padding: 0 5px;
  text-decoration: none;
  color: #f2f0e5;

  &:hover {
    color: #f87b1b;
  }
`;