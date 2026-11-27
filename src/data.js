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
    "Away from the keyboard I enjoy films, reading, and I like exploring history, geopolitics, aviation, astronomy and espionage. I'm naturally curious about how systems work, whether in technology or the real world.",
  ],
  // One is picked at random on every page load. Add or remove freely.
  quotes: [
    { text: "Hard work beats talent when talent doesn't work hard.", by: "Tim Notke" },
    { text: "Success is nothing more than a few simple disciplines, practiced every day.", by: "Jim Rohn" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", by: "Aristotle" },
    { text: "The man who moves a mountain begins by carrying away small stones.", by: "Confucius" },
    { text: "He who has a why to live can bear almost any how.", by: "Friedrich Nietzsche" },
    { text: "It always seems impossible until it's done.", by: "Nelson Mandela" },
    { text: "Integrity is doing the right thing, even when no one is watching.", by: "C. S. Lewis" },
    { text: "The price of greatness is responsibility.", by: "Winston Churchill" },
    { text: "Discipline equals freedom.", by: "Jocko Willink" },
    { text: "It’s not that I’m so smart, it’s just that I stay with problems longer.", by: "Albert Einstein" },
    { text: "Whether you think you can or think you can’t, you’re right.", by: "Henry Ford" },
    { text: "The best way to predict the future is to invent it.", by: "Alan Kay" },
    { text: "The only way to do great work is to love what you do.", by: "Steve Jobs" },
    {text: "We are all in the gutter, but some of us are looking at the stars.", by : "Oscar Wilde"},
    {text : "Well done is better than well said.", by : "Benjamin Franklin"},
    {text :"You miss 100% of the shots you don't take.", by: "Wayne Gretzky"},
    {text : "The journey of a thousand miles begins with a single step.", by : "Lao Tzu"}
  ],
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
    title: "ISS Tracker",
    image: "/projects/iss.jpg",
    blurb: "An interactive 3D visualization of the International Space Station, tracking its real-time position as it orbits Earth.",
    tags: ["JavaScript", "Vite", "3D visualization", "APIs"],
    code: "https://github.com/mshubham17/Iss-Tracker",
    live: "https://iss-tracker-tan.vercel.app",
  },
  {
    title: "Personal Portfolio",
    image: "/projects/portfolio.jpg",
    blurb: "My developer portfolio built with React and Tailwind.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    code: "https://github.com/mshubham17/portfolio",
  },
  {
    title: "Drowning Detection",
    image: "/projects/drowning.jpg",
    blurb: "IoT and computer vision safety system that analyzes swimming videos and generates a risk score.",
    tags: ["Python", "PyTorch", "OpenCV", "Streamlit", "CVLib"],
    code: "https://github.com/mshubham17/Emotion-detector.git", // TODO: confirm this is the right repo
    live: "https://drowning-detection-vh9z95a68jhonohxhb59ce.streamlit.app/#try-with-a-demo-video",
  },
  {
    title: "Soil Sentry",
    image: "/projects/soil-sentry.jpg",
    blurb: "Arduino-based soil moisture monitoring device: a real-time detection system using analog sensors for precision irrigation.",
    tags: ["Arduino", "Embedded Systems", "C++"],
    code: "https://github.com/mshubham17/soil-sentry-system",
  },
  {
    title: "Wireless Switch",
    image: "/projects/wireless-switch.jpg",
    blurb: "Arduino-powered remote control system: a wireless interface for appliances using RF modules.",
    tags: ["Arduino", "Embedded Systems", "C++"],
    code: "https://github.com/mshubham17/wireless-swtich",
  },
];

export const CONTACT = {
  note: "I'm actively seeking internship and early-career opportunities where I can contribute to real-world projects and keep growing as a developer.",
};
