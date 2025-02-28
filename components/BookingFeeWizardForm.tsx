import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Step1BookingFee from './Step1BookingFee';

const BookingFeeWizardForm: React.FC = () => {
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
          <h2>Form Pengisian Booking Feee</h2>
          <h5>Mohon isikan data diri dibawah untuk melakukan pembayaran Booking Fee</h5>
          <p><strong>Transfer sebesar <b>Rp50,000,000.00</b> Ke:</strong> 0035-01-001543-56-9 BRI atas nama Andara Rejo Makmur</p>
          <StepWizard>
            <Step1BookingFee />
          </StepWizard>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingFeeWizardForm;