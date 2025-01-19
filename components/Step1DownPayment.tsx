"use client";
import React, { useState } from "react";
import { Form, Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../app/booking-fee/BookingFee.css"; // Add your custom CSS

interface FormData {
  paymentType: string;
  payment_amount: string;
  cashTempoPeriod: string;
  KTP: File | null;
  wifeKTP: File | null;
  paymentMethod: string;
  villaUnitInterest: string;
  package: string;
}

const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1, 2, 3)
  const [formData, setFormData] = useState<FormData>({
    paymentType: "",
    payment_amount: "",
    cashTempoPeriod: "",
    KTP: null,
    wifeKTP: null,
    paymentMethod: "",
    villaUnitInterest: "",
    package: "",
  });

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

    // if (fieldName === "KTP" && file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setKTPPreview(reader.result as string);
    //   };
    //   reader.readAsDataURL(file);
    // }
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

  // Step 1: Form Down Payment
  const renderStep1 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1. Form Down Payment</h1>
      <div className="form-grid styled-grid">
      
        {/* Tipe Pembayaran */}
        <label htmlFor="paymentType">Tipe Pembayaran<span>*</span></label>
        <select
          id="paymentType"
          name="paymentType"
          value={formData.paymentType}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="cash_keras">Cash</option>
          <option value="cash_tempo">DP Tempo</option>
        </select>

        <>
        {
          formData.paymentType == "cash_tempo" && (
          /* Cash Tempo Periode */  
          <>              
          <label htmlFor="cashTempoPeriod">DP Tempo Period<span>*</span></label><select
            id="cashTempoPeriod"
            name="cashTempoPeriod"
            value={formData.cashTempoPeriod}
            onChange={handleInputChange}
            required
          >
            <option value="">Pilih</option>
            <option value="three_months">3 Bulan</option>
            <option value="six_months">6 Bulan</option>
            <option value="twelve_months">12 Bulan</option>
          </select></>
        )}
        </>  

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

      </div>
      <Button variant="primary" onClick={goToNextStep}>Next</Button>
    </form>
  );

  // Step 2: Review Form Data
  const renderStep2 = () => (
    <div className="review-container">
      <h1>2. Review Isian Form Down Payment</h1>
      <div>
        <p><strong>ID NUP:</strong> 45555567</p>
        <p><strong>ID Booking Fee:</strong> 45555567</p>
        <p><strong>ID Down Payment:</strong> 45555567</p>
        <p><strong>Nomor Pesanan:</strong> 000007</p>
        {/* <p><strong>Nama Lengkap:</strong> {formData.fullName} Mulyono </p> */}
        {/* <p><strong>NIK:</strong> {formData.nik} 331142221</p> */}
        {/* <p><strong>Pekerjaan:</strong> {formData.occupation} Karyawan</p> */}
        {/* <p><strong>Alamat:</strong> {formData.address} Jalan Merak Menyala 99, Klaten</p> */}
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
  <div className="step-container">
    <h1>3. Konfirmasi Pembayaran</h1>
    <p>
      Harap lakukan transfer sesuai petunjuk dan unggah bukti pembayaran untuk melanjutkan proses Booking Fee Anda.
    </p>
    {/* Bukti Pembayaran Down Payment */}
    <label htmlFor="paymentReceipt">Bukti Pembayaran Down Payment<span>*</span></label>
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
          <div style={{ textAlign: "center", marginLeft: '40%' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png" // Placeholder for success icon
              alt="Success"
              style={{ width: "100px", marginBottom: "20px" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4>Pembayaran Berhasil!</h4>
            <p>Bukti pembayaran Down Payment ID Number 45555567 Anda dengan nominal <b>{numberFormat(formData.payment_amount)}</b> telah berhasil diunggah. Silahkan ke halaman dashboard untuk memantau status pengajuan.</p>
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
