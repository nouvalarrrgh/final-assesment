function factorial(n) {
  // Kondisi berhenti
  if (n === 0 || n === 1) {
    return 1;
  }
  // Rekursif
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
