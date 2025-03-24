import Image from "next/image";

export default function Sauna() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Sauna: Kehangatan yang Menenangkan
        </h1>
        <p className="text-lg text-center mb-6">
          Masuki dunia relaksasi yang luar biasa di Sauna kami yang terletak di Colosseum Day Club by Andara, 
          sebuah pengalaman yang memadukan kenyamanan, kehangatan, dan ketenangan dalam setiap hembusan udara. 
          Sauna kami dirancang untuk memberikan momen perawatan tubuh yang menyegarkan dan menenangkan, membawa 
          Anda menuju pengalaman relaksasi yang sempurna.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Ruang Luas dengan Suasana Alam yang Menenangkan</h2>
            <p>
              Dengan kapasitas hingga 20 orang, sauna kami menawarkan ruang yang luas dan nyaman, memadukan desain 
              kayu premium yang menampilkan keindahan alami. Setiap detil ruangan dirancang untuk memberikan pengalaman 
              spa yang penuh kedamaian. Kayu berkualitas tinggi menciptakan atmosfer yang hangat dan menenangkan, 
              sementara pencahayaan lembut menambah kesan relaksasi, meredakan ketegangan dan stres setelah hari yang panjang.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Teknologi Pemanas Modern untuk Efek Penyegaran Maksimal</h2>
            <p>
              Sauna kami dilengkapi dengan teknologi pemanas modern yang mampu membuka pori-pori tubuh, meningkatkan sirkulasi 
              darah, dan memfasilitasi proses detoksifikasi alami. Begitu Anda masuk, rasakan aliran kehangatan yang meresap ke dalam kulit, 
              menciptakan sensasi relaksasi instan. Tubuh Anda akan merasakan manfaat suhu yang ideal, membuat Anda segar dan terhidrasi 
              setelah sesi sauna.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Tempat yang Sempurna untuk Merenung atau Bersantai</h2>
            <p>
              Sauna ini bukan hanya tempat untuk merilekskan tubuh, tetapi juga untuk merenung, berbincang dengan teman, atau sekadar menikmati 
              ketenangan pribadi. Anda bisa merasakan efek menenangkan dari kehangatan yang mengelilingi, sembari berpikir jernih atau berbincang 
              santai. Sauna menjadi tempat ideal untuk berbagi momen intim atau menikmati kesendirian yang damai.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Efek Relaksasi yang Membekas</h2>
            <p>
              Kehangatan yang ditawarkan sauna kami membawa manfaat luar biasa bagi tubuh, mulai dari memperlancar peredaran darah, melepaskan 
              ketegangan otot, hingga memberikan rasa rileks yang mendalam. Setiap sesi sauna di Colosseum Day Club by Andara membawa Anda lebih dekat 
              dengan keseimbangan, memberikan tubuh dan pikiran waktu untuk pulih dan mendapatkan energi kembali.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Ruang Relaksasi yang Menghantarkan Kedamaian</h2>
            <p>
              Saat Anda meninggalkan sauna, efek relaksasi yang mendalam akan terus terasa. Tubuh akan lebih ringan, segar, dan bebas dari stres. 
              Di ruang ini, Anda tidak hanya merasakan kehangatan fisik tetapi juga kedamaian batin yang membantu Anda merasa lebih terhubung dengan 
              diri sendiri dan dunia sekitar.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Pengalaman Relaksasi Holistik</h2>
            <p>
              Sauna di Colosseum Day Club by Andara lebih dari sekadar fasilitas—ini adalah pengalaman relaksasi holistik yang menggabungkan teknologi 
              modern dengan kenyamanan alami. Kami mengundang Anda untuk merasakan sendiri manfaat luar biasa dari sauna kami, di mana ketenangan dan 
              kesehatan tubuh berpadu dengan sempurna, menciptakan pengalaman relaksasi yang akan memuaskan setiap sisi diri Anda.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
