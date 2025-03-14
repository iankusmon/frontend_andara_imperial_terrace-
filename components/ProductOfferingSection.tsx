import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Font Awesome

const ProductOfferingSection: React.FC = () => {
  return (
    <div className="bg-gray-200 py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Product yang Ditawarkan</h2>

        {/* Download Product Knowledge */}
        <div className="flex justify-center mb-4">
          <a
            href="https://drive.google.com/drive/folders/1l8Im25cT0mvomsOP2uNEDJMHIieEMAfK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
          >
            Download Product Knowledge
          </a>
        </div>

        {/* Semua Sosial Media */}
        <div className="flex justify-center gap-6 mb-6">
          <Link href="https://www.facebook.com/profile.php?id=61572417403488" target="_blank">
            <FaFacebook size={30} className="text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/andaraagenaffiliate/" target="_blank">
            <FaInstagram size={30} className="text-pink-600" />
          </Link>
          <Link href="https://www.tiktok.com/@andaraagenaffiliate" target="_blank">
            <FaTiktok size={30} className="text-black" />
          </Link>
          <Link href="https://www.youtube.com/@AndaraAgenAffiliate" target="_blank">
            <FaYoutube size={30} className="text-red-600" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
        {/* Left Side - Banner */}
        <div>
          <Image
            src="/banner_affiliate_mobile_2_1.png"
            alt="Affiliate Banner Desktop"
            width={600}
            height={300}
            className="hidden md:block w-full rounded-lg"
          />
          <Image
            src="/banner_affiliate_mobile_2_1.png"
            alt="Affiliate Banner Mobile"
            width={400}
            height={200}
            className="md:hidden w-full rounded-lg"
          />
        </div>

        {/* Right Side - Call to Action & Cara Kerja */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Segera Gabung Agent Affiliate</h3>
          <Link href="/sign-up/agent-affiliate">
            <span className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition cursor-pointer">
              Daftar Andara Agent Affiliate Program
            </span>
          </Link>

          {/* Cara Kerja Agent */}
          <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-bold text-left sm:text-center mb-4">Cara Kerja Agent</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "1.",
                  title: "Isi Form Pendaftaran",
                  description: "Melengkapi form dan tekan submit.",
                },
                {
                  step: "2.",
                  title: "Klik Share",
                  description: "Klik button share pada website di gambar/video.",
                },
                {
                  step: "3.",
                  title: "Bagikan Link",
                  description: "Bagikan ke sosial media Anda.",
                },
                {
                  step: "4.",
                  title: "Dapatkan Komisi & Reward Tak Terbatas",
                  description: "Pencairan saat customer DP 30%.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <span className="text-blue-600 font-bold text-lg">{item.step}</span>
                  <div>
                    <h5 className="font-bold">{item.title}</h5>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Lihat Cara Lebih Detail */}
          <div className="text-center md:text-left mt-6">
            <h4 className="text-lg font-bold mb-3">Lihat Cara Lebih Detail</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <Link href="https://www.facebook.com/profile.php?id=61572417403488" target="_blank">
                <FaFacebook size={30} className="text-blue-600" />
              </Link>
              <Link href="https://www.instagram.com/andaraagenaffiliate/" target="_blank">
                <FaInstagram size={30} className="text-pink-600" />
              </Link>
              <Link href="https://www.tiktok.com/@andaraagenaffiliate" target="_blank">
                <FaTiktok size={30} className="text-black" />
              </Link>
              <Link href="https://www.youtube.com/@AndaraAgenAffiliate" target="_blank">
                <FaYoutube size={30} className="text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOfferingSection;
