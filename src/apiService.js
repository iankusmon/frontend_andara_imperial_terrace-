// src/apiService.js
import API_BASE_URL from './apiConfig';

export const gethouse_unit = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/house_unit`); // Menggunakan URL API yang telah dikonfigurasi
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();  // Mengembalikan data house_unit dalam format JSON
  } catch (error) {
    console.error('Error fetching house_unit:', error);
  }
};

export const createVilla = async (villaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(villaData), // Mengirim data skor dalam format JSON
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();  // Mengembalikan data setelah skor berhasil dibuat
  } catch (error) {
    console.error('Error creating score:', error);
  }
};