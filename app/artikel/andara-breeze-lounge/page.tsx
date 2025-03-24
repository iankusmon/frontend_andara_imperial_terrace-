import Image from "next/image";

export default function ColosseumBreezeLounge() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Colosseum Breeze Lounge – Area Bersantai yang Memanjakan di Colosseum Day Club by Andara
        </h1>
        <p className="text-lg text-center mb-6">
          Temukan kenyamanan sempurna di Colosseum Breeze Lounge, area bersantai eksklusif yang dirancang untuk memberikan pengalaman relaksasi terbaik di tengah suasana tropis Colosseum Day Club by Andara. Dikelilingi oleh keindahan alam dan suasana yang menenangkan, lounge ini menjadi tempat ideal untuk beristirahat, bersantai, atau menikmati waktu berkualitas bersama orang terkasih.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Beragam Pilihan Tempat Duduk</h2>
            <ul className="list-disc pl-6">
              <li>80 Bean Bags untuk 1 orang: Santai maksimal dengan kenyamanan yang fleksibel.</li>
              <li>60 Sunbeds untuk 1 orang: Sempurna untuk berjemur di bawah hangatnya sinar matahari Bali.</li>
              <li>40 Private Cabana untuk 2 orang: Area privat yang nyaman dan romantis.</li>
              <li>30 Cabana untuk 4 orang: Cocok untuk keluarga kecil atau grup teman.</li>
              <li>20 Cabana untuk 6 orang: Ideal untuk berkumpul dalam suasana santai.</li>
              <li>10 Cabana untuk 8 orang: Ruang luas untuk kebersamaan yang lebih besar.</li>
              <li>5 Cabana untuk 10 orang: Pilihan sempurna untuk grup besar dengan kenyamanan ekstra.</li>
              <li>2 Cabana untuk 12 orang: Tempat eksklusif untuk acara spesial atau pertemuan besar.</li>
              <li>20 Hammocks untuk 2 orang: Nikmati sensasi berayun santai sambil menikmati angin sepoi-sepoi.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Pengalaman Relaksasi yang Tak Tertandingi</h2>
            <p>
              Dengan beragam pilihan tempat bersantai, Colosseum Breeze Lounge mampu menghadirkan pengalaman yang sesuai dengan kebutuhan Anda, baik untuk momen me time, waktu bersama pasangan, maupun kebersamaan dengan keluarga dan teman-teman.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Nikmati Keindahan & Kenyamanan</h2>
            <p>
              Rasakan kenyamanan, keindahan, dan kehangatan suasana hanya di Colosseum Breeze Lounge, bagian tak terpisahkan dari keajaiban Colosseum Day Club by Andara!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}