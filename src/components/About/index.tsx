import * as C from './styles';
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs'
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiRuby, SiRubyonrails, SiPostgresql } from 'react-icons/si';

const About = () => {
  return (  
    <C.Container>
      <C.Main>
        <C.Text> Olá! Meu nome é </C.Text>
        <C.Title> José Henrique. </C.Title>
        <C.Subtitle> 
          Sou Desenvolvedor Full Stack e construo coisas para a Web. 
        </C.Subtitle>
        <C.Text>
          Meu nome é José Henrique e tenho 20 anos.
          Sou um programador brasileiro que busca aprimorar suas habilidades e solucionar problemas.
          Meu objetivo é ajudar a desenvolver a empresa, realizar melhorias, adquirir e compartilhar conhecimento com meus colegas de forma justa e ética.
        </C.Text>
        <C.Contacts>
          <C.SocialMedia 
            href="https://github.com/josehenriquepg" 
            target="_blank"
          > 
            <BsGithub /> 
          </C.SocialMedia>
          <C.SocialMedia 
            href="https://www.linkedin.com/in/josehenriquepg/" 
            target="_blank"
          > 
            <BsLinkedin /> 
          </C.SocialMedia> 
          <C.Button><BsDownload />Curriculo</C.Button>
        </C.Contacts>
      </C.Main>
      <C.Aside>
        <C.Subtitle>
          Tecnologias que uso:
        </C.Subtitle>
        <C.Icons>
          <C.Icon><SiJavascript /></C.Icon>
          <C.Icon><SiTypescript /></C.Icon>
          <C.Icon><SiReact /></C.Icon>
          <C.Icon><SiNodedotjs /></C.Icon>
        </C.Icons>
        <C.Icons>
          <C.Icon><SiPython /></C.Icon>
          <C.Icon><SiRuby /></C.Icon>
          <C.Icon><SiRubyonrails /></C.Icon>
          <C.Icon><SiPostgresql /></C.Icon> 
        </C.Icons>
      </C.Aside>
    </C.Container>
  );
}

export default About;