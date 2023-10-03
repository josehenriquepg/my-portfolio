import {
  Container,
  CardContent,
  Image,
  Description,
  Title,
  Text,
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
            {project.image && <Image src={project.image} />}
            <Description>
              <Title>{project.title}</Title>
              <Text>{project.body}</Text>
            </Description>
          </CardContent>
        );
      })}
    </Container>
  );
};

export default Card;
