import { useState } from "react";
import axios from "axios";

export default function SimulasiKPR({ endpoint, title }) {
  const [formData, setFormData] = useState({
    hargaProperti: "",
    uangMuka: "",
    tenor: "",
    sukuBunga: "",
    fixedRatePeriod: "",
    floatingRate: "",
    floatingRatePeriod: ""
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      kpr_calculator: {
        property_price: formData.hargaProperti,
        down_payment_percentage: formData.uangMuka,
        tenor_period: formData.tenor,
        fixed_rate: formData.sukuBunga,
        fixed_rate_period: formData.fixedRatePeriod,
        floating_rate: formData.floatingRate,
        floating_rate_period: formData.floatingRatePeriod
      }
    };

    try {
      const response = await axios.post(`http://localhost:3000/api/customers/kpr_calculators`, payload);
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Terjadi kesalahan, silakan coba lagi." });
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <picture>
        <source srcSet="slide4.png" media="(min-width: 768px)" />
        <img src="slide_mobile4.png" alt="KPR Andara Imperial Terrace" className="w-full mb-4" />
      </picture>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="number"
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1").trim()}
            value={formData[key]}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        ))}
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Hitung</button>
      </form>
      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {result && !result.error && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Hasil Simulasi:</h2>
          <table className="w-full mt-2 border-collapse border border-gray-300">
            <tbody>
              {Object.entries(result).map(([key, value]) => (
                <tr key={key} className="border border-gray-300">
                  <td className="p-2 font-medium capitalize">{key.replace(/_/g, " ")}</td>
                  <td className="p-2 text-right">{value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {result?.error && <p className="mt-4 text-red-500">{result.error}</p>}
    </div>
  );
}
