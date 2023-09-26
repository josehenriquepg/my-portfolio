import { Main, Title, Subtitle,  Contacts, SocialMedia } from './styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const About = () => {
  return (  
    <Main>
      <Title> Olá, sou o José Henrique. </Title>
      <Subtitle> 
        Desenvolvedor Full Stack (Frontend & Backend). 
      </Subtitle>
      <Contacts>
        <SocialMedia 
          href="https://github.com/josehenriquepg" 
          target="_blank"
        > 
          <BsGithub /> 
        </SocialMedia>
        <SocialMedia 
          href="https://www.linkedin.com/in/josehenriquepg/" 
          target="_blank"
        > 
          <BsLinkedin /> 
        </SocialMedia> 
      </Contacts>
    </Main>
  );
}

export default About;