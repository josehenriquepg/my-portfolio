import { Container, Title, TechCard, TechGrid, TechName } from './styles';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiRuby, SiRubyonrails, SiPostgresql } from 'react-icons/si';


const technologies = [
  { "id": "js", "name": "Javascript", "icon": <SiJavascript /> },
  { "id": "ts", "name": "Typescript", "icon": <SiTypescript /> },
  { "id": "react", "name": "React.js", "icon": <SiReact /> },
  { "id": "node", "name": "Node.js", "icon": <SiNodedotjs /> },
  { "id": "python", "name": "Python", "icon": <SiPython /> },
  { "id": "ruby", "name": "Ruby", "icon": <SiRuby /> },
  { "id": "ror", "name": "Ruby on Rails", "icon": <SiRubyonrails /> },
  { "id": "psql", "name": "PostgreSQL", "icon": <SiPostgresql /> }
];

const Technologies = () => {
  return (
    <Container>
      <Title>
        Tecnologias que uso:
      </Title>
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
}

export default Technologies;
