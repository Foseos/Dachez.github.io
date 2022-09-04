import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpSubscribe";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import prenom from '../assets/img/prenom.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={prenom} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Portfolio créer grace à un tuto </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}