import { useState } from "react";
import axios from "axios";

interface SimulasiKPRProps {
  endpoint: string;
  title: string;
}

export default function SimulasiKPR({ endpoint, title }: SimulasiKPRProps) {
  const [formData, setFormData] = useState({
    hargaProperti: "",
    uangMuka: "",
    tenor: "5",
    sukuBunga: "1",
    fixedRatePeriod: "",
    floatingRate: "",
    floatingRatePeriod: "",
    salary: ""
  });
  const [result, setResult] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);

  const formatRupiah = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      kpr_calculator: {
        property_price: Number(formData.hargaProperti.replace(/,/g, "")),
        down_payment_percentage: Number(formData.uangMuka),
        tenor_period: Number(formData.tenor),
        fixed_rate: Number(formData.sukuBunga),
        fixed_rate_period: Number(formData.fixedRatePeriod),
        floating_rate: Number(formData.floatingRate),
        floating_rate_period: Number(formData.floatingRatePeriod),
      },
    };

    try {
      const response = await axios.post(endpoint, payload);
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Terjadi kesalahan, silakan coba lagi." });
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 pt-40">{title}</h1>
      <picture>
        <source srcSet="slide4.png" media="(min-width: 768px)" />
        <img src="slide_mobile4.png" alt="KPR Andara Imperial Terrace" className="w-full mb-4" />
      </picture>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label>
          Harga Properti
          <input
            type="text"
            name="hargaProperti"
            value={formatRupiah(formData.hargaProperti)}
            onChange={(e) =>
              setFormData({ ...formData, hargaProperti: e.target.value.replace(/\D/g, "") })
            }
            required
            className="p-2 border rounded w-full"
          />
        </label>
        <label>
          Persentase Uang Muka
          <input
            type="number"
            name="uangMuka"
            value={formData.uangMuka}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
        </label>
        <label>
          Tenor (tahun)
          <select name="tenor" value={formData.tenor} onChange={handleChange} required className="p-2 border rounded w-full">
            {[5, 10, 15, 20].map((year) => (
              <option key={year} value={year}>{year} tahun</option>
            ))}
          </select>
        </label>
        <label>
          Suku Bunga (%)
          <select name="sukuBunga" value={formData.sukuBunga} onChange={handleChange} required className="p-2 border rounded w-full">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((rate) => (
              <option key={rate} value={rate}>{rate}%</option>
            ))}
          </select>
        </label>
        <label>
          Masa Fixed Rate (tahun)
          <input
            type="number"
            name="fixedRatePeriod"
            value={formData.fixedRatePeriod}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
        </label>
        <label>
          Suku Bunga Floating (%)
          <input
            type="number"
            name="floatingRate"
            value={formData.floatingRate}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
        </label>
        <label>
          Masa Floating Rate (tahun)
          <input
            type="number"
            name="floatingRatePeriod"
            value={formData.floatingRatePeriod}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
        </label>
        <label>
          Gaji Bulanan
          <input
            type="text"
            name="salary"
            value={formatRupiah(formData.salary)}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value.replace(/\D/g, "") })
            }
            required
            className="p-2 border rounded w-full"
          />
        </label>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Hitung
        </button>
      </form>
      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {result && !result.error && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Hasil Simulasi:</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <tbody>
              {Object.entries(result).map(([key, value]) => (
                <tr key={key} className="border border-gray-300">
                  <td className="p-2 font-semibold">{key.replace(/_/g, " ")}</td>
                  <td className="p-2 text-right">{Number(value).toLocaleString()}</td>
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
