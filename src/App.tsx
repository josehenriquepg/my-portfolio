import * as C from './App.styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Sumary from './pages/Sumary';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />            
          <Route path='/sumary' element={<Sumary />} />    
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
