import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Step1DownPayment from './Step1DownPayment';

const DownPaymentWizardForm: React.FC = () => {
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
        <Col md={8} className="mx-auto mt-5 pt-40">
          <h2>Form Pengisian Down Payment</h2>
          <h5>Mohon isikan data diri dibawah untuk melakukan pembayaran Down Payment</h5>
          <p><strong>Transfer sebesar <b>30%</b> dari harga unit pilihan Anda Ke:</strong> 0035-01-001543-56-9 BRI atas nama Andara Rejo Makmur</p>
          <StepWizard>
            <Step1DownPayment />
          </StepWizard>
        </Col>
      </Row>
    </Container>
  );
};

export default DownPaymentWizardForm;