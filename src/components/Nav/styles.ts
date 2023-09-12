import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../img/logo.png";

export const Container = styled.nav`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  background-color: #000000;
`;

export const Logo = styled.div`
  width: 120px;
  margin: 5px 20px;
  display: block;
  background: no-repeat center/125% url(${logoImage});
`;
export const LinksContainer = styled.div``;

export const Menu = styled.li`

`;

export const MenuItems = styled(Link)`

`;

export const Links = styled.span`

`;