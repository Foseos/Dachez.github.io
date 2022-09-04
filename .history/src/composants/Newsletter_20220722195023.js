import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';
import DL from '../assets/img/Télécharger.svg';

export const Newsletter = ({ status, message, onValidated }) => {
  return (
      <Col lg={12}>
        
        <div className="newsletter-bx wow slideInUp">
          <Row>
          <a href={CV_LUCAS}><img src={DL} alt="Icon" /></a>
          </Row>
        </div>
      </Col>
  )
}