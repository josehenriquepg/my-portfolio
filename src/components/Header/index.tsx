import { Logo, Nav, Button } from "./styles";
import { BsCodeSlash, BsDownload } from "react-icons/bs";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <span><BsCodeSlash /></span><>Portfolio</>
      </Logo>
      <Button><BsDownload /> Baixar Curriculo</Button>
    </Nav>
  );
};

export default Header;
