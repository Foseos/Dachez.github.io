import logo from './logo.svg';
import './App.css';
import { NavBar } from './composants/NavBar'
import { Banner } from './composants/Banner'
import { Skills } from './composants/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      
    </div>
  );
}

export default App;
