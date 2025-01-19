import React from 'react';
import { Button } from 'react-bootstrap';

interface Step2Nup {
  previousStep: () => void;
  nextStep: () => void;
  data: {
    fullName: string;
    nik: string;
    address: string;
    job: string;
    husbandKtp: File | null;
    wifeKtp: File | null;
    paymentMethod: string;
    villaInterest: string;
    package: string;
  };
}

const Step2Nup: React.FC<Step2Nup> = ({ previousStep, nextStep, data }) => {
  return (
    <div>
      <h3>Step 2: Review Detail</h3>
      <div>
        <p><strong>Nama Lengkap:</strong> {data.fullName}</p>
        <p><strong>NIK:</strong> {data.nik}</p>
        <p><strong>Alamat:</strong> {data.address}</p>
        <p><strong>Pekerjaan:</strong> {data.job}</p>
        {/* Add more details as needed */}
      </div>

      <Button variant="secondary" onClick={previousStep}>Back</Button>
      <Button variant="primary" onClick={nextStep}>Next</Button>
    </div>
  );
};

// Remove defaultProps and use default parameter values if necessary
Step2Nup.defaultProps = {
  data: {
    fullName: 'N/A',
    nik: 'N/A',
    address: 'N/A',
    job: 'N/A',
    husbandKtp: null,
    wifeKtp: null,
    paymentMethod: 'N/A',
    villaInterest: 'N/A',
    package: 'N/A',
  },
};

export default Step2Nup;