/*
Nama file      : script.js
Tanggal ngoding: 22 Desember 2025
Kelas          : 05TPLP015
Kelompok       : 5
Anggota        : Hisyam Santoso, Kaka Ashadie, Moch. Ariel Hidayatullah
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

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const body = document.body;
  const toggleBtn = document.querySelector(".nav-toggle");

  const isOpen = menu.classList.toggle("show");

  // Lock scroll when open
  body.style.overflow = isOpen ? "hidden" : "";

  // Change icon
  toggleBtn.textContent = isOpen ? "X" : "☰";
}

// Close menu when link clicked
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mobileMenu");
    const toggleBtn = document.getElementById("navToggle");

    menu.classList.remove("show");
    document.body.style.overflow = "";
    toggleBtn.textContent = "☰";
  });
});

// ===== Accordion Sub Bab =====
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    parent.classList.toggle("open");

    const icon = header.querySelector(".accordion-icon");
    icon.textContent = parent.classList.contains("open") ? "−" : "+";
  });
});

// ===== Show / Hide Code Blocks =====
document.querySelectorAll(".toggle-code-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const codeBox = btn.nextElementSibling;
    codeBox.style.display = codeBox.style.display === "block" ? "none" : "block";

    btn.textContent = codeBox.style.display === "block" ? "Sembunyikan Kode" : "Tampilkan Kode";
  });
});

document.querySelectorAll(".code-html").forEach((block) => {
  block.textContent = block.innerHTML;
});
