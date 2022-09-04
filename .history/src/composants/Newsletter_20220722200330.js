
import { Col, Row, Alert } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';
import DL from '../assets/img/Télécharger.svg';

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <a href={CV_LUCAS}>
      <Col lg={12}>
        
        <div className="newsletter-bx wow slideInUp">
          <Row>
          <center><p></p>Télécharger CV</center>
          </Row>
        </div>
      </Col>
      </a>
  )
}