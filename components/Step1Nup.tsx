"use client";
import React, { useState } from "react";
import { Form, Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../app/nup/Nup.css"; // Add your custom CSS

interface FormData {
  fullName: string;
  nik: string;
  address: string;
  occupation: string;
  KTP: File | null;
  wifeKTP: File | null;
  paymentMethod: string;
  villaUnitInterest: string;
  package: string;
}

const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1, 2, 3)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    nik: "",
    address: "",
    occupation: "",
    KTP: null,
    wifeKTP: null,
    paymentMethod: "",
    villaUnitInterest: "",
    package: "",
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

  // Step 1: Form NUP
  const renderStep1 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1. Form NUP</h1>
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

        {/* NIK */}
        <label htmlFor="nik">NIK<span>*</span></label>
        <input
          type="text"
          id="nik"
          name="nik"
          value={formData.nik}
          onChange={handleInputChange}
          required
        />

        {/* Pekerjaan */}
        <label htmlFor="occupation">Pekerjaan<span>*</span></label>
        <select
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="karyawan">Karyawan</option>
          <option value="bumn">BUMN</option>
          <option value="pns">PNS</option>
          <option value="polis">Polis</option>
          <option value="pengacara">Pengacara</option>
          <option value="wirausaha">Wirausaha</option>  
        </select>

        {/* Scan KTP */}
        <label htmlFor="KTP">Scan KTP<span>*</span></label>
        <input
          type="file"
          id="ktp"
          onChange={(e) => handleFileChange(e, "KTP")}
          required
        />
        
        {/* Paket */}
        <label htmlFor="package">Paket<span>*</span></label>
        <select
          id="package"
          name="package"
          value={formData.package}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="ekslusif">Ekslusif</option>
          <option value="investasi">Investasi</option>
        </select>

        {/* Minat Villa Unit */}
        <label htmlFor="villaUnitInterest">Minat Villa<span>*</span></label>
        <input
          type="text"
          id="villaUnitInterest"
          name="villaUnitInterest"
          value={formData.villaUnitInterest}
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

        {/* Alamat */}
        <label htmlFor="address">Alamat<span>*</span></label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          // onChange={handleInputChange}
          onChange={ (e) => handleInputChange}
          required
        ></textarea>
      </div>
      <Button variant="primary" onClick={goToNextStep}>Next</Button>
    </form>
  );

  // Step 2: Review Form Data
  const renderStep2 = () => (
    <div className="review-container">
      <h1>2. Review Isian Form NUP</h1>
      <div>
        <p><strong>ID NUP:</strong> 45555567</p>
        <p><strong>Nomor Pesanan:</strong> 000007</p>
        <p><strong>Nama Lengkap:</strong> {formData.fullName}</p>
        <p><strong>NIK:</strong> {formData.nik}</p>
        <p><strong>Pekerjaan:</strong> {formData.occupation}</p>
        <p><strong>Alamat:</strong> {formData.address}</p>
        <p><strong>Paket:</strong> {formData.package}</p>
        <p><strong>Minat Villa Unit:</strong> {formData.villaUnitInterest}</p>
        <p><strong>Cara Pembayaran:</strong> {formData.paymentMethod}</p>
        <p><strong>Nominal Pembayaran:</strong> {numberFormat(10000000)}</p>
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
      Harap lakukan transfer sesuai petunjuk dan unggah bukti pembayaran untuk melanjutkan proses NUP Anda.
    </p>
    {/* Bukti Pembayaran NUP */}
    <label htmlFor="paymentReceipt">Bukti Pembayaran NUP<span>*</span></label>
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
        return renderStep1();
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
            <p>Bukti pembayaran NUP ID Number 45555567 Anda dengan nominal <b>{numberFormat(10000000)}</b> telah berhasil diunggah. Silahkan ke halaman dashboard untuk memantau status pengajuan.</p>
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
