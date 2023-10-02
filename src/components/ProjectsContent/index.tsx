import { Container, Subtitle } from "./styles";
import Card from "../Card";

import * as data from "../../data/projects.json";
const projectsString = JSON.stringify(data);
const projects = JSON.parse(projectsString).projects;

const Projects = () => {
  return (
    <Container>
      <Subtitle>Meus Projetos</Subtitle>
      <Card projects={projects} />
    </Container>
  );
};

export default Projects;
