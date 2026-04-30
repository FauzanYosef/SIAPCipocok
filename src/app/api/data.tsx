import { text } from "stream/consumers";


// src/data/statistik.ts

/* =========================
   JENIS KELAMIN
========================= */
export const genderData = [
  { name: "Laki-laki", value: 8131 },
  { name: "Perempuan", value: 7811 },
];

/* =========================
   USIA SEKOLAH
========================= */
export const schoolAgeData = [
  { name: "SD", value: 1742 },
  { name: "SMP", value: 852 },
  { name: "SMA", value: 797 },
  { name: "Perguruan Tinggi", value: 1624 },
];

/* =========================
   PENDIDIKAN
========================= */
export const educationData = [
  { name: "Tidak/Belum Sekolah", value: 4596 },
  { name: "Belum Tamat SD", value: 962 },
  { name: "Tamat SD", value: 2385 },
  { name: "Tamat SLTP", value: 1566 },
  { name: "Tamat SLTA", value: 3929 },
  { name: "D I/II", value: 106 },
  { name: "DIII", value: 314 },
  { name: "DIV/S1", value: 1824 },
  { name: "S2", value: 244 },
  { name: "S3", value: 16 },
];

/* =========================
   DISABILITAS
========================= */
export const disabilityData = [
  { name: "Fisik", value: 8 },
  { name: "Netra", value: 1 },
  { name: "Rungu/Wicara", value: 2 },
  { name: "Mental/Jiwa", value: 13 },
  { name: "Fisik & Mental", value: 1 },
];

/* =========================
   AGAMA
========================= */
export const religionData = [
  { name: "Islam", value: 15728 },
  { name: "Kristen", value: 95 },
  { name: "Katholik", value: 63 },
  { name: "Hindu", value: 4 },
  { name: "Budha", value: 52 },
  { name: "Konghucu", value: 0 },
];

/* =========================
   PEKERJAAN
========================= */
export const jobData = [
  { name: "Tidak Bekerja", value: 4819 },
  { name: "Mengurus Rumah Tangga", value: 3103 },
  { name: "Pelajar/Mahasiswa", value: 2731 },
  { name: "Pensiunan", value: 152 },
  { name: "PNS", value: 753 },
  { name: "TNI", value: 16 },
  { name: "POLRI", value: 123 },
  { name: "Petani", value: 12 },
  { name: "Wiraswasta", value: 1033 },
  { name: "Karyawan Swasta", value: 1244 },
  { name: "Karyawan BUMN", value: 75 },
  { name: "Karyawan BUMD", value: 27 },
  { name: "Buruh Harian Lepas", value: 1305 },
  { name: "Dosen", value: 34 },
  { name: "Guru", value: 110 },
  { name: "Dokter", value: 32 },
  { name: "Bidan", value: 39 },
  { name: "Perawat", value: 20 },
  { name: "Apoteker", value: 3 },
];

/* =========================
   SARANA PENDIDIKAN
========================= */
export const facilityData = [
  { name: "PAUD", value: 0 },
  { name: "TK", value: 0 },
  { name: "SD", value: 0 },
  { name: "SMP", value: 0 },
  { name: "SMA", value: 0 },
  { name: "Madrasah", value: 0 },
  { name: "Pondok Pesantren", value: 0 },
];

/* =========================
   TEMPAT IBADAH
========================= */
export const worshipData = [
  { name: "Masjid", value: 0 },
  { name: "Mushola", value: 0 },
  { name: "Gereja", value: 0 },
  { name: "Kuil", value: 0 },
  { name: "Wihara", value: 0 },
  { name: "Pura", value: 0 },
];

/* =========================
   SUMMARY
========================= */
export const summaryData = {
  totalPenduduk: 15942,
  lakiLaki: 8131,
  perempuan: 7811,
  rw: 15,
  rt: 58,
  kk: 3210,
};


//hero
export const Heroimage = [
  {
    lightimage: "/images/hero/google.png",
    darkimage: "/images/hero/google_white.png",
  },
  {
    lightimage: "/images/hero/pay.png",
    darkimage: "/images/hero/pay_white.png",
  },
  {
    lightimage: "/images/hero/stripe.png",
    darkimage: "/images/hero/stripe_white.png",
  },
  {
    lightimage: "/images/hero/wise.png",
    darkimage: "/images/hero/wise_white.png",
  },
];

// payment
export const PaymentImage = [
  {
    image: "/images/payment/user.svg",
    title: "Create an account",
    details:
      "Mobile app made easy check out across the web and in apps without having to enter any payment information.",
  },
  {
    image: "/images/payment/user.svg",
    title: "Verify your identity",
    details:
      "Mobile app made easy check out across the web and in apps without having to enter any payment information.",
  },
  {
    image: "/images/payment/user.svg",
    title: "Link your bank account",
    details:
      "Mobile app made easy check out across the web and in apps without having to enter any payment information.",
  },
];

// Beneifit
export const BeneifitImage = [
  {
    image: "/images/benefit/pic.svg",
    alt: "Trusted brand",
    details:
      "Stop wasteful spend and save thousands with unlimited points and insights that maximize savings.",
  },
  {
    image: "/images/benefit/contact.svg",
    alt: "Trusted brand",
    details: "See where the company money is going in real time.",
  },
  {
    image: "/images/benefit/bank.svg",
    alt: "Trusted brand",
    details: "Powered by the free app that helps you run your whole business.",
  },
  {
    image: "/images/benefit/files.svg",
    alt: "Trusted brand",
    details: "No more lost receipts and tedious paperwork.",
  },
  {
    image: "/images/benefit/setting.svg",
    alt: "Trusted brand",
    details:
      "It's an all-digital card designed for online, and even in-store shopping.",
  },
];

// Footer Links
export const footerLinks: { link: string }[] = [
  {
    link: "Online Payments",
  },
  {
    link: "Financial Projections",
  },
  {
    link: "Bookkeeping",
  },
  {
    link: "Banking",
  },
  {
    link: "Documentation",
  },
  {
    link: "Integrations",
  },
  {
    link: "API Reference",
  },
  {
    link: "Support",
  },
  {
    link: "Help",
  },
  {
    link: "Infrastructure",
  },
  {
    link: "Certifications",
  },
  {
    link: "Licenses",
  },
  {
    link: "Terms and conditions",
  },
  {
    link: "Legal",
  },
  {
    link: "Privacy",
  },
  {
    link: "Cookies",
  },
  {
    link: "Disclaimer",
  },
];

// Perks
export const perks = [
  {
    text: "When you pay with a debit or credit card, Mobile App doesn't keep transaction information that can be tied back to you.",
  },
  {
    text: "Digital wallets are becoming more popular than ever before.",
  },
  {
    text: "You can also add your student ID card to Wallet to access places like your dorm and the library.",
  },
];

// review
export const review = [
  {
    text: "It's easy to set up and the support experience is unparalleled. every transaction the instant it happens and correct wasteful behavior. What a relief.",
    name: "Nina B. Freeman",
    post: "Founder at Litchi Care",
    image: "/images/search/profile.png",
    appstorerating: "4.5",
    gplayrating: "4.5",
  },
];

