import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CV_LUCAS from '../assets/img/CV_LUCAS.svg';


export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <a href="./CV_LUCAS.pdf" download>Cliquez pour télécharger</a>
          </Row>
        </div>
      </Col>
  )
}