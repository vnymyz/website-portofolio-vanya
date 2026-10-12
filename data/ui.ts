// Interface strings (buttons, labels, headings). Longer content such as the
// bio and experience lives in profile.ts / profile.id.ts.
const en = {
  // nav
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.services": "Services",
  "nav.experience": "Experience",
  "nav.techstack": "Tech Stack",
  "nav.skills": "Skills",
  "nav.github": "GitHub",
  "nav.contact": "Contact",

  // language toggle
  "lang.label": "Language",
  "lang.switchToEn": "Switch language to English",
  "lang.switchToId": "Switch language to Indonesian",

  // splash
  "splash.welcome": "Welcome to Vanya's",
  "splash.portfolio": "Portfolio",
  "splash.skip": "Skip",
  "splash.aria": "Loading Vanya's portfolio",

  // about
  "about.hello": "Hello, I'm",
  "about.explore": "Explore my work",
  "about.cv": "Download CV",

  // section headers
  "projects.eyebrow": "What I've shipped",
  "projects.title": "Projects",
  "experience.eyebrow": "Where I've been working",
  "experience.title": "Experience",
  "techstack.eyebrow": "What I've been using",
  "techstack.title": "Tech Stack",
  "skills.eyebrow": "What I've been learning",
  "skills.title": "Skills & Background",
  "services.eyebrow": "What I can build for you",
  "services.title": "Services",
  "services.canBuild": "What I can build",
  "services.classes": "Coding classes",
  "github.eyebrow": "What I've been building",
  "github.title": "GitHub Activity",

  // projects
  "projects.code": "Code",
  "projects.demo": "Live Demo",
  "projects.pages": "Projects pages",
  "projects.empty.title": "Projects Coming Soon",
  "projects.empty.text":
    "I'm currently curating my best work. Check back soon, or visit my GitHub to see what I've been building.",
  "projects.empty.cta": "Visit GitHub",
  "pager.prev": "Previous page",
  "pager.next": "Next page",
  "pager.goTo": "Go to page {n}",

  // experience
  "experience.current": "Current",
  "experience.showLess": "Show less",
  "experience.showMore": "Show {n} more highlights",
  "type.Full-time": "Full-time",
  "type.Part-time": "Part-time",
  "type.Internship": "Internship",

  // skills
  "skills.technicalFocus": "Technical focus",
  "skills.softSkills": "Soft skills",
  "skills.certificates": "Certificates",
  "skills.education": "Education",
  "skills.languages": "Languages",
  "skills.gpa": "GPA",

  // contact
  "contact.heading": "Let's work together !",
  "contact.text": "Got a project? Contact me.",

  // footer
  "footer.rights": "All rights reserved.",
  "footer.funFacts": "Fun facts about me",

  // github
  "github.unavailable": "GitHub activity unavailable right now",
  "github.loading": "Loading GitHub activity…",
  "github.repos": "{n} public repos",
  "github.contributions": "Contributions in the Last Year",
  "github.contribution": "{n} contribution on {date}",
  "github.contributions.many": "{n} contributions on {date}",
  "github.recentlyUpdated": "Recently Updated",
  "github.recentlyCommitted": "Recently Committed",
  "github.catAlt": "A cat",
  "time.today": "today",
  "time.day": "1 day ago",
  "time.days": "{n} days ago",
  "time.months": "{n} mo ago",
  "time.years": "{n} yr ago",

  // fun facts
  "fun.back": "Back to Portfolio",
  "fun.games": "Game Library",
  "fun.steam.unavailable": "Steam library unavailable right now",
  "fun.steam.loading": "Loading Steam library…",
  "fun.online": "Online",
  "fun.offline": "Offline",
  "fun.gamesOwned": "{n} games owned",
  "fun.recent": "Recently Played",
  "fun.totalPlayed": "Total played",
  "fun.hrs": "hrs",
  "fun.mostPlayed": "Most Played",
  "fun.cats": "My 2 Cats I Love",
  "fun.food": "Favorite Food & Drinks",
  "fun.hobbies": "Hobbies",
  "fun.hobbyAlt": "{name} hobby",

  // food carousel
  "food.categories": "Food categories",
  "food.region": "{label} I like",
  "food.prev": "Previous food",
  "food.next": "Next food",
  "food.goTo": "Go to {name}",
  "food.count": "{n} of {total}",
};

export type UiKey = keyof typeof en;

const id: Record<UiKey, string> = {
  "nav.about": "Tentang",
  "nav.projects": "Proyek",
  "nav.services": "Layanan",
  "nav.experience": "Pengalaman",
  "nav.techstack": "Teknologi",
  "nav.skills": "Keahlian",
  "nav.github": "GitHub",
  "nav.contact": "Kontak",

  "lang.label": "Bahasa",
  "lang.switchToEn": "Ganti bahasa ke Inggris",
  "lang.switchToId": "Ganti bahasa ke Indonesia",

  "splash.welcome": "Selamat datang di",
  "splash.portfolio": "Portofolio Vanya",
  "splash.skip": "Lewati",
  "splash.aria": "Memuat portofolio Vanya",

  "about.hello": "Halo, saya",
  "about.explore": "Lihat karya saya",
  "about.cv": "Unduh CV",

  "projects.eyebrow": "Yang sudah saya rilis",
  "projects.title": "Proyek",
  "experience.eyebrow": "Tempat saya bekerja",
  "experience.title": "Pengalaman",
  "techstack.eyebrow": "Yang biasa saya pakai",
  "techstack.title": "Tech Stack",
  "skills.eyebrow": "Yang sudah saya pelajari",
  "skills.title": "Keahlian & Latar Belakang",
  "services.eyebrow": "Yang bisa saya buat untuk Anda",
  "services.title": "Layanan",
  "services.canBuild": "Yang bisa saya buat",
  "services.classes": "Kelas coding",
  "github.eyebrow": "Yang sedang saya bangun",
  "github.title": "Aktivitas GitHub",

  "projects.code": "Kode",
  "projects.demo": "Lihat Demo",
  "projects.pages": "Halaman proyek",
  "projects.empty.title": "Proyek Segera Hadir",
  "projects.empty.text":
    "Saya sedang menyusun karya terbaik saya. Kembali lagi nanti, atau kunjungi GitHub saya untuk melihat apa yang sedang saya bangun.",
  "projects.empty.cta": "Kunjungi GitHub",
  "pager.prev": "Halaman sebelumnya",
  "pager.next": "Halaman berikutnya",
  "pager.goTo": "Ke halaman {n}",

  "experience.current": "Saat ini",
  "experience.showLess": "Tampilkan lebih sedikit",
  "experience.showMore": "Tampilkan {n} poin lainnya",
  "type.Full-time": "Penuh waktu",
  "type.Part-time": "Paruh waktu",
  "type.Internship": "Magang",

  "skills.technicalFocus": "Fokus teknis",
  "skills.softSkills": "Soft skill",
  "skills.certificates": "Sertifikat",
  "skills.education": "Pendidikan",
  "skills.languages": "Bahasa",
  "skills.gpa": "IPK",

  "contact.heading": "Mari bekerja sama !",
  "contact.text": "Punya proyek? Hubungi saya.",

  "footer.rights": "Hak cipta dilindungi.",
  "footer.funFacts": "Fakta menarik tentang saya",

  "github.unavailable": "Aktivitas GitHub sedang tidak tersedia",
  "github.loading": "Memuat aktivitas GitHub…",
  "github.repos": "{n} repositori publik",
  "github.contributions": "Kontribusi dalam Setahun Terakhir",
  "github.contribution": "{n} kontribusi pada {date}",
  "github.contributions.many": "{n} kontribusi pada {date}",
  "github.recentlyUpdated": "Baru Diperbarui",
  "github.recentlyCommitted": "Commit Terbaru",
  "github.catAlt": "Seekor kucing",
  "time.today": "hari ini",
  "time.day": "1 hari lalu",
  "time.days": "{n} hari lalu",
  "time.months": "{n} bln lalu",
  "time.years": "{n} thn lalu",

  "fun.back": "Kembali ke Portofolio",
  "fun.games": "Koleksi Game",
  "fun.steam.unavailable": "Koleksi Steam sedang tidak tersedia",
  "fun.steam.loading": "Memuat koleksi Steam…",
  "fun.online": "Online",
  "fun.offline": "Offline",
  "fun.gamesOwned": "{n} game dimiliki",
  "fun.recent": "Baru Dimainkan",
  "fun.totalPlayed": "Total dimainkan",
  "fun.hrs": "jam",
  "fun.mostPlayed": "Paling Sering Dimainkan",
  "fun.cats": "2 Kucing Kesayangan Saya",
  "fun.food": "Makanan & Minuman Favorit",
  "fun.hobbies": "Hobi",
  "fun.hobbyAlt": "Hobi {name}",

  "food.categories": "Kategori makanan",
  "food.region": "{label} favorit saya",
  "food.prev": "Makanan sebelumnya",
  "food.next": "Makanan berikutnya",
  "food.goTo": "Ke {name}",
  "food.count": "{n} dari {total}",
};

export const ui = { en, id };
