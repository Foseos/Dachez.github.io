import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Axios from "azios";
import FileDownload from "js-file-download";


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

          </Row>
        </div>
      </Col>
  )
}