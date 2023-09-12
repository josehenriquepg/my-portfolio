import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: #000000;
`;

export const Logo = styled.div`

`;

export const Menu = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  list-style: none;
`;

export const MenuItems = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    margin: 0 32px;
  }
`;

export const Links = styled.span`

`;