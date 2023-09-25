import { Link } from "react-router-dom";
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

export const Menu = styled.li`
  margin: 0 5px;
  list-style: none;
`;

export const MenuItems = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: #f2f0e5;

  &:hover {
    color: #f87b1b;
  }
`;

export const MenuLinks = styled.span`
  padding: 0 5px;
`;