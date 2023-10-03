import { Main, Title, Content } from "./styles";
import About from "../AboutContent";
import Technologies from "../TechnologiesContent";
import Projects from "../ProjectsContent";

const MainContent = () => {
  return (
    <Main>
      <Title> Olá, sou o José Henrique. </Title>
      <Content>
        <About />
        <Technologies />
        <Projects />
      </Content>
    </Main>
  );
};

export default MainContent;
