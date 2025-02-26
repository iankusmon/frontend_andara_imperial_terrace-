"use client";

import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "../app/nup/Nup.css"; 

interface FormData {
  fullName: string;
  nik: string;
  address: string;
  occupation: string;
  income: string;
  npwp: string;
  phone: string;
  email: string;
  villaUnitType: string;
  unitNumber: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  KTP: File | null;
  paymentMethod: string;
  paymentReceipt: File | null;
}

const WizardForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    nik: "",
    address: "",
    occupation: "",
    income: "",
    npwp: "",
    phone: "",
    email: "",
    villaUnitType: "",
    unitNumber: "",
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    KTP: null,
    paymentMethod: "",
    paymentReceipt: null,
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
    fieldName: keyof FormData
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    setShowSuccessModal(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container styled-form">
        <h1>Form NUP</h1>
        <div className="form-grid styled-grid">
          <label>Nama Lengkap*</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          
          <label>NIK*</label>
          <input type="text" name="nik" value={formData.nik} onChange={handleInputChange} required />
          
          <label>Alamat</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          
          <label>Pekerjaan</label>
          <select name="occupation" value={formData.occupation} onChange={handleInputChange}>
            <option value="">Pilih</option>
            <option value="PNS">PNS</option>
            <option value="Swasta">Swasta</option>
            <option value="Polisi">Polisi</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <label>Penghasilan Bulanan</label>
          <select name="income" value={formData.income} onChange={handleInputChange}>
            <option value="">Pilih</option>
            <option value="1,000,000-5,000,000">1 Juta - 5 Juta</option>
            <option value="6,000,000-10,000,000">6 Juta - 10 Juta</option>
            <option value="11,000,000-20,000,000">11 Juta - 20 Juta</option>
            <option value="20,000,000">20 Juta ke atas</option>
          </select>
          
          <label>No NPWP</label>
          <input type="text" name="npwp" value={formData.npwp} onChange={handleInputChange} />
          
          <label>No Telp / HP Pemesan</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
          
          <label>Email Pemesan</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          
          <label>Villa Unit Type</label>
          <select name="villaUnitType" value={formData.villaUnitType} onChange={handleInputChange}>
            <option value="">Pilih</option>
            <option value="Da Vinci Residence">Da Vinci Residence</option>
            <option value="Amsterdam Royale">Amsterdam Royale</option>
            <option value="Athena Height">Athena Height</option>
          </select>
          
          <label>Pilihan Unit Nomor Villa</label>
          <input type="text" name="unitNumber" value={formData.unitNumber} onChange={handleInputChange} />
          
          <label>Nama Bank</label>
          <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} />
          
          <label>Nama Pemilik Rekening</label>
          <input type="text" name="accountHolder" value={formData.accountHolder} onChange={handleInputChange} />
          
          <label>Nomor Rekening</label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} />
          
          <label>Upload KTP*</label>
          <input type="file" onChange={(e) => handleFileChange(e, "KTP")} required />
          
          <label>Metode Pembayaran*</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} required>
            <option value="">Pilih</option>
            <option value="cash">Cash</option>
            <option value="transfer">Transfer</option>
          </select>
          
          <label>Upload Bukti Pembayaran*</label>
          <input type="file" onChange={(e) => handleFileChange(e, "paymentReceipt")} required />
        </div>

        <Button variant="success" type="submit">Submit</Button>
      </form>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body>
          <div className="modal-success">
            <h4>Pembayaran Berhasil!</h4>
            <p>
              Bukti pembayaran NUP Anda telah berhasil diunggah. Silakan ke halaman dashboard untuk memantau status pengajuan.
            </p>
            <Button variant="primary" onClick={() => setShowSuccessModal(false)}>Dashboard</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WizardForm;