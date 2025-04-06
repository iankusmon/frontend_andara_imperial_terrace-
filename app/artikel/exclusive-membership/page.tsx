import Image from 'next/image';

export default function ExclusiveMembership() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Exclusive Private Membership Club di Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Bergabunglah dalam Exclusive Private Membership Club by Andara, keanggotaan eksklusif yang dirancang bagi pemilik Andara Imperial Terrace untuk menikmati fasilitas premium dan gaya hidup mewah.
      </p>
      {/* <Image 
        src="/exclusive_membership.png" 
        alt="Exclusive Membership Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}

      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Keistimewaan Keanggotaan</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Exclusive Lounge & Day Club:</strong> Akses ke Imperial Dine & Lounge serta Colosseum Day Club dengan pelayanan eksklusif.</li>
            <li><strong>Private Dining & Chef’s Table:</strong> Pengalaman kuliner mewah dengan menu eksklusif dari chef kelas dunia.</li>
            <li><strong>Priority Access & VIP Treatment:</strong> Prioritas dalam pemesanan unit properti, event eksklusif, dan layanan premium lainnya.</li>
            <li><strong>Personalized Concierge Service:</strong> Layanan concierge 24/7 untuk reservasi restoran, transportasi premium, dan pengaturan acara pribadi.</li>
            <li><strong>Exclusive Events & Networking:</strong> Undangan khusus untuk gala dinner, private gathering, dan event bisnis eksklusif.</li>
            <li><strong>Luxury Wellness & Spa:</strong> Fasilitas spa dan wellness eksklusif dengan perawatan premium.</li>
            <li><strong>Special Offers & Discounts:</strong> Diskon khusus di hotel, restoran, pusat kebugaran, dan layanan properti.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Level Keanggotaan Andara Privilege Club</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Platinum Membership:</strong> Akses penuh ke semua fasilitas eksklusif dengan layanan concierge 24/7. Biaya: Rp 250.000.000/tahun.</li>
            <li><strong>Gold Membership:</strong> Prioritas dalam reservasi properti, event eksklusif, dan akses terbatas ke lounge eksklusif. Biaya: Rp 175.000.000/tahun.</li>
            <li><strong>Silver Membership:</strong> Akses terbatas ke fasilitas premium dan diskon khusus di layanan Andara Imperial Terrace. Biaya: Rp 100.000.000/tahun.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Biaya Tambahan & Ketentuan</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Pendaftaran Awal:</strong> Rp 10.000.000 (satu kali pembayaran).</li>
            <li><strong>Keanggotaan Berlaku:</strong> Selama 1 tahun dan dapat diperpanjang otomatis.</li>
            <li><strong>Eksklusif & Terbatas:</strong> Hanya untuk individu yang lolos seleksi.</li>
            <li><strong>Paket Corporate & Family:</strong> Penawaran spesial tersedia untuk keanggotaan grup atau perusahaan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Promo SUPER EKSKLUSIF</h2>
          <p className="mt-2">
            Andara Imperial Terrace menghadirkan paket investasi premium yang menggabungkan hunian mewah dengan peluang penghasilan pasif melalui program IMPERIAL Passive Income.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Garansi Bangunan & Furnished 8 Tahun:</strong> Perawatan berkala dengan furnitur premium.</li>
            <li><strong>Gratis Biaya Maintenance (IPL) 8 Tahun:</strong> Mengurangi beban operasional penghuni.</li>
            <li><strong>Exclusive Private Membership Club:</strong> Akses penuh ke fasilitas mewah.</li>
            <li><strong>Buy Back Guarantee 150%:</strong> Kepastian investasi dengan jaminan buyback dari harga pembelian.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
