export const profile = {
  name: "Vanya Mayazura Puspitaningrum",
  shortName: "Vanya Mayazura",
  initials: "VM",
  title: "Software Engineer Instructor",
  subtitle: "Full-stack Developer & Data Science Educator",
  location: "Indonesia",
  email: "mayazurav@gmail.com",
  phone: "+6281280506903",
  linkedin: "https://www.linkedin.com/in/vnymyz",
  github: "https://github.com/vnymyz",
  bio: "Information Systems graduate passionate about backend development and solving technical problems. Adaptable, a quick learner, and experienced in teaching tech programs with a commitment to quality.",

  education: [
    {
      institution: "University of Gunadarma",
      degree: "Bachelor's Degree, Information Systems",
      period: "2019 – 2024",
      location: "Depok, Indonesia",
      gpa: "3.83",
    },
    {
      institution: "MAN 9 Jakarta",
      degree: "High School, Science Class",
      period: "2016 – 2019",
      location: "Jakarta, Indonesia",
      gpa: null,
    },
  ],

  experience: [
    {
      company: "Haltev IT Learning Center",
      role: "Software Engineer Instructor",
      type: "Full-time",
      period: "June 2025 – Present",
      location: "Bekasi, Indonesia",
      current: true,
      highlights: [
        "Delivered instruction across Fullstack Web Development, Data Science, AI, and Coding for Kids",
        "Taught bootcamps covering frontend/backend fundamentals, REST APIs, and deployment workflows",
        "Conducted Data Science bootcamps: data analysis, visualization, and ML using Python",
        "Led AI-focused classes: ML concepts, deep learning fundamentals, and introductory NLP",
        "Instructed Coding for Kids using Scratch and Roblox Studio (Lua)",
        "Provided individualized mentoring to participants at varying skill levels",
      ],
    },
    {
      company: "Haltev IT Learning Center",
      role: "Course Instructor, Assistant & Admin",
      type: "Part-time",
      period: "September 2021 – Present",
      location: "Cakung, Indonesia",
      current: true,
      highlights: [
        "Managed and recorded participant grades efficiently",
        "Organized and facilitated smooth course sessions",
        "Delivered course material and provided learning support",
        "Performed troubleshooting to address technical issues",
      ],
    },
    {
      company: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
      role: "Trainer, Korlantas Computer Education and Training",
      type: "Part-time",
      period: "September 2024 – October 2024",
      location: "Bekasi, Indonesia",
      current: false,
      highlights: [
        "Prepared classroom and computers for learning sessions",
        "Provided guidance on Photoshop CS6 and CapCut",
        "Directed participants in design and video editing projects",
        "Created documentation for training sessions",
      ],
    },
    {
      company: "Universitas Gunadarma",
      role: "UTS Supervisor",
      type: "Part-time",
      period: "December 2024",
      location: "Bekasi, Indonesia",
      current: false,
      highlights: [
        "Supervised Mid-Term Examinations (UTS) for regulatory compliance",
        "Addressed participant inquiries during examinations",
        "Reported irregularities to the examination committee",
      ],
    },
    {
      company: "Skilvul Tech4Impact",
      role: "Back-end Web Development Intern",
      type: "Internship",
      period: "August 2022 – December 2022",
      location: "Bekasi, Indonesia",
      current: false,
      highlights: [
        "Developed CRUD operations using Express.js",
        "Built a TMDB website using an external API key",
        "Built a Psychology website (MS Wellbeing) using MERN stack in a team",
        "Built web services and RESTful APIs",
        "Designed UI/UX prototypes",
      ],
    },
  ],

  techStack: [
    {
      category: "Programming Languages",
      color: "sage",
      items: ["Python", "JavaScript", "TypeScript", "PHP", "C++", "Java", "Lua"],
    },
    {
      category: "Frontend",
      color: "mint",
      items: ["HTML", "CSS", "React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "DaisyUI", "shadcn/ui"],
    },
    {
      category: "Backend",
      color: "forest",
      items: ["Node.js", "Express.js", "Laravel", "Golang", "PHP"],
    },
    {
      category: "Database",
      color: "stone",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQLite"],
    },
    {
      category: "Data Analysis & Visualization",
      color: "olive",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Streamlit"],
    },
    {
      category: "Machine Learning & AI",
      color: "moss",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "NLTK", "spaCy", "OpenCV", "YOLOv8", "Flask"],
    },
    {
      category: "Tools & Platforms",
      color: "warm",
      items: ["Git", "VS Code", "Figma", "Jupyter Notebook", "Google Colab", "Docker", "Postman", "Laragon", "CapCut"],
    },
  ],

  softSkills: [
    { name: "Time Management" },
    { name: "Teamwork" },
    { name: "Adaptability" },
    { name: "Problem Solving" },
    { name: "Analytical Thinking" },
    { name: "Teaching" },
    { name: "Mentoring" },
  ],

  languages: [
    { name: "Bahasa Indonesia", level: "Native", score: null },
    { name: "English", level: "Professional", score: "TOEFL 633 · TOEIC 730" },
  ],

  certificates: [
    {
      title: "Back-End Web Development",
      issuer: "Skilvul Tech4Impact",
      year: "2022",
    },
    {
      title: "Junior Web Programmer",
      issuer: "BNSP",
      year: "2023",
    },
    {
      title: "Data Science Python",
      issuer: "Sanbercode",
      year: "2025",
    },
  ],

  projects: [
    // Add your projects here
    // {
    //   title: "Project Name",
    //   description: "Brief description",
    //   tech: ["React", "Node.js"],
    //   link: "https://...",
    //   github: "https://...",
    //   image: "/images/project.png",
    // }
  ] as Array<{
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
  }>,

  funFacts: {
    games: [
      "Valorant", "CS2", "Stardew Valley", "All Resident Evil games",
      "Tekken 7 & 8", "Detroit: Become Human", "Cyberpunk 2077",
      "Persona 3 Reload", "Expedition 33", "All Monster Hunter games", "Dark Souls",
    ],
    hobbies: ["Gaming", "Swimming"],
    favoriteFoods: [
      "Matcha latte", "Bakpau", "Fried Chicken", "Kangkung Toge",
      "Capcay", "Sop Ayam", "Tempe", "Tahu", "Telur", "Air putih",
    ],
    cats: [
      {
        name: "Dadang",
        type: "Persian Gray",
        photo: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&q=80",
      },
      {
        name: "Lea",
        type: "Maine Coon Brown",
        photo: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&q=80",
      },
    ],
  },
};
