"use client";
import React, { useState } from "react";
import { Form, Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../app/nup/Nup.css"; // Add your custom CSS

interface FormData {
  fullName: string;
  email: string;
  nomor_whatsapp: string;
  category: string;
  message: string;
}

const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1, 2, 3)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    nomor_whatsapp: "",
    category: "",
    message: "",
  });

  const [KTPPreview, setKTPPreview] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "KTP" | "wifeKTP" | "paymentReceipt"
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [fieldName]: file });

    if (fieldName === "KTP" && file) {
      const reader = new FileReader();
      reader.onload = () => {
        setKTPPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  const handleConfirmationSubmit = () => {
    // Show success modal on submit
    setShowSuccessModal(true);

    // e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Reset wizard or navigate to dashboard
  };

  const numberFormat = (value: any) =>
  new Intl.NumberFormat('IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

  // Step 1
  const renderStep1 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1. Form Konsultasi</h1>
      <div className="form-grid styled-grid">
        {/* Nama Lengkap */}
        <label htmlFor="fullName">Nama Lengkap<span>*</span></label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />

        {/* Emaul */}
        <label htmlFor="email">NIK<span>*</span></label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Cateogry */}
        <label htmlFor="category">Category<span>*</span></label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
        </select>

        {/* Nomor Whatsapp */}
        <label htmlFor="nomor_whatsapp">Nomor WhatsAp<span>*</span></label>
         <input
          type="text"
          id="nomor_whatsapp"
          name="nomor_whatsapp"
          value={formData.nomor_whatsapp}
          onChange={handleInputChange}
          required
        />

        {/* Pesan Pengaduan */}
        <label htmlFor="nomor_whatsapp">Pesan Pengaduan<span>*</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          // onChange={handleInputChange}
          onChange={(e) => handleInputChange}
          required
        ></textarea>
      </div>
      <Button variant="primary" onClick={handleConfirmationSubmit}>Submit</Button>
    </form>
  );

  // Step 2:
  const renderStep2 = () => (
    <div className="step-container">
    <h1>3. Konfirmasi Pembayaran</h1>
    <p>
      Harap lakukan transfer sesuai petunjuk dan unggah bukti pembayaran untuk melanjutkan proses Konsultasi Anda.
    </p>
    {/* Bukti Pembayaran Konsultasi */}
    <label htmlFor="paymentReceipt">Bukti Pembayaran Konsultasi<span>*</span></label>
        <input
          type="file"
          id="paymentReceipt"
          onChange={(e) => handleFileChange(e, "paymentReceipt")}
          required
        />
    <div className="button-group">
        {/* <Button variant="secondary" onClick={goToPreviousStep}>Back</Button> */}
        <Button variant="success" onClick={handleConfirmationSubmit}>Submit</Button>
      </div>
  </div>
  );


  // Render the current step
  const renderStep = () => { return renderStep1(); }

  return (
    <div>
      {renderStep()}

      <Modal show={showSuccessModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Sukses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center", marginLeft: "40%" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png" // Placeholder for success icon
              alt="Success"
              style={{ width: "100px", marginBottom: "20px" }}
            />
          </div>
          <div style={{ textAlign: "center"}}>
            <h4>Pertanyaan Terkirim!</h4>
            <p>Silahkan tunggu 1x24 Jam untuk mendapat jawaban dari admin melalui Email/WhatsApp</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Dashboard
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WizardForm;
