import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface Step3NupProps {
  previousStep: () => void;
}

const Step3Nup: React.FC<Step3NupProps> = ({ previousStep }) => {
  return (
    <div>
      <h3>Step 3: Bukti Upload Transfer</h3>
      <Form.Group controlId="transferProof">
        <Form.Label>Upload Bukti Transfer</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button variant="secondary" onClick={previousStep}>Back</Button>
      <Button variant="success">Submit</Button>
    </div>
  );
};

export default Step3Nup;
