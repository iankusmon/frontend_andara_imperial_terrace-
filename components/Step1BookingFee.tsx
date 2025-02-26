"use client";
import React, { useState } from "react";
import { Form, Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../app/booking-fee/BookingFee.css"; // Add your custom CSS

interface FormData {
  paymentType: string;
  payment_amount: string;
  cashTempoPeriod: string;
  kprTenorPeriod: string;
  KTP: File | null;
  wifeKTP: File | null;
  paymentMethod: string;
  villaUnitInterest: string;
  package: string;
  occupation: string;
  mobile_number: string;
  email: string;
  age: string;
  nik: string;
  fullName: string;
  gender: string;
  married_status: string;
  education: string;
  salary_range: string;
  address: string;
  emergency_email: string;
  emergency_mobile_number: string;
  emergency_address: string;
}

const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1, 2, 3)
  const [formData, setFormData] = useState<FormData>({
    paymentType: "",
    payment_amount: "",
    cashTempoPeriod: "",
    kprTenorPeriod: "",
    KTP: null,
    wifeKTP: null,
    paymentMethod: "",
    villaUnitInterest: "",
    package: "",
    occupation: "",
    mobile_number: "",
    email: "",
    age: "",
    nik: "",
    fullName: "",
    gender: "",
    married_status: "",
    education: "",
    salary_range: "",
    address: "",
    emergency_email: "",
    emergency_mobile_number: "",
    emergency_address: ""
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // All Payment Types

  const [KTPPreview, setKTPPreview] = useState<string | null>(null);
  const [KKPreview, setKKPreview] = useState<string | null>(null);
  const [NPWPPreview, setNPWPPreview] = useState<string | null>(null);
  const [BukuNikahreview, setBukuNikahreview] = useState<string | null>(null);

  // If KPR Payment Type and occupation Karyawan

  const [SlipGaji3BulanPreview, setSlipGaji3BulanPreview] = useState<string | null>(null);
  const [RekeningKoran3BulanPreview, setRekeningKoran3BulanPreview] = useState<string | null>(null);
  const [SKPekerjaanPreview, setSKPekerjaanPreviewPreview] = useState<string | null>(null);

  // If KPR Payment Type and occupation Wirausaha

  const [LegalUsahaPreview, setLegalUsahaPreview] = useState<string | null>(null);
  const [LaporanKeuanganPreview, setLaporanKeuanganPreview] = useState<string | null>(null);
  const [RekeningKoranUsaaha6BulanPreview, setRekeningKoranUsaaha6BulanPreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "KTP" | "paymentReceipt" | "KK" | "SlipGaji3Bulan" | "RekeningKoran3Bulan" | "SKPekerjaan" | "LegalUsaha" | "LaporanKeuangan" | "RekeningKoranUsaaha6Bulan"
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

  
  const handleBukuNikahFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "BukuNikah" | "wifeKTP"
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [fieldName]: file });

    if (fieldName === "BukuNikah" && file) {
      const reader = new FileReader();
      reader.onload = () => {
        setKTPPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNPWPFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "NPWP" | "wifeKTP"
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [fieldName]: file });

    if (fieldName === "NPWP" && file) {
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

  // Step 1.1: Form Data Diri
  const renderStep1_1 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1.1 Form Data Diri</h1>
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

        {/* Email */}
        <label htmlFor="email">Email<span>*</span></label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Mobile Number */}
        <label htmlFor="mobile_number">Nomor Handphone<span>*</span></label>
        <input
          type="text"
          id="mobile_number"
          name="mobile_number"
          value={formData.mobile_number}
          onChange={handleInputChange}
          required
        />

        {/* Umur */}
        <label htmlFor="age">Umur<span>*</span></label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
        
        {/* Jenis kelamin */}
        <label htmlFor="gender">Jenis Kelamin<span>*</span></label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="laki_laki">Laki-laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
      </div>  
      <button type="button" onClick={goToNextStep} className="btn btn-primary">
      Next
    </button>
    </form>
  );

  // Step 1.2: Form Pekerjaan dan Finansial
  const renderStep1_2 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>1.2 Form Pekerjaan dan Finansial </h1>
      <div className="form-grid styled-grid">

        {/* Status Pernikahan */}
        <label htmlFor="married_status">Status Pernikahan<span>*</span></label>
        <select
          id="married_status"
          name="married_status"
          value={formData.married_status}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="married">Menikah</option>
          <option value="not_married">Belum Menikah</option>
        </select>

        {/* Pendidikan Terakhir */}
        <label htmlFor="education">Pendidikan Terakhir<span>*</span></label>
        <select
          id="education"
          name="education"
          value={formData.education}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="smp">SMP/ Sederajat</option>
          <option value="sma">SMA/ Sederajat</option>
          <option value="s1">Sarjana (S1)</option>
          <option value="s2">Magister (S2)</option>
          <option value="s3">Doktor (S3)</option>
        </select>

        {/* Kisaran Gaji */}
        <label htmlFor="salary_range">Kisaran Gaji<span>*</span></label>
        <select
          id="salary_range"
          name="salary_range"
          value={formData.salary_range}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih</option>
          <option value="one_million_below">Rp1.000.000 ke bawah</option>
          <option value="one_to_five_millions">Rp1.000.000 - Rp5.000.000</option>
          <option value="six_to_ten_millions">Rp6.000.001 - Rp10.000.000</option>
          <option value="eleven_to_fiteen_millions">Rp11.000.000 - Rp15.000.000</option>
          <option value="sixteen_to_twenty_millions">Rp16.000.000 - Rp20.000.000</option>
          <option value="twenty_millions_above">Rp20.000.000 ke atas</option>
        </select>

        {/* Alamat */}
        <label htmlFor="address">Alamat Saat ini<span>*</span></label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          // onChange={ handleInputChange }
          onChange={(e) => handleInputChange}
          required
        ></textarea>

        {/* Email Darurat */}
        <label htmlFor="emergency_email">Email Kontak Darurat<span>*</span></label>
        <input
          type="text"
          id="emergency_email"
          name="emergency_email"
          value={formData.emergency_email}
          // onChange={handleInputChange}
          onChange={(e) => handleInputChange}
          required
        />

        {/* Mobile Number Darurat */}
        <label htmlFor="emergency_mobile_number">Nomor Handphone Darurat<span>*</span></label>
        <input
          type="text"
          id="emergency_mobile_number"
          name="emergency_mobile_number"
          value={formData.emergency_mobile_number}
          onChange={(e) => handleInputChange}
          // onChange={handleInputChange}
          required
        />

        {/* Alamat Darurat */}
        <label htmlFor="emergency_address">Alamat Darurat<span>*</span></label>
        <textarea
          id="emergency_address"
          name="emergency_address"
          value={formData.emergency_address}
          // onChange={handleInputChange}
          onChange={(e) => handleInputChange}
          required
        ></textarea>
      </div>
      <button type="button" onClick={goToPreviousStep} className="btn btn-primary">
      Back
    </button>
      <button type="button" onClick={goToNextStep} className="btn btn-primary">
      Next
    </button>
    </form>
  );

  // Step 2: Form Upload Booking Fee
  const renderStep2 = () => (
    <form onSubmit={handleSubmit} className="form-container styled-form">
      <h1>2. Form Upload Booking Fee</h1>
      <div className="form-grid styled-grid">

        {/* Scan KTP */}
        <label htmlFor="KTP">Scan KTP<span>*</span></label>
        <input
          type="file"
          id="ktp"
          onChange={(e) => handleFileChange(e, "KTP")}
          required
        />

        {/* Scan KK */}
        <label htmlFor="KK">Scan KK<span>*</span></label>
        <input
          type="file"
          id="kk"
          onChange={(e) => handleFileChange(e, "KK")}
          required
        />

        {/* Scan Buku Nikah */}
        <label htmlFor="buku_nikah">Scan Buku Nikah<span>*</span></label>
        <input
          type="file"
          id="buku_nikah"
          onChange={(e) => handleBukuNikahFileChange(e, "BukuNikah")}
          required
        />

        {/* Scan NPWP */}
        <label htmlFor="npwp">Scan NPWP<span>*</span></label>
        <input
          type="file"
          id="npwp"
          onChange={(e) => handleNPWPFileChange(e, "NPWP")}
          required
        />
      
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
          <option value="cash_keras">Cash Keras</option>
          <option value="cash_tempo">Cash Tempo</option>
          <option value="kpr">KPR</option>
        </select>

        <>
        {
          formData.paymentType == "cash_tempo" && (
          /* Cash Tempo Periode */  
          <>              
          <label htmlFor="cashTempoPeriod">Cash Tempo Period<span>*</span></label><select
            id="cashTempoPeriod"
            name="cashTempoPeriod"
            value={formData.cashTempoPeriod}
            onChange={handleInputChange}
            required
          >
            <option value="">Pilih</option>
            <option value="three_months">3 Bulan</option>
            <option value="six_months">6 Bulan</option>
            <option value="twelve_months">12 BUlan</option>
          </select></>
        )}
        </>

        <>
        {
          formData.paymentType == "kpr" && (
          /* KPR Tenor Periode */
          <>
            <label htmlFor="kprTenorPeriod">KPR Tenor Period<span>*</span></label>
            <select
              id="kprTenorPeriod"
              name="kprTenorPeriod"
              value={formData.kprTenorPeriod}
              onChange={handleInputChange}
              required
            >
              <option value="">Pilih</option>
              <option value="ten_years">10 Tahun</option>
              <option value="fifteen_years">15 Tahun</option>
              <option value="twenty_years">20 Tahun</option>
            </select>

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
                <option value="polisi">Polisi</option>
                <option value="pengacara">Pengacara</option>
                <option value="wirausaha">Wirausaha</option>                
              </select>
             
              {
                formData.occupation == "karyawan" && (
                  
                  <>
                  <label htmlFor="SlipGaji3Bulan">Scan Slip Gaji 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="SlipGaji3Bulan"
                    onChange={(e) => handleFileChange(e, "SlipGaji3Bulan")}
                    required
                  />

                  <label htmlFor="RekeningKoran3Bulan">Scan Rekening Koran 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="RekeningKoran3Bulan"
                    onChange={(e) => handleFileChange(e, "RekeningKoran3Bulan")}
                    required
                  />

                  <label htmlFor="SKPekerjaan">Scan SK Pekerjaan<span>*</span></label>
                  <input
                    type="file"
                    id="SKPekerjaan"
                    onChange={(e) => handleFileChange(e, "SKPekerjaan")}
                    required
                  />
                  </>
                )
              }

              {
                formData.occupation == "bumn" && (
                  
                  <>
                  <label htmlFor="SlipGaji3Bulan">Scan Slip Gaji 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="SlipGaji3Bulan"
                    onChange={(e) => handleFileChange(e, "SlipGaji3Bulan")}
                    required
                  />

                  <label htmlFor="RekeningKoran3Bulan">Scan Rekening Koran 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="RekeningKoran3Bulan"
                    onChange={(e) => handleFileChange(e, "RekeningKoran3Bulan")}
                    required
                  />

                  <label htmlFor="SKPekerjaan">Scan SK Pekerjaan<span>*</span></label>
                  <input
                    type="file"
                    id="SKPekerjaan"
                    onChange={(e) => handleFileChange(e, "SKPekerjaan")}
                    required
                  />
                  </>
                )
              }

              {
                formData.occupation == "pns" && (
                  
                  <>
                  <label htmlFor="SlipGaji3Bulan">Scan Slip Gaji 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="SlipGaji3Bulan"
                    onChange={(e) => handleFileChange(e, "SlipGaji3Bulan")}
                    required
                  />

                  <label htmlFor="RekeningKoran3Bulan">Scan Rekening Koran 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="RekeningKoran3Bulan"
                    onChange={(e) => handleFileChange(e, "RekeningKoran3Bulan")}
                    required
                  />

                  <label htmlFor="SKPekerjaan">Scan SK Pekerjaan<span>*</span></label>
                  <input
                    type="file"
                    id="SKPekerjaan"
                    onChange={(e) => handleFileChange(e, "SKPekerjaan")}
                    required
                  />
                  </>
                )
              }

              {
                formData.occupation == "polisi" && (
                  
                  <>
                  <label htmlFor="SlipGaji3Bulan">Scan Slip Gaji 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="SlipGaji3Bulan"
                    onChange={(e) => handleFileChange(e, "SlipGaji3Bulan")}
                    required
                  />

                  <label htmlFor="RekeningKoran3Bulan">Scan Rekening Koran 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="RekeningKoran3Bulan"
                    onChange={(e) => handleFileChange(e, "RekeningKoran3Bulan")}
                    required
                  />

                  <label htmlFor="SKPekerjaan">Scan SK Pekerjaan<span>*</span></label>
                  <input
                    type="file"
                    id="SKPekerjaan"
                    onChange={(e) => handleFileChange(e, "SKPekerjaan")}
                    required
                  />
                  </>
                )
              }

              {
                formData.occupation == "pengacara" && (
                  
                  <>
                  <label htmlFor="SlipGaji3Bulan">Scan Slip Gaji 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="SlipGaji3Bulan"
                    onChange={(e) => handleFileChange(e, "SlipGaji3Bulan")}
                    required
                  />

                  <label htmlFor="RekeningKoran3Bulan">Scan Rekening Koran 3 Bulan Terakhir<span>*</span></label>
                  <input
                    type="file"
                    id="RekeningKoran3Bulan"
                    onChange={(e) => handleFileChange(e, "RekeningKoran3Bulan")}
                    required
                  />

                  <label htmlFor="SKPekerjaan">Scan SK Pekerjaan<span>*</span></label>
                  <input
                    type="file"
                    id="SKPekerjaan"
                    onChange={(e) => handleFileChange(e, "SKPekerjaan")}
                    required
                  />
                  </>
                )
              }

              {
                formData.occupation == "wirausaha" && (
                  <>
                  <label htmlFor="LegalUsaha">Scan Legal Usaha<span>*</span></label>
                  <input
                    type="file"
                    id="LegalUsaha"
                    onChange={(e) => handleFileChange(e, "LegalUsaha")}
                    required
                  />

                  <label htmlFor="LaporanKeuangan">Scan Laporan Keuangan<span>*</span></label>
                  <input
                    type="file"
                    id="LaporanKeuangan"
                    onChange={(e) => handleFileChange(e, "LaporanKeuangan")}
                    required
                  />

                  <label htmlFor="RekeningKoranUsaaha6Bulan">Scan Rekening Koran Usaaha 6 Bulan<span>*</span></label>
                  <input
                    type="file"
                    id="RekeningKoranUsaaha6Bulan"
                    onChange={(e) => handleFileChange(e, "RekeningKoranUsaaha6Bulan")}
                    required
                  />
                  </>
                )
              }
            </>
           )}
        </>    

        {/* Cara Pembayaran */}
        <label htmlFor="paymentMethod">Cara Pembayaran<span>*</span></label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={(e) => handleInputChange}
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
      <button type="button" onClick={goToPreviousStep} className="btn btn-primary">
      Back
    </button>
      <button type="button" onClick={goToNextStep} className="btn btn-primary">
      Next
    </button>
    </form>
  );

  // Step 3: Review Form Data
  const renderStep3 = () => (
    <div className="review-container">
      <h1>3. Review Isian Form Booking Fee</h1>
      <div>
        <p><strong>ID NUP:</strong> 45555567</p>
        <p><strong>ID Booking Fee:</strong> 45555567</p>
        <p><strong>Nomor Pesanan:</strong> 000007</p>
        <p><strong>Nama Lengkap:</strong> {formData.fullName} Mulyono </p>
        <p><strong>NIK:</strong> {formData.nik} 331142221</p>
        <p><strong>Pekerjaan:</strong> {formData.occupation} Karyawan</p>
        <p><strong>Nama Lengkap: </strong>{formData.fullName}</p>
        <p><strong>NIK: </strong>{formData.nik}</p>
        <p><strong>Email: </strong>{formData.email}</p>
        <p><strong>Nomor Handphone: </strong>{formData.mobile_number}</p>
        <p><strong>Umur: </strong>{formData.age}</p>
        <p><strong>Jenis Kelamin: </strong>{formData.gender}</p>
        <p><strong>Status Perkawinan: </strong>{formData.married_status}</p>
        <p><strong>Pendidikan Terakhir: </strong>{formData.education}</p>
        <p><strong>Range Gaji: </strong>{formData.salary_range}</p>
        <p><strong>Alamat Saat Ini: </strong>{formData.address}</p>
        <p><strong>Email Darurat: </strong>{formData.emergency_email}</p>
        <p><strong>Nomor Handphone Darurat: </strong>{formData.emergency_mobile_number}</p>
        <p><strong>Alamat Darurat: </strong>{formData.emergency_address}</p>
        <p><strong>Minat Villa Unit:</strong> {formData.villaUnitInterest} Eiffel 99</p>
        <p><strong>Cara Pembayaran:</strong> {formData.paymentMethod} Transfer</p>
        <p><strong>Nominal Pembayaran:</strong> {numberFormat(formData.payment_amount)}</p>
        <p><strong>Transfer Ke:</strong> 0035-01-001543-56-9 BRI atas nama Andara Rejo Makmur</p>
        <p><strong>Datang Ke Lokasi (apabila cash):</strong> Kantor Andara Rejo Makmur</p>
      </div>
      <button type="button" onClick={goToPreviousStep} className="btn btn-primary">
      Back
    </button>
      <button type="button" onClick={handleConfirmationSubmit} className="btn btn-primary">
      Next
    </button>
    </div>
  );

  // Step 4: Payment Confirmation
const renderStep4 = () => (
  <div className="step-container">
    <h1>4. Konfirmasi Pembayaran</h1>
    <p>
      Harap lakukan transfer sesuai petunjuk dan unggah bukti pembayaran untuk melanjutkan proses Booking Fee Anda.
    </p>
    {/* Bukti Pembayaran Booking Fee */}
    <label htmlFor="paymentReceipt">Bukti Pembayaran Booking Fee<span>*</span></label>
        <input
          type="file"
          id="paymentReceipt"
          onChange={(e) => handleFileChange(e, "paymentReceipt")}
          required
        />
    <div className="button-group">
    <button type="button" onClick={goToPreviousStep} className="btn btn-primary">
      Back
    </button>
      <button type="button" onClick={goToNextStep} className="btn btn-primary">
      Next
    </button>
      </div>
  </div>
);

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1_1();
      case 2:
        return renderStep1_2();
      case 3:
        return renderStep2();
      case 4:
        return renderStep3();
      case 5:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}

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
            <h4>Pembayaran Berhasil!</h4>
            <p>Bukti pembayaran Booking Fee ID Number 45555567 Anda dengan nominal <b>{numberFormat(formData.payment_amount)}</b> telah berhasil diunggah. Silahkan ke halaman dashboard untuk memantau status pengajuan.</p>
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
      `}</style>
    </div>
  );
};

export default WizardForm;
