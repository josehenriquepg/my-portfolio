import { Main, Title, CardsContainer } from './styles';
import Card from '../Card';

import * as data from '../../data/projects.json';
const projectsString = JSON.stringify(data);
const projects = JSON.parse(projectsString).projects;

const Projects = () => {
  return (  
    <Main>
      <Title>Meus Projetos</Title>
      <CardsContainer>
        <Card projects={projects} />
      </CardsContainer>
    </Main>
  );
}

export default Projects;