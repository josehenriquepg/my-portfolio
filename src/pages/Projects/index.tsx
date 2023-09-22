import { Container, Main, Title, CardsContainer } from './styles';
import Card from '../../components/Card';

import * as data from '../../data/projects.json';
const projectsString = JSON.stringify(data);
const projects = JSON.parse(projectsString).projects;

const Projects = () => {
  return (  
    <Container>
      <Title>Meus Projetos</Title>
      <Main>
        <CardsContainer>
          <Card projects={projects} />
        </CardsContainer>
      </Main>
    </Container>
  );
}

export default Projects;