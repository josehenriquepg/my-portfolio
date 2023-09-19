import * as C from './styles';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiRuby, SiRubyonrails, SiPostgresql } from 'react-icons/si';

const About = () => {
  return (  
    <C.Container>
      <C.Main>
        <C.Title>
          Sobre Mim
        </C.Title>
        <C.Subtitle>Meu nome é José Henrique e tenho 20 anos.</C.Subtitle>
        <C.Text>
        Sou um programador brasileiro que busca aprimorar suas habilidades e solucionar problemas.
        Meu objetivo é ajudar a desenvolver a empresa, realizar melhorias, adquirir e compartilhar conhecimento com meus colegas de forma justa e ética.
        </C.Text>
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