"use client";

import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "../app/nup/Nup.css"; // Pastikan file CSS digunakan

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
  paymentReceipt: File | null;
}

const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
    paymentReceipt: null,
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Cek apakah user adalah Customer
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const userRole = localStorage.getItem("userRole");
  //     if (userRole === "customer") {
  //       setIsAuthenticated(true);
  //     } else {
  //       alert("Anda harus login sebagai Customer untuk mengisi NUP!");
  //     }
  //   }
  // }, []);

  // Fungsi untuk mengupdate state form
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menangani upload file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    setShowSuccessModal(true);
  };

  // Step Navigation Functions
  const goToNextStep = () => {
    if (currentStep === 1 && (!formData.fullName || !formData.nik || !formData.KTP)) {
      alert("Harap isi semua bidang yang diperlukan di Step 1!");
      return;
    }
    if (currentStep === 2 && (!formData.paymentMethod || !formData.paymentReceipt)) {
      alert("Harap isi semua bidang yang diperlukan di Step 2!");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const numberFormat = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  // Step 1: Form NUP
  const renderStep1 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1. Form NUP</h1>
      <div className="form-grid styled-grid">
        <label htmlFor="fullName">Nama Lengkap<span>*</span></label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />

        <label htmlFor="nik">NIK<span>*</span></label>
        <input type="text" id="nik" name="nik" value={formData.nik} onChange={handleInputChange} required />

        <label htmlFor="KTP">Scan KTP<span>*</span></label>
        <input type="file" id="KTP" onChange={(e) => handleFileChange(e, "KTP")} required />

        <label htmlFor="paymentMethod">Cara Pembayaran<span>*</span></label>
        <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} required>
          <option value="">Pilih</option>
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>

      <Button variant="primary" onClick={goToNextStep}>Next</Button>
    </form>
  );

  // Step 2: Konfirmasi dan Upload Bukti Pembayaran
  const renderStep2 = () => (
    <div className="review-container">
      <h1>2. Konfirmasi Pembayaran</h1>
      <label htmlFor="paymentReceipt">Upload Bukti Pembayaran<span>*</span></label>
      <input type="file" id="paymentReceipt" onChange={(e) => handleFileChange(e, "paymentReceipt")} required />

      <Button variant="secondary" onClick={goToPreviousStep}>Back</Button>
      <Button variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
    </div>
  );

  // Render step berdasarkan state
  const renderStep = () => {
    // if (!isAuthenticated) {
    //   return <h2>Silakan login sebagai Customer untuk mengisi NUP</h2>;
    // }
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      default:
        return renderStep1();
    }
  };

  return (
    <div>
      {renderStep()}

      {/* MODAL SUKSES DENGAN STYLE TERPUSAT */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body>
          <div className="modal-success">
            <h4>Pembayaran Berhasil!</h4>
            <p>
              Bukti pembayaran NUP Anda dengan nominal <b>{numberFormat(10000000)}</b> telah berhasil diunggah.
              Silakan ke halaman dashboard untuk memantau status pengajuan.
            </p>
            <Button variant="primary" onClick={() => setShowSuccessModal(false)}>Dashboard</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WizardForm;
