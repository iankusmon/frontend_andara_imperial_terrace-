"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import "../app/nup/Nup.css";
import "../app/nup/custom-bootstrap.css"; // Overwrite warna Bootstrap

const customStyles = `
  .navbar {
    background-color: black !important;
  }
  .navbar .nav-link,
  .navbar-brand {
    color: white !important;
  }
  .navbar .nav-link:hover {
    color: gray !important;
  }
  .footer {
    background-color: black !important;
    color: white !important;
  }
`

const transformToSnakeCase = (text: any) =>
text
.toLowerCase() // Ubah ke huruf kecil
.replace(/\s+/g, "_"); // Ganti spasi dengan underscore

interface FormDataState {
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

const villaUnitOptions: { [key: string]: number } = {
  "Da Vinci Residence": 10,
  "Amsterdam Royal": 7,
  "Athena Height": 9,
};

const WizardForm: React.FC = () => {
  const [formDataState, setFormDataState] = useState<FormDataState>({
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
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showLoginWarning, setShowLoginWarning] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      setShowLoginWarning(true);
      setTimeout(() => {
        router.push("/login/customer");
      }, 3000);
    }

    const customerId = localStorage.getItem("customerId");
    if (!customerId) {
      alert("Anda harus login terlebih dahulu!");
      router.push("/login/customer");
      return;
    }
    else {
      setCustomerId(customerId);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDataState({ ...formDataState, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormDataState) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormDataState({ ...formDataState, [fieldName]: file });
  };

  const generateNupNumber = () => `NUP-${Date.now()}`;
  const generateOrderNumber = () => `ORD-${Date.now()}`;

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Reset wizard or navigate to dashboard
  };

  const numberFormat = (value: any) =>
  new Intl.NumberFormat('IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrorAlert(false);

    const formData = new FormData();
    formData.append("nup[customer_id]", customerId);
    formData.append("nup[nup_number]", generateNupNumber());
    formData.append("nup[order_number]", generateOrderNumber());
    formData.append("nup[fullname]", formDataState.fullName);
    formData.append("nup[nik]", formDataState.nik);
    formData.append("nup[address]", formDataState.address);
    formData.append("nup[occupation]", formDataState.occupation);
    formData.append("nup[income]", formDataState.income);
    formData.append("nup[npwp]", formDataState.npwp);
    formData.append("nup[phone]", formDataState.phone);
    formData.append("nup[email]", formDataState.email);
    formData.append("nup[villa_desired]", transformToSnakeCase(formDataState.villaUnitType));
    formData.append("nup[villa_unit_desired]", formDataState.unitNumber);
    formData.append("nup[bank_name]", formDataState.bankName);
    formData.append("nup[account_holder]", formDataState.accountHolder);
    formData.append("nup[account_number]", formDataState.accountNumber);
    formData.append("nup[payment_method]", formDataState.paymentMethod);
    formData.append("nup[status]", "pending");

    if (formDataState.KTP) {
      formData.append("nup[scan_ktp]", formDataState.KTP);
    }
    if (formDataState.paymentReceipt) {
      formData.append("nup[payment_receipt]", formDataState.paymentReceipt);
    }

    try {
      const response = await fetch("http://localhost:3000/api/customers/nups", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        setShowErrorAlert(true);
      }
    } catch (error) {
      setShowErrorAlert(true);
    }
  };

  return (
    <div>
      {showLoginWarning && (
        <Alert variant="danger" className="text-center">
          Anda harus login terlebih dahulu untuk mengisi formulir NUP. Anda akan diarahkan ke halaman login dalam 3 detik...
        </Alert>
      )}

      {showErrorAlert && (
        <Alert variant="danger" className="text-center">
          Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.
        </Alert>
      )}

      {!showLoginWarning && (
        <form onSubmit={handleSubmit} className="form-container styled-form">
          <h1>Form NUP</h1>
          <div className="form-grid styled-grid">
            <label>Nama Lengkap*</label>
            <input type="text" name="fullName" value={formDataState.fullName} onChange={handleInputChange} required />

            <label>NIK*</label>
            <input type="text" name="nik" value={formDataState.nik} onChange={handleInputChange} required />

            <label>Alamat</label>
            <input type="text" name="address" value={formDataState.address} onChange={handleInputChange} />

            <label>Pekerjaan</label>
            <select name="occupation" value={formDataState.occupation} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="pns">PNS</option>
              <option value="swasta">Swasta</option>
              <option value="wiraswasta">Wiraswasta</option>
              <option value="lainnya">Lainnya</option>
            </select>

            <label>Upload KTP*</label>
            <input type="file" onChange={(e) => handleFileChange(e, "KTP")} required />

            <label>Tipe Unit Villa*</label>
            <select name="villaUnitType" value={formDataState.villaUnitType} onChange={handleInputChange} required>
              <option value="">Pilih</option>
              {Object.keys(villaUnitOptions).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <label>Pilihan Nomor Unit Villa*</label>
            <select name="unitNumber" value={formDataState.unitNumber} onChange={handleInputChange} required>
              <option value="">Pilih</option>
              {Array.from({ length: villaUnitOptions[formDataState.villaUnitType] || 0 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString()}>{i + 1}</option>
              ))}
            </select>

            <label>Nama Bank</label>
            <input type="text" name="bankName" value={formDataState.bankName} onChange={handleInputChange} />

            <label>Nama Pemilik Rekening</label>
            <input type="text" name="accountHolder" value={formDataState.accountHolder} onChange={handleInputChange} />

            <label>Nomor Rekening</label>
            <input type="text" name="accountNumber" value={formDataState.accountNumber} onChange={handleInputChange} />

            <label>Metode Pembayaran*</label>
            <select name="paymentMethod" value={formDataState.paymentMethod} onChange={handleInputChange} required>
              <option value="">Pilih</option>
              <option value="cash">Cash</option>
              <option value="transfer">Transfer</option>
            </select>

            <label>Upload Bukti Pembayaran*</label>
            <input type="file" onChange={(e) => handleFileChange(e, "paymentReceipt")} required />
          </div>

          <Button variant="success" type="submit">Submit</Button>
        </form>
      )}

        <Modal show={showSuccessModal} onHide={handleModalClose} centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Sukses</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div style={{ textAlign: "center", marginLeft: "40%" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png" // Placeholder for success icon
              alt="Success"
              style={{ width: "100px", marginBottom: "20px" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
          <h4 className="text-success">
            <i className="bi bi-check-circle"></i> Pembayaran Berhasil!
          </h4>
          <p>Bukti pembayaran NUP Anda telah berhasil diunggah.</p>
          <Button variant="primary" onClick={() => router.push("/customer-dashboard")}>Ke Dashboard</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleModalClose}>
            Dashboard
          </Button> */}
        </Modal.Footer>
      </Modal>
      <style jsx>{`
        /* FormWithTooltip.css */
        .react-tooltip {
          z-index: 1000;
          background-color: #333;
          color: #fff;
          border-radius: 4px;
          padding: 5px 10px;
          font-size: 12px;
          line-height: 1.5;
        }
        
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        
        .form-container h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        label {
          font-weight: bold;
        }
        
        input,
        select,
        button {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        button {
          grid-column: span 2;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          font-size: 16px;
        }
        
        button:hover {
          background-color: #0056b3;
        }
        
        /* Global Styling */
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        
        /* Container Styling */
        .review-container, .confirmation-container {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 20px auto;
        }
        
        /* Headings */
        h1 {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        
        /* Review Step Styling */
        .review-container p {
          font-size: 16px;
          line-height: 1.5;
          color: #555;
          margin: 10px 0;
        }
        
        .review-container p strong {
          font-weight: bold;
          color: #333;
        }
        
        /* Buttons Styling */
        button {
          padding: 10px 20px; /* Memberikan jarak dalam tombol */
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin: 5px !important; /* Pastikan margin ter-apply dengan !important */
        }
        
        button:hover {
          opacity: 0.9;
        }
        
        button:focus {
          outline: none;
        }
        
        button.secondary {
          background: #d3d3d3;
          color: #333;
          margin-right: 10px !important; /* Jarak khusus untuk tombol sekunder */
        }
        
        button.primary {
          background: #007bff;
          color: #fff;
        }
        
        button.success {
          background: #28a745;
          color: #fff;
        }
        
        /* Confirmation Section */
        .confirmation-container {
          text-align: center;
        }
        
        .confirmation-container p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }
        
        .confirmation-container label {
          display: block;
          font-size: 16px;
          color: #333;
          margin-bottom: 10px;
          text-align: left;
        }
        
        .confirmation-container input[type="file"] {
          display: block;
          margin: 10px auto 20px;
          padding: 10px;
          font-size: 14px;
        }
        
        .confirmation-container button {
          display: inline-block;
          margin: 5px;
        }
        
        /* Shared Container Styling for Steps */
        .step-container {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 20px auto;
        }
        
        .step-container h1 {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        
        .step-container p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        
        /* Form Input Styling */
        .step-container input[type="file"],
        .step-container textarea,
        .step-container input,
        .step-container select {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        
        /* Button Group */
        .button-group {
          display: flex;
          justify-content: space-between;
        }
        
        .button-group button {
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 4px;
          margin: 5px;
          cursor: pointer;
        }
        .navbar {
          background-color: black !important;
        }
        
        .navbar .nav-link,
        .navbar-brand {
          color: white !important;
        }
        
        .navbar .nav-link:hover {
          color: gray !important;
        }
        
        .footer {
          background-color: black !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default WizardForm;
