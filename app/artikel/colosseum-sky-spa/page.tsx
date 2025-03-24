import Image from "next/image";

export default function ColosseumSkySpa() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Colosseum Sky Spa – Keajaiban Outdoor Jacuzzi di Colosseum Day Club by Andara
        </h1>
        <p className="text-lg text-center mb-6">
          Nikmati kemewahan relaksasi di Colosseum Sky Spa, fasilitas Outdoor Jacuzzi yang dirancang untuk menghadirkan kenyamanan luar biasa di tengah panorama indah Colosseum Day Club by Andara. Dengan pemandangan menakjubkan di sekitarnya, Colosseum Sky Spa adalah tempat sempurna untuk melepas penat dan memanjakan diri Anda.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Fasilitas Unggulan yang Ditawarkan</h2>
            <ul className="list-disc pl-6">
              <li><strong>Jacuzzi Air Hangat:</strong> Dengan diameter 3 meter, jacuzzi ini dirancang untuk memberikan sensasi relaksasi maksimal, sempurna untuk meredakan ketegangan otot dan menghangatkan tubuh Anda di suasana yang sejuk.</li>
              <li><strong>Jacuzzi Air Dingin:</strong> Dengan diameter 5 meter, jacuzzi ini menawarkan kesegaran luar biasa yang cocok untuk menyegarkan tubuh setelah menikmati aktivitas di bawah sinar matahari Bali.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Pengalaman Relaksasi Premium</h2>
            <p>
              Colosseum Sky Spa menghadirkan pengalaman relaksasi premium dengan suasana yang menenangkan. Kehangatan air atau kesegaran dinginnya berpadu sempurna dengan pemandangan alam sekitar, memberikan sensasi menenangkan baik untuk tubuh maupun pikiran.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Kesimpulan: Momen Kenyamanan yang Tak Terlupakan</h2>
            <p>
              Hadirkan momen penuh kenyamanan dan kesegaran yang sulit dilupakan, hanya di Colosseum Sky Spa, bagian tak terpisahkan dari Colosseum Day Club by Andara!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
