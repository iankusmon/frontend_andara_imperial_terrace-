import { Users, Building, Calendar } from "lucide-react";

const AffiliateReviewSection = () => {
  return (
    <div className="bg-gray-200 py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div className="flex items-center gap-3">
          <Users size={40} className="text-blue-500" />
          <div>
            <p className="text-2xl font-bold">1000+</p>
            <p className="text-gray-600">Agent Affiliate</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Building size={40} className="text-green-500" />
          <div>
            <p className="text-2xl font-bold">30+</p>
            <p className="text-gray-600">Units Available</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={40} className="text-red-500" />
          <div>
            <p className="text-2xl font-bold">7+ Years</p>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateReviewSection;
