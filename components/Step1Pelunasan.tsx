"use client";
import React, { useState } from "react";
import { Form, Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../app/pelunasan/Pelunasan.css"; // Add your custom CSS

interface FormData {
  fullName: string;
  nik: string;
  address: string;
  occupation: string;
  PaymentReceipt: File | null;
  wifePaymentReceipt: File | null;
  paymentMethod: string;
  villaUnitInterest: string;
  package: string;
  payment_amount: string;
}

const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1, 2, 3)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    nik: "",
    address: "",
    occupation: "",
    PaymentReceipt: null,
    wifePaymentReceipt: null,
    paymentMethod: "",
    villaUnitInterest: "",
    package: "",
    payment_amount: ""
  });

  const [PaymentReceipt, setPaymentReceipt] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "PaymentReceipt" | "wifePaymentReceipt" | "paymentReceipt"
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [fieldName]: file });

    if (fieldName === "PaymentReceipt" && file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPaymentReceipt(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  // Step Navigation Functions
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const numberFormat = (value: any) =>
  new Intl.NumberFormat('IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);


  // Step 1: Form Pelunasan
  const renderStep1 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1. Form Pelunasan</h1>
      <div className="form-grid styled-grid" style={{ marginBottom: '60px' }}>

        {/* Isi Nominal Pelunasan yang akan di transfer */}
        <label htmlFor="PaymentAmount">Nominal Transfer<span>*</span></label>
        <input
          type="number"
          id="payment_amount"
          name="payment_amount"
          value={formData.payment_amount}
          onChange={handleInputChange}
          required
        />

        {/* Cara Pembayaran */}
        <label htmlFor="paymentMethod">Cara Pembayaran<span>*</span></label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>
      <Button variant="primary" onClick={goToNextStep}>Next</Button>
    </form>
  );

  // Step 2: Review Form Data
  const renderStep2 = () => (
    <div className="review-container" style={{ marginBottom: '60px' }}>
      <h1>2. Review Isian Form Pelunasan</h1>
      <div>
        <p><strong>ID NUP:</strong> 45555567</p>
        <p><strong>ID Booking Fee:</strong> 45555567</p>
        <p><strong>ID Down Payment:</strong> 45555567</p>
        <p><strong>Nomor Pesanan:</strong> 000007</p>
        <p><strong>Nama Lengkap:</strong> {formData.fullName} Mulyono </p>
        <p><strong>NIK:</strong> {formData.nik} 331142221</p>
        <p><strong>Pekerjaan:</strong> {formData.occupation} Karyawan</p>
        <p><strong>Alamat:</strong> {formData.address} Jalan Merak Menyala 99, Klaten</p>
        <p><strong>Paket:</strong> {formData.package} Investasi</p>
        <p><strong>Minat Villa Unit:</strong> {formData.villaUnitInterest} Eiffel 99</p>
        <p><strong>Cara Pembayaran:</strong> {formData.paymentMethod} Transfer</p>
        <p><strong>Nominal Pembayaran:</strong> {numberFormat(formData.payment_amount)}</p>
        <p><strong>Transfer Ke:</strong> 0197263634 atas nama Andara Rejo Makmur</p>
        <p><strong>Datang Ke Lokasi (apabila cash):</strong> Kantor Andara Rejo Makmur</p>
      </div>
      <Button variant="secondary" onClick={goToPreviousStep}>Back</Button>
      <Button variant="primary" onClick={goToNextStep}>Next</Button>
    </div>
  );

  // Step 3: Payment Confirmation
  const renderStep3 = () => (
    <div className="step-container" style={{ marginBottom: '60px' }}>
      <h1>3. Konfirmasi Pembayaran</h1>
      <p>
        Harap lakukan transfer sesuai petunjuk dan unggah bukti pembayaran untuk melanjutkan proses Pelunasan Anda.
      </p>
      {/* Bukti Pembayaran Pelunasan */}
      <label htmlFor="paymentReceipt">Bukti Pembayaran Pelunasan<span>*</span></label>
          <input
            type="file"
            id="paymentReceipt"
            onChange={(e) => handleFileChange(e, "paymentReceipt")}
            required
          />
      <div className="button-group">
        <Button variant="secondary" onClick={goToPreviousStep}>Back</Button>
        <Button variant="success" onClick={handleConfirmationSubmit}>Submit</Button>
      </div>
    </div>
  );

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

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
          <div style={{ textAlign: "center" }}>
            <h4>Pembayaran Berhasil!</h4>
            <p>Bukti pembayaran Pelunasan dengan nominal <b>{numberFormat(formData.payment_amount)}</b> Anda telah berhasil diunggah. Silahkan ke halaman customer dashboard untuk memantau status pengajuan.</p>
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
