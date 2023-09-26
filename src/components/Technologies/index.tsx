import { Main, Subtitle, Icons, Icon } from './styles';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiRuby, SiRubyonrails, SiPostgresql } from 'react-icons/si';

const Technologies = () => {
  return (
    <Main>
      <Subtitle>
        Tecnologias que uso:
      </Subtitle>
      <Icons>
        <Icon><SiJavascript /></Icon>
        <Icon><SiTypescript /></Icon>
        <Icon><SiReact /></Icon>
        <Icon><SiNodedotjs /></Icon>
      </Icons>
      <Icons>
        <Icon><SiPython /></Icon>
        <Icon><SiRuby /></Icon>
        <Icon><SiRubyonrails /></Icon>
        <Icon><SiPostgresql /></Icon> 
      </Icons>
    </Main>
  );
}

export default Technologies;
