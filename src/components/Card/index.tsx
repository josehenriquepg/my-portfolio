import {
  Container,
  CardContent,
  ProjectImage,
  Description,
  ProjectTitle,
  ProjectText,
} from "./styles";

type CardInterface = {
  image: string;
  title: string;
  body: string;
};

type ProjectProps = {
  projects: CardInterface[];
};

const Card: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <Container>
      {projects.map((project: CardInterface) => {
        return (
          <CardContent>
            {project.image && <ProjectImage src={project.image} />}
            <Description>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectText>{project.body}</ProjectText>
            </Description>
          </CardContent>
        );
      })}
    </Container>
  );
};

export default Card;
