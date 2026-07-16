// Central content source. Every chapter of the site pulls from here.
// Later, the admin panel will read/write this same shape from MongoDB —
// for now it's the single source of truth so the storytelling pages have
// real content to render.

export const profile = {
  name: "Zainab Gull Khan",
  role: "Computer Science Graduate",
  university: "Forman Christian College (A Chartered University)",
  minor: "Mathematics",
  cgpa: "3.7 / 4.0",
  honors: [
    "Fall 2022",
    "Fall 2023",
    "Spring 2024",
    "Fall 2024",
    "Spring 2025",
  ],
  email: "hello@zainabgullkhan.dev",
  linkedin: "https://linkedin.com/in/zainabgullkhan",
  github: "https://github.com/zainabgullkhan",
  resumeUrl: "/resume.pdf",
};

export const storyChapters = [
  {
    number: "I",
    title: "First Lines",
    body: "It started with a blinking cursor and a Python tutorial I didn't fully understand. What kept me there wasn't the syntax — it was the moment a program finally did what I told it to. That small, stubborn satisfaction never really left.",
  },
  {
    number: "II",
    title: "The Logic of Things",
    body: "Algorithms became a second language. I liked that a problem could be taken apart, examined piece by piece, and rebuilt into something faster, cleaner, correct. Competitive problem sets taught me patience before they taught me anything about code.",
  },
  {
    number: "III",
    title: "Teaching What I Was Still Learning",
    body: "As a Teaching Assistant at Forman Christian College, I spent as much time debugging my own assumptions as I did debugging student code. Explaining a concept out loud is the fastest way to find the gap in your own understanding.",
  },
  {
    number: "IV",
    title: "Into Intelligent Systems",
    body: "Machine learning pulled me toward a different kind of question — not just 'does this work' but 'why does the model believe what it believes.' Building a heart disease predictor taught me that accuracy is a story you have to earn, feature by feature.",
  },
  {
    number: "V",
    title: "Building With Intention",
    body: "An internship at Bitz Studio put me in front of real users, real deadlines, and real consequences. I learned to build software that other people depend on — responsive interfaces, dependable APIs, and the unglamorous discipline of agile teams.",
  },
  {
    number: "VI",
    title: "Guarding the Systems I Build",
    body: "Cybersecurity became the natural next question: if I can build it, can I also break it — and can I make it harder to break? That question became Aegis Chain, the project that ties everything I've learned into one place.",
  },
];

export const experience = [
  {
    role: "Teaching Assistant",
    org: "Forman Christian College",
    period: "February 2024 — June 2026",
    points: [
      "Mentored undergraduate students through core programming coursework",
      "Led debugging sessions that strengthened student fundamentals",
      "Translated dense technical material into clear, approachable explanations",
    ],
  },
  {
    role: "Full Stack Development Intern",
    org: "Bitz Studio",
    period: "June 2024 — September 2024",
    points: [
      "Built responsive UI components integrated with backend APIs",
      "Worked directly with database integration and data flow design",
      "Practiced agile ceremonies within a real, cross-functional team",
    ],
  },
];

export const education = {
  degree: "BS Computer Science, Minor in Mathematics",
  school: "Forman Christian College (A Chartered University)",
  cgpa: "3.7 / 4.0",
  honors: profile.honors,
};

export const projects = [
  {
    slug: "aegis-chain",
    title: "Aegis Chain",
    tagline: "AI-assisted penetration testing, made accessible",
    year: "2025 — 2026",
    role: "Final Year Project — Lead Developer",
    excerpt:
      "A cybersecurity platform that brings AI-assisted vulnerability analysis, prioritization, and remediation guidance to developers and businesses who don't have a full security team on staff.",
    body: [
      "Aegis Chain exists because penetration testing is usually locked behind specialist consultancies and expensive tooling. The platform centralizes scanning, project management, vulnerability history, and audit logs into one workspace, then uses AI to help interpret and prioritize what the scans find.",
      "The vision is democratization: a small team should be able to run a credible security review of their own product without hiring an outside firm for every release cycle. The AI layer doesn't replace judgment — it organizes findings by severity and exploitability, and drafts remediation guidance a developer can actually act on.",
      "Architecturally, the frontend is React and Next.js, the API layer follows a FastAPI-inspired resource design adapted into this project's TypeScript backend, and MongoDB stores scans, findings, and audit trails. Authentication and reporting were built to be trustworthy enough for a team to rely on for real decisions.",
    ],
    stack: ["React", "Next.js", "TypeScript", "MongoDB", "AI Integration", "REST APIs"],
    metrics: [
      { label: "Focus", value: "Vulnerability triage" },
      { label: "Output", value: "Remediation guidance" },
      { label: "Scope", value: "Centralized pentesting" },
    ],
    featured: true,
  },
  {
    slug: "heart-disease-predictor",
    title: "Heart Disease Predictor",
    tagline: "An AI-powered diagnostic web application",
    year: "2024",
    role: "Solo Project",
    excerpt:
      "A clinical risk-assessment tool comparing Random Forest, Logistic Regression, and Support Vector Machines to predict heart disease risk from 13 clinical features.",
    body: [
      "This project was my first real introduction to applied machine learning — not the theory of it, but the practical work of cleaning data, choosing the right model, and being honest about what 'accuracy' actually measures.",
      "Three models were trained and compared: Random Forest, Logistic Regression, and Support Vector Machines. After tuning, Random Forest performed best, reaching approximately 88% accuracy. Users enter 13 clinical features and receive both a risk prediction and a confidence score, rather than a single unexplained number.",
      "It taught me to be skeptical of my own models before I asked anyone else to trust them.",
    ],
    stack: ["Python", "Random Forest", "Logistic Regression", "SVM", "Model Evaluation"],
    metrics: [
      { label: "Best model", value: "Random Forest" },
      { label: "Accuracy", value: "~88%" },
      { label: "Inputs", value: "13 clinical features" },
    ],
    featured: false,
  },
];

export const skills = {
  Programming: ["Python", "TypeScript", "JavaScript", "C"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "FastAPI concepts", "REST APIs", "Authentication"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  "AI & ML": ["Machine Learning", "Classification", "Model Evaluation"],
  Cybersecurity: ["Kali Linux", "Metasploitable", "Vagrant", "Web Security"],
  Tools: ["Git", "VS Code", "Figma", "MATLAB", "Godot"],
};
