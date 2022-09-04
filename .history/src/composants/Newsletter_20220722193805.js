import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';
import CV_LUCAS from '../assets/img/CV_LUCAS.pdf';

export const Newsletter = ({ status, message, onValidated }) => {
  return (
      <Col lg={12}>
        <a href="#"><img src={navIcon1} alt="Icon" /></a>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <a href={CV_LUCAS} download>Cliquez pour télécharger</a>
          </Row>
        </div>
      </Col>
  )
}