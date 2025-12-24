/*
Nama file      : script.js
Tanggal ngoding: 22 Desember 2025
Kelas          : 05TPLP015
Kelompok       : 5
Anggota        : Hisyam Santoso, Kaka Ashadie, Moh Ariel
Deskripsi      : Interaksi show/hide kode dan validasi form
*/

function toggleCode(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function validateForm() {
  if (
    document.getElementById("nama").value === "" ||
    document.getElementById("email").value === "" ||
    document.getElementById("pesan").value === ""
  ) {
    alert("Semua field wajib diisi!");
    return false;
  }
  alert("Pesan berhasil dikirim!");
  return true;
}
