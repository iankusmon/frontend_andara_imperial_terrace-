import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Step1Pelunasan from './Step1Pelunasan';

const PelunasanWizardForm: React.FC = () => {
  // Initialize mockup data for testing
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    nik: '1234567890123456',
    address: 'Jl. Contoh No. 123, Jakarta',
    job: 'Engineer',
    husbandKtp: null,
    wifeKtp: null,
    paymentMethod: 'Transfer',
    villaInterest: 'Villa A',
    package: 'Package 1',
  });

  return (
    <Container>
      <Row>
        <Col md={8} className="mx-auto mt-5">
          <h2>Form Pelunasan</h2>
          <StepWizard>
            <Step1Pelunasan />
          </StepWizard>
        </Col>
      </Row>
    </Container>
  );
};

export default PelunasanWizardForm;