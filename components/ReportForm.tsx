import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Step1Report from './Step1Report';

const ReportForm: React.FC = () => {
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
          <h2>Pengaduan </h2>
          <h5>Mohon isikan data diri dibawah untuk melakukan Pengaduan</h5>
          <StepWizard>
            <Step1Report />
          </StepWizard>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportForm;