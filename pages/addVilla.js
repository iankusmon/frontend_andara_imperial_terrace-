// pages/AddVilla.js
import { useState } from 'react';

export default function AddVilla() {
  const [villaName, setVillaName] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/types', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_name: villaName, type: parseInt(type, 10) }),
      });
      if (!response.ok) throw new Error('Failed to submit type');
      alert('type submitted successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Villa Name:</label>
        <input
          type="text"
          value={villaName}
          onChange={(e) => setVillaName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="number"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}