import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard2, ProjectCard3, ProjectCard, ProjectCard4 } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id : 2,
      title: "AMAP",
      description: "Modification du site d'AMAP pour répondre a un besoin",
      imgUrl: projImg2,
    },
    {
      id: 2,
      title: "Axéréal",
      description: "Mise en place d'un script bash et d'une interface web pour la gestion des sauvegardes",
      imgUrl: projImg3,
    },
    {
      id: 3,
      title: "Pecheur.com",
      description: "Création d'une interface web pour trier ",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>Voici tous les projets que j'ai pu réaliser que ce soit en stage mais aussi bien durant ma formation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ALL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web site</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">C# Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Java Applications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>                  
                    <Tab.Pane eventKey="second">
                      <p>J'ai pu travailler sur la création/amélioration/optimisation de site via principalement le langage PHP avec son framework Symfony</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>J'ai pu travailler sur la création/amélioration/optimisation/sécurisation de d'application en C#</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <p>J'ai pu travailler sur la création/amélioration/optimisation/sécurisation de d'application en Java</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard4
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}