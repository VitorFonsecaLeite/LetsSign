import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './style.css';

const LoginSocialButtons = () => {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs="auto">
        <Button variant="light" className="social-button">
          <img src="/src/assets/labels/Google.png" alt="Google" className="social-icon" />
        </Button>
      </Col>
      <Col xs="auto">
        <Button variant="light" className="social-button">
          <img src="/src/assets/labels/microsoft.png" alt="Microsoft" className="social-icon" />
        </Button>
      </Col>
    </Row>
  );
};

export default LoginSocialButtons;
