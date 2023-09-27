import { Container } from "./App.styles";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default App;
