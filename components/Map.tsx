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

      // Inisialisasi peta baru dengan koordinat Andara Imperial Terrace
      const map = L.map('map').setView([-7.50654, 110.6572226], 17); // Koordinat Andara Imperial Terrace

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([-7.50654, 110.6572226]).addTo(map)
        .bindPopup('Andara Imperial Terrace')
        .openPopup();

      // Simpan instansi peta ke dalam window global untuk referensi di masa depan
      window.mapInstance = map;
    }

  }, []); // Efek hanya dijalankan sekali setelah komponen pertama kali dirender

  return <div id="map" style={{ height: '600px' }}></div>;
};

export default Map;
