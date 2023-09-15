import * as C from './styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
  return (  
    <C.Container>
      <C.Main>
        <C.Text> Olá! Meu nome é </C.Text>
        <C.Title> José Henrique. </C.Title>
        <C.Subtitle> 
          Sou Desenvolvedor Full Stack e construo coisas para a Web. 
        </C.Subtitle>
        <C.Contacts>
          <C.SocialMedia href="https://github.com/josehenriquepg" target="_blank"> <BsGithub /> </C.SocialMedia>
          <C.SocialMedia href="https://www.linkedin.com/in/josehenriquepg/" target="_blank"> <BsLinkedin /> </C.SocialMedia> 
          <C.Button>Contato</C.Button>
        </C.Contacts>
      </C.Main>
      
      <C.Aside>...</C.Aside>
    </C.Container>
  );
}

export default Home;