import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`border rounded-lg shadow-lg p-4 bg-white ${className}`}>
    {children}
  </div>
);

interface CardContentProps {
  title: string;
  content: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, content }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

const TermsAndConditions: React.FC = () => {
  const terms = [
    { id: 1, title: "Pendaftaran dan Persetujuan", content: "Program ini terbuka untuk semua orang tanpa memandang latar belakang. PT Andara Rejo Makmur memiliki hak untuk menyetujui atau menolak pendaftaran tanpa penjelasan lebih lanjut." },
    { id: 2, title: "Tanggung Jawab Agen Affiliate", content: "Agen wajib mempromosikan properti secara jujur dan tidak menyesatkan serta mematuhi hukum yang berlaku." },
    { id: 3, title: "Program Referral", content: "Agen dapat mengundang orang lain untuk bergabung dan menerima komisi tambahan dari penjualan referensi." },
    { id: 4, title: "Komisi", content: "Komisi dihitung berdasarkan total penjualan dan dibayarkan dalam beberapa tahap sesuai perkembangan pembayaran konsumen." },
    { id: 5, title: "Kekayaan Intelektual", content: "Agen dapat menggunakan materi promosi perusahaan, namun tidak boleh mengubah atau menyalahgunakan tanpa izin." },
    { id: 6, title: "Pemutusan Kerja Sama", content: "Kerja sama dapat dihentikan kapan saja dengan pemberitahuan tertulis jika ada pelanggaran aturan atau perubahan kebijakan perusahaan." },
    { id: 7, title: "Konsekuensi Pelanggaran", content: "Akun bisa diblokir jika terjadi pelanggaran dan perusahaan berhak mengambil langkah hukum jika diperlukan." },
    { id: 8, title: "Perubahan Syarat dan Ketentuan", content: "PT Andara Rejo Makmur berhak mengubah syarat dan ketentuan, dan peserta akan diberitahu mengenai perubahan tersebut." },
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-center pt-20">
        Syarat dan Ketentuan Andara Agen Affiliate Program
      </h1>
      <p className="mb-6 text-gray-700 text-center">
        Syarat dan Ketentuan ini merupakan aturan yang harus dipatuhi oleh semua peserta.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {terms.map((term) => (
          <Card key={term.id} className="shadow-lg">
            <CardContent title={`${term.id}. ${term.title}`} content={term.content} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
