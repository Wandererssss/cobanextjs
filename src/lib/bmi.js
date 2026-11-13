export function hitungBMI(beratKg, tinggiCm) {
  const m = tinggiCm / 100;
  const bmi = beratKg / (m * m);

  let kategori;
  let warna;

  if (bmi < 18.5) {
    kategori = "Berat badan kurang";
    warna = "#2563eb"; // biru
  } else if (bmi < 25) {
    kategori = "Normal";
    warna = "#16a34a"; // hijau
  } else if (bmi < 30) {
    kategori = "Berat badan berlebih";
    warna = "#ca8a04"; // kuning
  } else {
    kategori = "Obesitas";
    warna = "#dc2626"; // merah
  }

  return { bmi: bmi.toFixed(1), kategori, warna };
}
