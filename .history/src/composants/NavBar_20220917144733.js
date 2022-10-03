import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import prenom from '../assets/img/prenom.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import CV from '../assets/img/CV_LUCAS.pdf';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={prenom} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'Accueil' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'Compétences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'Projets' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lucas-dachez-467244243"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Foseos?tab=repositories"><img src={navIcon2} alt="" /></a>
              
            </div>
            <a href="/assets/img/CV_LUCAS.pdf" >
                <button className="vvd"><span>Télécharger mon CV</span></button>
              </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}