import Link from 'next/link';

const salesData = [
  {
    title: 'Davinci Residence',
    image: '/davinci_1_1.png',
    link: '/villa/davinci-residence/type',
  },
  {
    title: 'Amsterdam Royale',
    image: '/amsterdam_1_1.png',
    link: '/villa/amsterdam-royal/type',
  },
  {
    title: 'Athena Height',
    image: '/athena_1_1.png',
    link: '/villa/athena-height/type',
  },
];

export default function SalesPage() {
  return (
    <div className="flex flex-col items-center w-full pt-20">
      <div className="text-center py-10 px-5 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Hidup dalam Kemewahan dan Keharmonisan dengan Alam</h1>
        <p className="text-lg text-gray-700">
          The Royale Elegance adalah tempat di mana kemewahan dan keharmonisan dengan alam bersatu, menciptakan
          lingkungan yang elegan dan penuh kedamaian. Kawasan ini menonjolkan arsitektur yang penuh karakter,
          mulai dari pilar kokoh ala Yunani Klasik di Athena Height, balkon luas dan taman hijau di Da Vinci Residence,
          hingga pesona fasad bata merah yang hangat di Amsterdam Royale. Setiap villa memiliki desain unik yang
          mencerminkan gaya hidup mewah yang seimbang dengan keindahan alam sekitar. Di sini, penghuni dapat menikmati
          kehidupan berkelas yang mengutamakan kenyamanan dan keselarasan dengan alam. The Royale Elegance bukan hanya
          sekadar hunian, tetapi juga sebuah pernyataan gaya hidup yang menggambarkan kemewahan, kesederhanaan, dan
          keharmonisan—ideal bagi mereka yang menginginkan kedamaian dan prestise dalam setiap langkah hidupnya.
        </p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5 pb-20">
        {salesData.map((villa, index) => (
          <Link key={index} href={villa.link}>
            <div className="relative group cursor-pointer">
              <img
                src={villa.image}
                alt={villa.title}
                className="w-full h-[600px] object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h2 className="text-white text-3xl font-bold">{villa.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
