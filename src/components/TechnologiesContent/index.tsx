import { Container, TechCard, TechGrid, TechName, Subtitle } from "./styles";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiFlask,
  SiMysql,
} from "react-icons/si";

const technologies = [
  { id: "js", name: "Javascript", icon: <SiJavascript className="icon" /> },
  { id: "ts", name: "Typescript", icon: <SiTypescript className="icon" /> },
  { id: "react", name: "React.js", icon: <SiReact className="icon" /> },
  { id: "node", name: "Node.js", icon: <SiNodedotjs className="icon" /> },
  { id: "python", name: "Python", icon: <SiPython className="icon" /> },
  { id: "flask", name: "Flask", icon: <SiFlask className="icon" /> },
  { id: "mysql", name: "MySQL", icon: <SiMysql className="icon" /> },
  { id: "psql", name: "PostgreSQL", icon: <SiPostgresql className="icon" /> },
];

const Technologies = () => {
  return (
    <Container>
      <Subtitle>Tecnologias</Subtitle>
      <TechGrid>
        {technologies.map((tech) => (
          <TechCard id={tech.id} key={tech.id}>
            {tech.icon}
            <TechName>{tech.name}</TechName>
          </TechCard>
        ))}
      </TechGrid>
    </Container>
  );
};

export default Technologies;
