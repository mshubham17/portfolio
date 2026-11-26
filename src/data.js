// All editable content lives here. Search for "TODO" for values you still need to set.
export const PROFILE = {
  name: "Shubham Mehta",
  subtitle: "Full-Stack Developer and IoT enthusiast",
  tagline: "Into web development and IoT. I write code, connect hardware, and Google responsibly.",
  badge: "Available for work",
  email: "TODO_YOUR_EMAIL@example.com", // TODO: set your real email
  github: "https://github.com/mshubham17",
  linkedin: "https://www.linkedin.com/in/shubham172",
  cv: "/Shubham_Resume.pdf", // TODO: make sure public/Shubham_Resume.pdf exists
};

export const ABOUT = {
  heading: "Figuring it out, one chapter at a time.",
  paragraphs: [
    "I'm an aspiring Full-Stack Developer and a passionate learner who believes that how we build is just as important as what we build.",
    "Away from the keyboard I enjoy films and reading, and I like exploring history, geopolitics, aviation and architecture. I'm naturally curious about how systems work, whether in technology or the real world.",
  ],
  quote: "Success is nothing more than a few simple disciplines, practiced every day.",
  quoteBy: "Jim Rohn",
  tech: ["React", "Node.js", "MongoDB", "Docker", "Vercel", "Tailwind CSS", "Git", "GitHub"],
};

export const EXPERIENCE = [
  {
    company: "Aetos Digilog", role: "Operations Intern", period: "Apr 2026 to Present", current: true,
    points: [
      "Developed and maintained Power BI dashboards to track warehouse KPIs, inventory movement, and operational performance.",
      "Analyzed WMS data and warehouse processes using SQL and Advanced Excel to identify operational bottlenecks and improve workflow efficiency.",
    ],
  },
  {
    company: "Self Employed", role: "Freelance Web Developer", period: "Jan to Feb 2026",
    points: [
      "Completed small freelance web development gigs for clients, building simple and responsive websites.",
      "Worked with HTML, CSS, JavaScript, and basic React to build landing pages and small web projects.",
    ],
  },
  {
    company: "Acrivision Technologies", role: "Associate Intern", period: "Jan to Jun 2025",
    points: [
      "Developed a web application that lets engineers configure and visualize telecom tower structures in real time through an interactive 3D interface.",
      "Designed a structured, multi-step workflow that simplified complex engineering inputs and improved usability.",
    ],
  },
  {
    company: "Corporate Infotech", role: "Python Intern", period: "Jun to Aug 2023",
    points: [
      "Built a predictive maintenance system to analyze operational data and identify potential equipment failures in advance.",
      "Automated routine infrastructure update processes, reducing manual intervention.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MediBot",
    blurb: "RAG-based medical assistant that answers questions from a medical knowledge base.",
    flow: "Question → Embed → Retrieve → Generate → Answer",
    tags: ["Python", "Langchain", "HuggingFace Embeddings", "Groq API"],
    code: "TODO_MEDIBOT_REPO_URL", // TODO: repo URL
  },
  {
    title: "Drowning Detection",
    blurb: "IoT and computer vision safety system that analyzes swimming videos and generates a risk score.",
    flow: "Video → Frames → Detect → Risk score → Web app",
    tags: ["Python", "PyTorch", "OpenCV", "Streamlit", "CVLib"],
    code: "https://github.com/mshubham17/Emotion-detector.git", // TODO: confirm this is the right repo
  },
];

export const CONTACT = {
  note: "I'm actively seeking internship and early-career opportunities where I can contribute to real-world projects and keep growing as a developer.",
};
