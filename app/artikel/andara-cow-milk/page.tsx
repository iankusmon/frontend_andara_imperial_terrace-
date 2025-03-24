import Image from 'next/image';

export default function AndaraCowMilk() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
        Andara Cow Milk: Rasakan Keaslian Susu Segar di Andara Cow Milk!
      </h1>
      <p className="text-gray-700 text-lg text-center mb-6 max-w-4xl">
        Selamat datang di Andara Cow Milk, sebuah pengalaman wisata yang memadukan edukasi dan rekreasi dalam nuansa pedesaan yang asri.
      </p>
      
      <section className="max-w-4xl w-full space-y-6">
        <article>
          <h2 className="text-xl font-semibold text-gray-800">Edukasi Tentang Pengelolaan Sapi Perah</h2>
          <p className="text-gray-700">Perjalanan Anda dimulai dengan sesi edukasi mendalam yang dipandu oleh tim ahli di bidang peternakan sapi.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Pola makan seimbang: Pakan berkualitas tinggi untuk produksi susu optimal.</li>
            <li>Lingkungan nyaman: Kandang bersih dan luas untuk kesejahteraan sapi.</li>
            <li>Perawatan kesehatan: Pemeriksaan rutin oleh dokter hewan.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800">Pengalaman Memerah Susu Sapi Secara Langsung</h2>
          <p className="text-gray-700">Di bawah bimbingan petugas terlatih, Anda akan belajar teknik memerah susu yang higienis dan aman.</p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800">Memasak di Pawon Tradisional</h2>
          <p className="text-gray-700">Nikmati pengalaman memasak susu segar dengan berbagai varian seperti Susu Jahe, Susu Madu, dan Susu Cokelat.</p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800">Menikmati Susu Segar di Milk Bar</h2>
          <p className="text-gray-700">Cicipi minuman susu segar dalam berbagai varian seperti Milkshake Stroberi, Es Kopi Susu, dan Smoothies Buah.</p>
        </article>
      </section>

      <div className="mt-6 text-center max-w-4xl">
        <h3 className="text-2xl font-bold text-gray-900">"Ayo, jadikan kunjungan Anda ke Andara Versailles Park lebih bermakna dengan pengalaman tak terlupakan di Andara Cow Milk!"</h3>
      </div>
    </div>
  );
}