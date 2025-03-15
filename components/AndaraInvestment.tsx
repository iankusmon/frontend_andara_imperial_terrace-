import React from "react";
import Button from "@/components/ui/Button";
import { FaHotel, FaBriefcase, FaCocktail, FaTree } from "react-icons/fa";

const AndaraInvestment: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Beyond Luxury Living</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Lebih dari sekadar villa, Andara Imperial Terrace adalah kawasan eksklusif
          yang menawarkan Akomodasi, MICE, Day Club, dan Wisata Modern dalam harmoni sempurna.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 container mx-auto px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <feature.icon className="text-4xl text-gold-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

const features = [
  {
    icon: FaHotel,
    title: "Akomodasi Kelas Dunia",
    description: "Hotel & resort eksklusif yang meningkatkan daya tarik wisata dan nilai properti."
  },
  {
    icon: FaBriefcase,
    title: "MICE & Bisnis",
    description: "Pusat bisnis dan konferensi modern yang mendukung event nasional hingga internasional."
  },
  {
    icon: FaCocktail,
    title: "Day Club & Lifestyle Hub",
    description: "Destinasi hiburan premium untuk wisatawan kelas atas dengan suasana eksklusif."
  },
  {
    icon: FaTree,
    title: "Wisata Modern & Nature Living",
    description: "Harmoni antara kemewahan dan keseimbangan alam dalam satu lokasi strategis."
  }
];

export default AndaraInvestment;
