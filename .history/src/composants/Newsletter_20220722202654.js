
import { Col } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';
import DL from '../assets/img/Télécharger.svg';

export const Newsletter = () => {
  return (
    <a href={CV_LUCAS} className=CV>
      <Col lg={12}>
        <div className="newsletter-bx"> 
          <span><center><p>Télécharger CV</p></center></span>
        </div>
      </Col>
      </a>
  )
}