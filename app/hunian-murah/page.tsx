"use client";
import React from 'react';
import Image from 'next/image';
import styles from './HunianMurah.module.css'; // Pastikan Anda menambahkan file CSS untuk styling

const HunianMurah: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/slide2.png" // Ganti dengan gambar hero untuk desktop
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className={styles.heroDesktop}
        />
        <Image
          src="/slide_mobile2.png" // Ganti dengan gambar hero untuk mobile
          alt="Hero Image Mobile"
          layout="fill"
          objectFit="cover"
          priority
          className={styles.heroMobile}
        />
      </div>

      {/* Content Section */}
      <section className={styles.content}>
        <h1>Selamat Tahun Baru, Sambut Kehangatan Hunian Anda</h1>
        <p>
          Tahun baru adalah waktu yang penuh harapan dan kesempatan untuk memulai babak baru dalam hidup. Di Andara Imperial Terrace, kami menyambut tahun baru dengan semangat yang tinggi, menawarkan hunian yang nyaman dan elegan. Setiap sudut rumah dirancang dengan cermat untuk memenuhi kebutuhan dan keinginan Anda, menciptakan ruang yang bukan hanya untuk tinggal, tetapi juga untuk menikmati setiap momen kehidupan.
        </p>
        <p>
          Dengan lingkungan yang asri, fasilitas modern, dan desain yang menawan, Andara Imperial Terrace adalah pilihan tepat untuk Anda yang menginginkan tempat tinggal yang tidak hanya berkelas, tetapi juga memberikan kenyamanan dan kedamaian. Segera temukan hunian impian Anda dan mulailah perjalanan baru Anda di tahun yang penuh peluang ini.
        </p>
        <p>
          Kami percaya bahwa rumah bukan hanya sebuah bangunan, tetapi tempat di mana kenangan indah tercipta. Di Andara Imperial Terrace, Anda tidak hanya akan menemukan hunian yang nyaman, tetapi juga sebuah komunitas yang mendukung gaya hidup Anda. Setiap fasilitas dan desain kami dirancang untuk memberikan kenyamanan dan kemudahan bagi penghuni, menjadikan Andara Imperial Terrace pilihan yang tepat untuk keluarga Anda.
        </p>
        <p>
          Nikmati momen istimewa bersama keluarga dan teman-teman di ruang yang penuh kenyamanan dan kehangatan. Dengan akses mudah ke berbagai fasilitas umum dan lokasi strategis, Andara Imperial Terrace menawarkan lebih dari sekadar tempat tinggal—ini adalah tempat di mana kehidupan Anda akan berkembang.
        </p>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <h1>Selamat Tahun Baru, Sambut Kehangatan Hunian Anda</h1>
        <p>
          Tahun baru adalah waktu yang penuh harapan dan kesempatan untuk memulai babak baru dalam hidup. Di Andara Imperial Terrace, kami menyambut tahun baru dengan semangat yang tinggi, menawarkan hunian yang nyaman dan elegan. Setiap sudut rumah dirancang dengan cermat untuk memenuhi kebutuhan dan keinginan Anda, menciptakan ruang yang bukan hanya untuk tinggal, tetapi juga untuk menikmati setiap momen kehidupan.
        </p>
        <p>
          Dengan lingkungan yang asri, fasilitas modern, dan desain yang menawan, Andara Imperial Terrace adalah pilihan tepat untuk Anda yang menginginkan tempat tinggal yang tidak hanya berkelas, tetapi juga memberikan kenyamanan dan kedamaian. Segera temukan hunian impian Anda dan mulailah perjalanan baru Anda di tahun yang penuh peluang ini.
        </p>
        <p>
          Kami percaya bahwa rumah bukan hanya sebuah bangunan, tetapi tempat di mana kenangan indah tercipta. Di Andara Imperial Terrace, Anda tidak hanya akan menemukan hunian yang nyaman, tetapi juga sebuah komunitas yang mendukung gaya hidup Anda. Setiap fasilitas dan desain kami dirancang untuk memberikan kenyamanan dan kemudahan bagi penghuni, menjadikan Andara Imperial Terrace pilihan yang tepat untuk keluarga Anda.
        </p>
        <p>
          Nikmati momen istimewa bersama keluarga dan teman-teman di ruang yang penuh kenyamanan dan kehangatan. Dengan akses mudah ke berbagai fasilitas umum dan lokasi strategis, Andara Imperial Terrace menawarkan lebih dari sekadar tempat tinggal—ini adalah tempat di mana kehidupan Anda akan berkembang.
        </p>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <h1>Selamat Tahun Baru, Sambut Kehangatan Hunian Anda</h1>
        <p>
          Tahun baru adalah waktu yang penuh harapan dan kesempatan untuk memulai babak baru dalam hidup. Di Andara Imperial Terrace, kami menyambut tahun baru dengan semangat yang tinggi, menawarkan hunian yang nyaman dan elegan. Setiap sudut rumah dirancang dengan cermat untuk memenuhi kebutuhan dan keinginan Anda, menciptakan ruang yang bukan hanya untuk tinggal, tetapi juga untuk menikmati setiap momen kehidupan.
        </p>
        <p>
          Dengan lingkungan yang asri, fasilitas modern, dan desain yang menawan, Andara Imperial Terrace adalah pilihan tepat untuk Anda yang menginginkan tempat tinggal yang tidak hanya berkelas, tetapi juga memberikan kenyamanan dan kedamaian. Segera temukan hunian impian Anda dan mulailah perjalanan baru Anda di tahun yang penuh peluang ini.
        </p>
        <p>
          Kami percaya bahwa rumah bukan hanya sebuah bangunan, tetapi tempat di mana kenangan indah tercipta. Di Andara Imperial Terrace, Anda tidak hanya akan menemukan hunian yang nyaman, tetapi juga sebuah komunitas yang mendukung gaya hidup Anda. Setiap fasilitas dan desain kami dirancang untuk memberikan kenyamanan dan kemudahan bagi penghuni, menjadikan Andara Imperial Terrace pilihan yang tepat untuk keluarga Anda.
        </p>
        <p>
          Nikmati momen istimewa bersama keluarga dan teman-teman di ruang yang penuh kenyamanan dan kehangatan. Dengan akses mudah ke berbagai fasilitas umum dan lokasi strategis, Andara Imperial Terrace menawarkan lebih dari sekadar tempat tinggal—ini adalah tempat di mana kehidupan Anda akan berkembang.
        </p>
      </section>
    </div>
  );
};

export default HunianMurah;
