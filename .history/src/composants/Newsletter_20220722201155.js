
import { Col, Row, Alert } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';
import DL from '../assets/img/Télécharger.svg';

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <a href={CV_LUCAS}>
      <Col lg={12}>
        
        <div className="newsletter-bx">
          <Row>
          <div className=""><center><p>Télécharger CV</p></center></div>
          </Row>
        </div>
      </Col>
      </a>
  )
}