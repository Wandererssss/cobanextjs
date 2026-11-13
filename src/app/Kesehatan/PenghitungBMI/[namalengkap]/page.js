"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { hitungBMI } from "@/lib/bmi";

export default function Page() {
  const params = useParams();
  const nama = decodeURIComponent(params.namalengkap).replaceAll("-", " ");

  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
  }

  // Latihan 4: kosongkan berat, tinggi, dan hasil sekaligus
  function handleReset() {
    setBerat("");
    setTinggi("");
    setHasil(null);
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Halo, {nama}</h1>
      <p>Silakan masukkan berat badan dan tinggi kamu!</p>

      {/* Latihan 5: kembali ke halaman utama */}
      <p>
        <Link href="/">Bukan kamu? Ganti nama</Link>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <div>
          <label htmlFor="berat">Berat (kg)</label>
          <input
            id="berat"
            type="number"
            step="any"
            min="1"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </div>

        <div>
          <label htmlFor="tinggi">Tinggi (cm)</label>
          <input
            id="tinggi"
            type="number"
            step="any"
            min="1"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </div>

        <button type="submit" style={{ padding: 8 }}>
          Hitung
        </button>

        {/* type="button" supaya ngk ikut ngesubmit form */}
        <button type="button" onClick={handleReset} style={{ padding: 8 }}>
          Reset
        </button>
      </form>

      {/* Latihan 3: warna sesuai kategori */}
      {hasil && (
        <p style={{ marginTop: 16, color: hasil.warna }}>
          BMI kamu: <strong>{hasil.bmi}</strong> ({hasil.kategori})
        </p>
      )}
    </main>
  );
}
