import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';

import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />   
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
