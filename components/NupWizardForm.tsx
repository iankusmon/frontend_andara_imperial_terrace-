import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Step1Nup from './Step1Nup';
import Step2Nup from './Step2Nup';
import Step3Nup from './Step3Nup';

const NupWizardForm: React.FC = () => {
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
        <Col md={8} className="mx-auto mt-5 pt-20">
          <h2>Form Pengisian NUP</h2>
          <h5>Mohon isikan data diri dibawah untuk melakukan pembayaran NUP</h5>
          <StepWizard>
            <Step1Nup />
          </StepWizard>
        </Col>
      </Row>
    </Container>
  );
};

export default NupWizardForm;