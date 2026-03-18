function fibonacci(n) {
  // Kondisi berhenti untuk elemen 0 dan 1
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  
  // Rekursif: mengambil deret sebelumnya
  const prevFib = fibonacci(n - 1);
  
  // Menambahkan angka baru di akhir deret
  prevFib.push(prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]);
  
  return prevFib;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
