import Image from "next/image";

export default function AndaraFoodMart() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Andara Food Mart: Nikmati Kuliner Lezat dan Mini Market Lengkap
        </h1>
        <p className="text-lg text-center mb-6">
          Setelah menikmati serangkaian aktivitas seru di Andara, waktunya untuk menyenangkan lidah Anda di Andara Food Mart, destinasi kuliner yang menawarkan pengalaman makan tak terlupakan. Di sini, berbagai cita rasa dari seluruh dunia bertemu dalam satu tempat yang nyaman dan menyenangkan. 
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Street Food Court</h2>
            <p>
              Bagi Anda yang ingin merasakan sensasi kuliner jalanan khas Solo dan Eropa, Street Food Court adalah tempat yang wajib dikunjungi. Nikmati hidangan khas seperti Serabi Solo, Sate Buntel, Croque Monsieur, atau Fries & Burgers yang menggugah selera.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Dessert Corner</h2>
            <p>
              Manjakan diri Anda dengan pilihan manis di Dessert Corner. Waffle Belgia dengan topping lezat, Gelato Italia berbagai rasa, serta Panna Cotta dan Tart buah segar siap memanjakan selera Anda.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Signature Drinks</h2>
            <p>
              Nikmati minuman khas seperti Andara Venetian Coffee yang kaya aroma dan Imperial Lemonade yang segar dengan sentuhan madu alami dan rempah pilihan.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Kelas Memasak</h2>
            <p>
              Ikuti sesi Kelas Memasak bersama chef berpengalaman untuk belajar mengolah berbagai hidangan khas Indonesia dan internasional dengan teknik profesional.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Mini Market Andara Play Story</h2>
            <p>
              Tak hanya kuliner, mini market ini menyediakan berbagai kebutuhan seperti camilan lokal & internasional, produk eksklusif seperti kopi premium dan rempah-rempah khas Solo, serta layanan praktis seperti ATM dan Wi-Fi gratis.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Pengalaman Kuliner yang Lengkap</h2>
            <p>
              Di Andara Food Mart, Anda tidak hanya menikmati sajian lezat, tetapi juga mendapatkan kenyamanan belanja dan layanan yang memudahkan setiap kebutuhan Anda.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
