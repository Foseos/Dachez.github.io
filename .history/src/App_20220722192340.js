import logo from './logo.svg';
import Axios from "azios"
import File
import './App.css';
import { NavBar } from './composants/NavBar'
import { Banner } from './composants/Banner'
import { Skills } from './composants/Skills'
import { Projects } from './composants/Projects'
import { Contact } from './composants/Contact'
import { Footer } from './composants/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
