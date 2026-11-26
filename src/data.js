// All editable content lives here. Search for "TODO" for values still needed.
export const site = {
  name: "Shubham Mehta",
  role: "Full-Stack Developer and IoT enthusiast",
  tagline:
    "Into web development and IoT. I write code, connect hardware, and Google responsibly.",
  badge: "Available for work",
  cvUrl: "/Shubham_Resume.pdf",
  // TODO: put your real email here (used for the mailto: fallback if EmailJS env vars are missing)
  email: "TODO_YOUR_EMAIL@example.com",
  github: "https://github.com/mshubham17",
  linkedin: "https://www.linkedin.com/in/shubham172",
  nowRole: "Operations Intern",
  nowCompany: "Aetos Digilog",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const tech = [
  "React", "Node.js", "MongoDB", "Docker", "Vercel", "Tailwind CSS", "Git", "GitHub",
];

export const about = {
  heading: "Figuring it out, one chapter at a time.",
  paragraphs: [
    "I'm an aspiring Full-Stack Developer and a passionate learner who believes that how we build is just as important as what we build.",
    "When I'm not coding, you'll find me binge watching movies and tv shows. I enjoy watching films, reading, and exploring topics that expand my perspective from history and geopolitics to aviation and architecture. I'm naturally curious about how systems work, whether in technology or the real world.",
  ],
  quote: "Success is nothing more than a few simple disciplines, practiced every day.",
  quoteBy: "Jim Rohn",
};

export const projects = [
  {
    title: "Drowning Detection",
    description:
      "Developed and deployed an AI-powered drowning detection system. The application analyzes swimming videos, detects potential drowning incidents, and generates a risk score through an interactive web interface.",
    tags: ["Python", "PyTorch", "OpenCV", "Streamlit", "CVLib", "Computer Vision"],
    pipeline: [
      ["Video", ""],
      ["Frames", "OpenCV"],
      ["Detect", "PyTorch, CVLib"],
      ["Risk score", ""],
      ["Web app", "Streamlit"],
    ],
    // Taken from the previous site's project entry.
    code: "https://github.com/mshubham17/Emotion-detector.git",
  },
  {
    title: "MediBot",
    description:
      "A RAG-powered medical assistant that retrieves relevant medical information from a medical knowledge base and generates context-aware answers using Large Language Models.",
    tags: ["Python", "Langchain", "HuggingFace Embeddings", "Groq API"],
    pipeline: [
      ["Question", ""],
      ["Embed", "HuggingFace"],
      ["Retrieve", "Knowledge base"],
      ["Generate", "LLM via Groq"],
      ["Answer", ""],
    ],
    code: "TODO_MEDIBOT_REPO_URL", // TODO: MediBot repo URL
  },
];

export const experience = [
  {
    period: "Apr 2026 - Present",
    role: "Operations Intern",
    company: "Aetos Digilog",
    points: [
      "Developed and maintained Power BI dashboards to track warehouse KPIs, inventory movement, and operational performance, enabling data-driven decision making for management.",
      "Analyzed WMS data and warehouse processes utilizing SQL and Advanced Excel to identify operational bottlenecks, support inventory accuracy initiatives, and improve workflow efficiency.",
    ],
    tags: ["Power BI", "Advanced Excel", "SQL", "WMS (Warehouse Management System)"],
  },
  {
    period: "Jan 2026 - Feb 2026",
    role: "Freelance Web Developer",
    company: "Self Employed",
    points: [
      "Completed small freelance web development gigs for clients, building simple and responsive websites.",
      "Worked with HTML, CSS, JavaScript, and basic React to develop landing pages and small web projects.",
    ],
    tags: ["React", "JavaScript", "Python"],
  },
  {
    period: "Jan 2025 - Jun 2025",
    role: "Associate Intern",
    company: "Acrivision Technologies Pvt. Ltd.",
    points: [
      "Developed a web application that allows engineers to configure and visualize telecom tower structures in real time through an interactive 3D interface.",
      "Designed a structured, multi-step workflow that simplified complex engineering inputs and improved usability for configuration tasks.",
    ],
    tags: ["React", "Node.js", "Three.JS"],
  },
  {
    period: "Jun 2023 - Aug 2023",
    role: "Python Intern",
    company: "Corporate Infotech Pvt. Ltd",
    points: [
      "Built a predictive maintenance system to analyze operational data and identify potential equipment failures in advance.",
      "Automated routine infrastructure update processes, reducing manual intervention and improving operational efficiency.",
    ],
    tags: ["Python", "Docker", "Machine Learning"],
  },
];

export const contact = {
  heading: "Get in touch",
  text: "Send me a message and let's discuss how we can work together.",
  availabilityTitle: "Currently available",
  availabilityText:
    "I'm actively seeking internship and early-career opportunities where I can contribute to real-world projects, learn from experienced teams, and continue growing as a developer!",
};

export const footer = {
  right: "Built with React and Tailwind. Mostly written under a lot of sky.",
};
