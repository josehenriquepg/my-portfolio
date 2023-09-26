import About from '../../components/About';
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Technologies from '../../components/Technologies';
import * as C from './styles';


const Home = () => {
  return (  
    <C.Container>
      <Header />
      <About />
      <Technologies />
      <Projects />
    </C.Container>
  );
}

export default Home;