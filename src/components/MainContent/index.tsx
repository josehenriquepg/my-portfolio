import { Main } from "./styles";
import About from "../AboutContent";
import Technologies from "../TechnologiesContent";
import Projects from "../ProjectsContent";

const MainContent = () => {
  return (
    <Main>
      <About />
      <Technologies />
      <Projects />
    </Main>
  );
}

export default MainContent;