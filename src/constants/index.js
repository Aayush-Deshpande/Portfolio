import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  git,
  docker,
  meta,
  starbucks,
  carrent,
  jobit,
  tripguide,
  Keras,
  NumPy,
  OpenCV,
  Pandas,
  Python,
  scikitlearn,
  TensorFlow,

  // --- 1. CERTIFICATE IMPORTS ADDED ---
  ai_projects,
  ca,
  dm,
  ds_jpg,
  ds_pdf,
  founder,
  full_stack,
  gen_ai,
  gsa,
  lor,
  nlp,
  pl,
  se,
} from "../assets";

// --- 2. 'navLinks' UPDATED ---
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Computer Vision Specialist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "TensorFlow",
    icon: TensorFlow,
  },
  {
    name: "Scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "OpenCV",
    icon: OpenCV,
  },
  {
    name: "Keras",
    icon: Keras,
  },
  {
    name: "Pandas",
    icon: Pandas,
  },
  {
    name: "NumPy",
    icon: NumPy,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Google Student Ambassador",
    company_name: "Google",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Hosting workshops on Google technologies like Cloud and AI to educate fellow students.",
      "Mentoring peers and organizing events to grow the local tech community.",
      "Acting as a liaison between the student body and Google's developer resources.",
    ],
  },
  {
    title: "Community Coordinator",
    company_name: "Versanix Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2025 - Present",
    points: [
      "Successfully developed and delivered a complete face recognition system, integrating machine learning models for core functionality.",
      "Manage the company's digital presence, including all website updates, server maintenance, and content creation for the official LinkedIn page.",
    ],
  },
];

const projects = [
  {
    name: "Project Derby",
    description:
      "An open-source face recognition platform for secure, frictionless access control, featuring anti-spoofing liveness detection and HR/Time & Attendance integration.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Aayush-Deshpande/Project-Derby",
  },
  {
    name: "FedChain",
    description:
      "A decentralized platform combining Federated Learning and Blockchain to enable global model training without compromising data privacy. Features smart contract integration and AES-256 encryption for secure data flow.",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Federated Learning",
        color: "green-text-gradient",
      },
      {
        name: "Smart Contracts",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "House Price Prediction",
    description:
      "A predictive model for house prices, built from scratch using only pure Python to implement the linear regression algorithm without relying on external machine learning libraries.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithm",
        color: "green-text-gradient",
      },
      {
        name: "Data Science",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Versanix Technologies Website",
    description:
      "The official, fully responsive company website for Versanix Technologies, built to showcase the company's products and services to a global audience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://versanix.vercel.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "Aayush's work on Project Derby is truly impressive. The face recognition platform is robust, secure, and showcases a deep understanding of modern computer vision challenges.",
    name: "Shripad Punde",
    designation: "Project Lead",
    company: "Versanix Technologies",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "FedChain is a game-changer. Aayush's innovative approach of combining Federated Learning with Blockchain solves critical data privacy issues in machine learning. A brilliantly executed project.",
    name: "Divyanshu Swatantra",
    designation: "Blockchain Developer",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "The official website Aayush built for Versanix is fantastic. He delivered a polished, professional, and highly responsive site that perfectly captures our brand's identity.",
    name: "Shripad Punde",
    designation: "Project Lead",
    company: "Versanix Technologies",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

// --- 3. 'certificates' ARRAY ADDED ---
const certificates = [
  {
    title: "AI Projects",
    file: ai_projects,
  },
  {
    title: "RedHat Certificate",
    file: ca,
  },
  {
    title: "Digital Marketing",
    file: dm,
  },
  {
    title: "Data Science (JPG)",
    file: ds_jpg,
  },
  {
    title: "Founder Certificate",
    file: founder,
  },
  {
    title: "Full Stack Development",
    file: full_stack,
  },
  {
    title: "GenAI Foundations",
    file: gen_ai,
  },
  {
    title: "Google Student Ambassador",
    file: gsa,
  },
  {
    title: "Letter of Recommendation",
    file: lor,
  },
  {
    title: "Natural Language Processing",
    file: nlp,
  },
  {
    title: "Gotham-AI Founder",
    file: pl,
  },
  {
    title: "Software Engineering",
    file: se,
  },
];

// --- 4. FINAL EXPORT UPDATED ---
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates, // <-- Added this
};