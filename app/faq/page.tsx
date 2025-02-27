"use client";

import React, { useState } from "react";

const faqs = [
  {
    category: "Umum",
    questions: [
      {
        question: "Apa itu Andara Imperial Terrace?",
        answer:
          "Andara Imperial Terrace adalah proyek properti eksklusif yang menawarkan villa mewah dengan berbagai fasilitas modern.",
      },
      {
        question: "Di mana lokasi Andara Imperial Terrace?",
        answer:
          "Lokasi proyek ini berada di kawasan strategis yang memberikan akses mudah ke berbagai destinasi wisata dan pusat bisnis.",
      },
      {
        question: "Bagaimana cara membeli unit villa di Andara Imperial Terrace?",
        answer:
          "Anda bisa menghubungi tim sales kami atau mengunjungi website resmi untuk informasi lebih lanjut.",
      },
      {
        question: "Apakah ada program cicilan untuk pembelian villa?",
        answer:
          "Ya, kami menyediakan berbagai skema pembayaran, termasuk cicilan dengan DP minimal 30%.",
      },
      {
        question: "Siapa yang bisa menjadi agen affiliate Andara Imperial Terrace?",
        answer:
          "Siapa saja yang tertarik untuk mendapatkan komisi dari penjualan villa dapat mendaftar sebagai agen affiliate kami.",
      },
    ],
  },
  {
    category: "Pembayaran",
    questions: [
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer:
          "Kami menerima pembayaran melalui transfer bank, kartu kredit, dan cicilan via lembaga keuangan rekanan kami.",
      },
      {
        question: "Bagaimana proses pembayaran Down Payment (DP)?",
        answer:
          "Setelah memilih unit, Anda harus membayar DP minimal 30% untuk mengamankan transaksi.",
      },
      {
        question: "Apakah ada biaya tambahan selain harga unit?",
        answer:
          "Ada beberapa biaya tambahan seperti pajak, biaya administrasi, dan biaya pengelolaan yang akan dijelaskan lebih lanjut oleh tim kami.",
      },
      {
        question: "Apakah ada diskon untuk pembayaran lunas?",
        answer:
          "Ya, kami memberikan diskon khusus bagi pelanggan yang melakukan pembayaran lunas di awal.",
      },
    ],
  },
  {
    category: "Legalitas",
    questions: [
      {
        question: "Apakah Andara Imperial Terrace memiliki izin resmi?",
        answer:
          "Ya, semua unit villa kami telah memiliki izin resmi dan dokumen legal yang lengkap.",
      },
      {
        question: "Bagaimana proses balik nama sertifikat?",
        answer:
          "Setelah transaksi selesai, proses balik nama sertifikat akan dibantu oleh tim legal kami dalam waktu yang telah ditentukan.",
      },
      {
        question: "Apakah ada jaminan keamanan hukum dalam transaksi?",
        answer:
          "Kami memastikan bahwa seluruh transaksi dilakukan dengan transparansi penuh dan sesuai dengan regulasi yang berlaku.",
      },
    ],
  },
];

const FAQPage = () => {
  // Menggunakan string | null agar sesuai dengan toggleFAQ
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-6">FAQ - Pertanyaan Umum</h1>
      <div className="space-y-6">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Menggunakan category daripada sectionTitle */}
            <h2 className="text-xl font-semibold mb-2">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((faq, index) => {
                const faqKey = `${sectionIndex}-${index}`;

                return (
                  <div key={faqKey} className="border p-4 rounded-lg">
                    <button
                      className="w-full text-left flex justify-between items-center py-2"
                      onClick={() => toggleFAQ(faqKey)}
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      <span className="text-xl">
                        {openIndex === faqKey ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === faqKey && <p className="mt-2 text-gray-700">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
