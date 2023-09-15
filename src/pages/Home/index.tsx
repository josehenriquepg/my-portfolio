import * as C from './styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
  return (  
    <C.Container>
      <h1>👋 Hello, there!</h1>
      <h2>I'm Jose Henrique and welcome to my Github profile!</h2>
      <li>👨‍💻 I'm currently focusing on Backend Development and Data Science;</li>
      <li>🌱 I'm currently studing Oriented Object Programming, Data Structure and Database;</li>
      <li>💼 Available for work.</li>
      <C.Contacts>
        <BsGithub />
        <BsLinkedin />
        Email: <C.Button>Contato</C.Button>
      </C.Contacts>
      
    </C.Container>
  );
}

export default Home;