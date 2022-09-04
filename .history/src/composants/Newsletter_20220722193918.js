import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';
import DL from '../assets/img/telecharger.svg';

export const Newsletter = ({ status, message, onValidated }) => {
  return (
      <Col lg={12}>
        <center><a href="#"><img src={DL} alt="Icon" /></a></center>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <a href={CV_LUCAS} download>Cliquez pour télécharger</a>

        </div>
      </Col>
  )
}