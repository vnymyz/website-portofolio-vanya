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
      "Rumah online yang profesional untuk bisnis Anda, agar pelanggan mudah menemukan, mempercayai, dan menghubungi Anda.",
    features: [
      "Tampilan menarik dan nyaman di HP, tablet, maupun komputer",
      "Mudah Anda ubah sendiri teks dan fotonya",
      "Formulir pemesanan, reservasi, atau kontak online bila dibutuhkan",
      "Cepat dibuka dan disiapkan agar mudah ditemukan di Google",
      "Aplikasi HP untuk Android dan iPhone bila dibutuhkan",
    ],
  },
  {
    title: "Otomatisasi & chatbot AI",
    summary:
      "Chatbot dan otomatisasi yang menangani pekerjaan berulang, sehingga Anda dan tim tidak perlu mengerjakannya manual.",
    features: [
      "Menjawab pertanyaan umum pelanggan di WhatsApp atau Telegram, siang dan malam",
      "Mengirim konfirmasi dan pengingat secara otomatis",
      "Memindahkan data antar formulir, spreadsheet, dan email tanpa mengetik ulang",
      "Lebih sedikit kesalahan dan hemat berjam-jam setiap minggu",
    ],
  },
  {
    title: "Analisis data & dashboard",
    summary:
      "Angka-angka Anda dibuat mudah dipahami, agar Anda bisa mengambil keputusan dengan yakin.",
    features: [
      "Spreadsheet berantakan dirapikan menjadi satu sumber data yang andal",
      "Grafik penjualan, pelanggan, dan tren yang jelas",
      "Dashboard langsung yang bisa dibuka kapan saja",
      "Ringkasan sederhana tentang arti angka dan langkah selanjutnya",
    ],
  },
  {
    title: "AI & machine learning",
    summary:
      "Fitur cerdas yang belajar dari data Anda, untuk menghemat waktu atau menangkap hal yang mungkin terlewat.",
    features: [
      "Mengenali objek di foto, misalnya produk atau cacat",
      "Memprediksi hasil, misalnya permintaan atau pelanggan yang mungkin berhenti",
      "Mengurutkan dan memberi label teks atau gambar dalam jumlah besar secara otomatis",
      "Menambahkan fitur AI ke website atau aplikasi yang sudah Anda punya",
    ],
  },
  {
    title: "Kelas coding untuk anak",
    summary:
      "Pelajaran yang ramah dan praktis agar anak-anak yang penasaran bisa tahu bagaimana game dan aplikasi dibuat.",
    features: [
      "Mulai dari nol, tanpa perlu pengalaman",
      "Anak belajar dengan membuat game dan animasi sendiri",
      "Bimbingan sabar, langkah demi langkah, sesuai kecepatan mereka",
      "Sesi privat atau kelompok kecil",
      "Orang tua bisa melihat hasil karya anak",
    ],
  },
  {
    title: "Kelas coding untuk remaja & dewasa",
    summary:
      "Belajar coding dari nol, atau naik level, bersama pengajar yang menjelaskan dengan jelas.",
    features: [
      "Ramah pemula, mulai dari nol",
      "Pilih jalur: website, Python, data, atau AI",
      "Bangun proyek nyata yang bisa Anda tunjukkan",
      "Masukan jujur atas hasil kerja Anda",
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
