'use client'
// components/Map.tsx
import { useEffect } from 'react';
import L from 'leaflet';

declare global {
  interface Window {
    mapInstance?: L.Map;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cek apakah peta sudah ada dan hapus jika ada
      const mapContainer = document.getElementById('map');
      
      // Jika peta sudah ada, kita ambil instansi peta dan menghapusnya
      if (window.mapInstance) {
        window.mapInstance.remove(); // Menghapus peta yang sudah ada
      }

      // Inisialisasi peta baru
      const map = L.map('map').setView([-6.595, 106.789], 13); // Koordinat Cimory Bogor

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([-6.595, 106.789]).addTo(map)
        .bindPopup('Cimory Bogor')
        .openPopup();

      // Simpan instansi peta ke dalam window global untuk referensi di masa depan
      window.mapInstance = map;
    }
    
  }, []); // Efek hanya dijalankan sekali setelah komponen pertama kali dirender

  return <div id="map" style={{ height: '600px' }}></div>;
};

export default Map;
