import logo from './logo.svg';
import './App.css';
import { NavBar } from './composants/NavBar'
import { Banner } from './composants/Banner'
import { Skills } from './composants/Skills'
import { Projets } from './composants/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projets />
    </div>
  );
}

export default App;
