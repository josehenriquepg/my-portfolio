import { CardInterface } from '../../types/CardInterface';
import Badge from '../Badge';
import { Article, ProjectImage, Description, ProjectTitle, ProjectText } from './styles';

const Card = ({body, title, badge, image}: CardInterface) => {
  return (
    <Article>
      { badge && 
        <Badge text={badge.text}/>
      }
      { image &&
        <ProjectImage src={image} alt="Imagem do Projeto" />
      }
      <Description>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectText>{body}</ProjectText>
      </Description>
    </Article>
  );
}

export default Card;