import { profile } from "./profile";

// Indonesian copy. Everything not listed here (links, images, names, tech
// names) is inherited from the English profile. Arrays are matched by index,
// so keep the same order as profile.ts.

const experience = [
  {
    role: "Instruktur Software Engineer",
    period: "Juni 2025 – Sekarang",
    highlights: [
      "Mengajar Fullstack Web Development, Data Science, AI, dan Coding for Kids",
      "Mengajar bootcamp yang mencakup dasar frontend/backend, REST API, dan alur deployment",
      "Memimpin bootcamp Data Science: analisis data, visualisasi, dan ML menggunakan Python",
      "Memimpin kelas AI: konsep ML, dasar deep learning, dan pengantar NLP",
      "Mengajar Coding for Kids menggunakan Scratch dan Roblox Studio (Lua)",
      "Memberikan bimbingan individual kepada peserta dengan berbagai tingkat kemampuan",
    ],
  },
  {
    role: "Instruktur Kursus, Asisten & Admin",
    period: "September 2021 – Sekarang",
    highlights: [
      "Mengelola dan mencatat nilai peserta dengan efisien",
      "Mengatur dan memfasilitasi sesi kursus agar berjalan lancar",
      "Menyampaikan materi kursus dan memberikan dukungan belajar",
      "Melakukan troubleshooting untuk mengatasi kendala teknis",
    ],
  },
  {
    role: "Trainer, Pendidikan dan Pelatihan Komputer Korlantas",
    period: "September 2024 – Oktober 2024",
    highlights: [
      "Menyiapkan ruang kelas dan komputer untuk sesi pembelajaran",
      "Memberikan panduan Photoshop CS6 dan CapCut",
      "Membimbing peserta dalam proyek desain dan penyuntingan video",
      "Membuat dokumentasi sesi pelatihan",
    ],
  },
  {
    role: "Pengawas UTS",
    period: "Desember 2024",
    highlights: [
      "Mengawasi Ujian Tengah Semester (UTS) sesuai ketentuan",
      "Menjawab pertanyaan peserta selama ujian",
      "Melaporkan pelanggaran kepada panitia ujian",
    ],
  },
  {
    role: "Magang Back-end Web Development",
    period: "Agustus 2022 – Desember 2022",
    highlights: [
      "Mengembangkan operasi CRUD menggunakan Express.js",
      "Membangun website TMDB menggunakan API key eksternal",
      "Membangun website Psikologi (MS Wellbeing) dengan MERN stack secara tim",
      "Membangun web service dan RESTful API",
      "Merancang prototipe UI/UX",
    ],
  },
];

const techStackCategories = [
  "Bahasa Pemrograman",
  "Frontend",
  "Backend",
  "Database",
  "Analisis & Visualisasi Data",
  "Machine Learning & AI",
  "Alat & Platform",
];

const softSkills = [
  "Manajemen Waktu",
  "Kerja Sama Tim",
  "Adaptif",
  "Pemecahan Masalah",
  "Berpikir Analitis",
  "Mengajar",
  "Membimbing",
];

const technicalFocus = [
  { area: "Pengembangan Web Fullstack", detail: "React, Next.js, Laravel, Express, Golang" },
  { area: "Data Science & Machine Learning", detail: "Python, Scikit-learn, TensorFlow, PyTorch" },
  { area: "Pengembangan Backend", detail: "REST API, Node.js, PHP, Golang" },
  { area: "Mengajar & Membimbing", detail: "Bootcamp, workshop, bimbingan 1-on-1" },
  { area: "AI & Deep Learning", detail: "NLP, Computer Vision, OpenCV, YOLOv8" },
];

const projectDescriptions = [
  "Website untuk system integrator TI yang menyediakan solusi infrastruktur digital.",
  "Platform adopsi kucing yang dibangun dengan MERN stack.",
  "Situs pemesanan kelas percobaan untuk Haltev IT Learning Center.",
  "Situs manajemen konten untuk Haltev IT Learning Center.",
  "Situs karier dan lowongan kerja.",
  "Aplikasi machine learning yang mengklasifikasikan gambar hewan.",
  "Dashboard lagu Spotify yang membandingkan genre berdasarkan fitur audio dan merekomendasikan lagu.",
];

const services = [
  {
    title: "Website & aplikasi mobile",
    summary:
      "Saya membuat website dan aplikasi web untuk bisnis: desain, frontend, backend, database, sampai hosting-nya.",
    features: [
      "Company profile dan landing page yang cepat dibuka, nyaman di HP, dan bisa ditemukan di Google",
      "Dashboard admin dan tools internal dengan hak akses pengguna dan CRUD",
      "Sistem booking, pendaftaran, dan pemesanan, lengkap dengan formulir dan notifikasi email",
      "Manajemen konten, supaya tim Anda bisa mengubah halaman tanpa perlu memanggil developer",
      "Portal karier, katalog, dan halaman produk",
      "REST API, dan koneksi ke layanan pihak ketiga yang sudah Anda pakai",
      "Aplikasi mobile untuk Android dan iOS",
    ],
  },
  {
    title: "Otomatisasi & chatbot AI",
    summary:
      "Saya menyiapkan otomatisasi dan chatbot supaya tools Anda saling terhubung dan tidak ada lagi yang menyalin data satu per satu.",
    features: [
      "Chatbot WhatsApp dan Telegram yang menjawab FAQ, mengecek status pesanan, dan mengumpulkan lead",
      "Formulir website yang langsung masuk ke spreadsheet dan memberi tahu tim Anda",
      "Laporan dan pengingat yang terkirim sendiri sesuai jadwal",
      "Data yang tersinkron antar aplikasi dan database lewat webhook dan API",
      "Alur persetujuan, misalnya permintaan yang masuk ke atasan lalu kembali dengan konfirmasi",
      "Script yang memproses file dan membuat laporan",
    ],
  },
  {
    title: "Analisis data & dashboard",
    summary:
      "Saya merapikan data Anda dan mengubahnya jadi dashboard dan laporan yang mudah dibaca sekilas.",
    features: [
      "Spreadsheet dan database yang berantakan dirapikan dan digabung jadi satu sumber yang bisa diandalkan",
      "Dashboard interaktif dengan filter dan grafik",
      "Analisis eksploratif, lengkap dengan temuan dan rekomendasi tertulis",
      "Laporan mingguan atau bulanan yang dibuat otomatis",
      "Analisis tren dan model prediktif dasar",
      "Notebook yang bisa dijalankan ulang saat ada data baru",
    ],
  },
  {
    title: "AI & machine learning",
    summary:
      "Saya membuat model machine learning yang memprediksi, mengklasifikasi, atau merekomendasikan sesuatu, lalu men-deploy-nya supaya tim Anda benar-benar bisa memakainya.",
    features: [
      "Prediksi dan peramalan, misalnya permintaan, churn, harga, atau risiko",
      "Klasifikasi gambar, teks, dan data tabular",
      "Sistem rekomendasi yang menyarankan produk, konten, atau langkah berikutnya",
      "Chatbot NLP dan analisis teks: intent, sentimen, dan named entity",
      "Deep learning untuk pengenalan gambar dan deteksi objek",
      "Deployment sebagai API atau aplikasi web kecil",
    ],
  },
  {
    title: "Kelas coding untuk anak",
    summary:
      "Pelajaran di mana anak membuat game dan animasi sendiri sambil mencari tahu cara kerja aplikasi.",
    features: [
      "Mulai dari nol, tanpa perlu pengalaman",
      "Anak belajar dengan membuat game dan animasinya sendiri",
      "Selangkah demi selangkah, sesuai kecepatan anak",
      "Sesi privat atau kelompok kecil",
      "Orang tua bisa melihat hasil karya anak",
    ],
  },
  {
    title: "Kelas coding untuk remaja & dewasa",
    summary:
      "Belajar coding dari nol, atau naikkan level dari yang sudah Anda tahu.",
    features: [
      "Ramah pemula, mulai dari nol",
      "Pilih jalurnya: website, Python, data, atau AI",
      "Bangun proyek nyata yang bisa Anda tunjukkan ke orang lain",
      "Masukan yang jujur atas hasil kerja Anda",
      "Sesi privat atau kelompok kecil",
    ],
  },
];

const hobbies = ["Bermain Game", "Berenang", "Ngoding", "Menggambar", "Bernyanyi", "Membaca"];
const catTypes = ["Persia Abu-abu", "Maine Coon Cokelat"];
const foodCategories = [
  "Hidangan Utama & Pendamping",
  "Sayuran",
  "Camilan",
  "Hidangan Penutup",
  "Minuman",
];

export const profileId: typeof profile = {
  ...profile,
  title: "Instruktur Software Engineer",
  subtitle: "Full-stack Developer & Pendidik Data Science",
  bio: "Lulusan Sistem Informasi dan Instruktur Software Engineer di Haltev IT Learning Center. Saya tertarik pada pengembangan backend dan pemecahan masalah teknis, mudah beradaptasi, cepat belajar, dan berkomitmen pada pengajaran berkualitas di bidang Fullstack Web Development, Data Science, dan AI, serta selalu senang untuk terus bertumbuh.",
  availabilityLabel: "Terbuka untuk peluang & proyek",

  education: profile.education.map((edu, i) => ({
    ...edu,
    degree: ["Sarjana (S1), Sistem Informasi", "SMA, Jurusan IPA"][i] ?? edu.degree,
  })),

  experience: profile.experience.map((exp, i) => ({ ...exp, ...experience[i] })),

  techStack: profile.techStack.map((cat, i) => ({
    ...cat,
    category: techStackCategories[i] ?? cat.category,
  })),

  technicalFocus,

  softSkills: profile.softSkills.map((skill, i) => ({ name: softSkills[i] ?? skill.name })),

  languages: profile.languages.map((lang, i) => ({
    ...lang,
    name: ["Bahasa Indonesia", "Bahasa Inggris"][i] ?? lang.name,
    level: ["Bahasa ibu", "Profesional"][i] ?? lang.level,
  })),

  projects: profile.projects.map((project, i) => ({
    ...project,
    description: projectDescriptions[i] ?? project.description,
  })),

  services: profile.services.map((service, i) => ({ ...service, ...services[i] })),

  funFacts: {
    ...profile.funFacts,
    hobbies: profile.funFacts.hobbies.map((h, i) => ({ ...h, name: hobbies[i] ?? h.name })),
    cats: profile.funFacts.cats.map((cat, i) => ({ ...cat, type: catTypes[i] ?? cat.type })),
    favoriteFoods: {
      ...profile.funFacts.favoriteFoods,
      categories: profile.funFacts.favoriteFoods.categories.map((c, i) => ({
        ...c,
        label: foodCategories[i] ?? c.label,
      })),
    },
  },
};
