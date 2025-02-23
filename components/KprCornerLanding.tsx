import Link from "next/link";

export default function KPRCorner() {
  return (
    <div className="container mx-auto p-6">
      <picture>
        <source srcSet="slide4.png" media="(min-width: 768px)" />
        <img src="slide_mobile4.png" alt="KPR Andara Imperial Terrace" className="w-full mb-4 pt-40" />
      </picture>
      <h1 className="text-2xl font-bold mb-4">KPR Corner</h1>
      <p className="mb-4">KPR di Andara Imperial Terrace merupakan solusi terbaik bagi Anda yang ingin memiliki hunian impian dengan skema pembayaran yang fleksibel dan proses yang transparan. Kami menawarkan kemudahan pembayaran dengan Down Payment (DP) yang dapat dicicil hingga 12 kali, serta suku bunga yang kompetitif. Proses pengajuan yang cepat dan mudah memungkinkan Anda untuk segera memiliki hunian idaman dengan tenor yang dapat disesuaikan dengan kemampuan finansial. Dapatkan akses ke berbagai fasilitas eksklusif serta layanan konsultasi untuk membantu Anda dalam setiap tahap pengajuan KPR.</p>
      <div className="grid grid-cols-1 md-grid-cols-3 gap-4">
        <Link href="/simulasi-pembayaran-kpr" className="p-4 bg-blue-500 text-white rounded-lg text-center">
          Simulasi Pembayaran
        </Link>
        <Link href="/simulasi-kemampuan-kpr" className="p-4 bg-green-500 text-white rounded-lg text-center">
          Simulasi Kemampuan
        </Link>
        <Link href="/simulasi-kelayakan-kpr" className="p-4 bg-yellow-500 text-white rounded-lg text-center">
          Simulasi Kelayakan
        </Link>
      </div>
    </div>
  );
}
