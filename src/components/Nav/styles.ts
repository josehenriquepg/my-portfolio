import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../img/logo.png";

export const Container = styled.nav`
  padding: 16px;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  background-color: #212123;
`;

export const Logo = styled.div`
  display: block;
  background: no-repeat center/125% url();
  float: right;
`;
export const LinksContainer = styled.div`
`;

export const Menu = styled.li`
  margin: 0 5px;
  list-style: none;
  float: left;
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

export const Links = styled.span`
  padding: 0 5px;
`;