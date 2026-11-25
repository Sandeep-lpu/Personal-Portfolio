// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import csprepLogo from './assets/work_logo/cs_prep.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Hackathon",
      date: "April 2024 - Present",
      desc: "Led a team of four to develop a secure online voting platform using blockchain technology at a hackathon. Built an intuitive web interface with HTML, CSS, and JavaScript, and integrated Web3.js to connect with the Ethereum blockchain, ensuring vote transparency and immutability. Implemented security features to prevent tampering, with each vote recorded on-chain. Delivered a fully functional prototype in 18 hours, gaining hands-on experience in blockchain, web development, and secure app design.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 1,
      img: bsaLogo,
      school: "LPU University, Jalandhar",
      date: "Sept 2024 - Present",
      grade: "77.3%",
      desc: "I am persuing my Bachelor's degree in Computer Science (B.tech) from LPU University, Jalandhar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at LPU University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.tech (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Holy Mary International School, L-Sarai, Darbhanga",
      date: "Apr 2023 - March 2024",
      grade: "76%",
      desc: "I completed my class 12 education from Holy Mary International School, L-Sarai, Darbhanga, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Informatics Practice.",
      degree: "CBSE(XII) - PCM with Informatics Practice",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Holy Mary International School, L-Sarai, Darbhanga",
      date: "Apr 2021 - March 2022",
      grade: "86%",
      desc: "I completed my class 10 education from Holy Mary International School, L-Sarai, Darbhanga, under the CBSE board, where I studied Science with Informatics Practice.",
      degree: "CBSE(X), Science with Informatics Practice",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Food Smile",
      description:
        "A dynamic full-stack platform designed to streamline food delivery services. The website allows users to browse menus, place orders, and track deliveries seamlessly. With robust backend support, secure authentication, and optimized performance, the platform ensures a smooth and efficient user experience for both customers and service providers.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sandeep-lpu/Food-Smile",
      webapp: "https://github.com/Sandeep-lpu/Food-Smile",
    },
    {
      id: 2,
      title: "Hostel Allocation System",
      description:
        "A scalable hostel booking and room allocation platform engineered to handle over 50k concurrent users at once with reliable performance and smooth user flows.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Hostel-Allocation-System",
      tags: ["TypeScript", "Web App", "Scalable Systems"],
      github: "https://github.com/Sandeep-lpu/Hostel-Allocation-System",
      webapp: "https://github.com/Sandeep-lpu/Hostel-Allocation-System",
    },
    {
      id: 3,
      title: "SchemeMatch",
      description:
        "AI-driven government and financial scheme matching platform built to help marginalized entrepreneurs discover and qualify for relevant support programs.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/SchemeMatch",
      tags: ["TypeScript", "AI", "Web App"],
      github: "https://github.com/Sandeep-lpu/SchemeMatch",
      webapp: "https://github.com/Sandeep-lpu/SchemeMatch",
    },
    {
      id: 4,
      title: "Pulse AI",
      description:
        "An AI command center that ingests raw business data — CRM exports, support tickets, and Slack threads — and delivers a prioritized daily briefing with one-click action drafts.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Pulse-AI",
      tags: ["JavaScript", "AI", "Analytics"],
      github: "https://github.com/Sandeep-lpu/Pulse-AI",
      webapp: "https://github.com/Sandeep-lpu/Pulse-AI",
    },
    {
      id: 5,
      title: "AI Risk Manager (Fraud Spike Detector)",
      description:
        "A real-time fraud detection system built for Razorpay's AI Risk Manager hackathon track, designed to catch anomalous transaction activity before it costs merchants money.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/AI-Risk-Manager-Fraud-Spike-Detector",
      tags: ["Python", "AI", "Fraud Detection", "Machine Learning"],
      github: "https://github.com/Sandeep-lpu/AI-Risk-Manager-Fraud-Spike-Detector",
      webapp: "https://github.com/Sandeep-lpu/AI-Risk-Manager-Fraud-Spike-Detector",
    },
    {
      id: 6,
      title: "Voice-Enabled RAG Model (HH Goa)",
      description:
        "A voice-enabled, ultra-low-latency Retrieval-Augmented Generation (RAG) pipeline featuring orchestration, guardrails, and benchmarking.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/HH-Goa-RAG-Voice-Enabled-RAG-Model",
      tags: ["Python", "RAG", "Voice AI", "LLM"],
      github: "https://github.com/Sandeep-lpu/HH-Goa-RAG-Voice-Enabled-RAG-Model",
      webapp: "https://github.com/Sandeep-lpu/HH-Goa-RAG-Voice-Enabled-RAG-Model",
    },
    {
      id: 7,
      title: "FaceChain",
      description:
        "Real-time face detection pipeline that identifies matching profiles across the web via Google Lens reverse image search and records tamper-proof verification on the Ethereum blockchain.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/FaceChain",
      tags: ["Python", "Computer Vision", "Ethereum", "Blockchain"],
      github: "https://github.com/Sandeep-lpu/FaceChain",
      webapp: "https://github.com/Sandeep-lpu/FaceChain",
    },
    {
      id: 8,
      title: "Codex Tribunal",
      description:
        "Multi-Agent Orchestration Dashboard built with Codex for coordinating, monitoring, and evaluating multiple AI agents.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/-Codex-Tribunal",
      tags: ["JavaScript", "Multi-Agent", "Dashboard"],
      github: "https://github.com/Sandeep-lpu/-Codex-Tribunal",
      webapp: "https://github.com/Sandeep-lpu/-Codex-Tribunal",
    },
    {
      id: 9,
      title: "TaskPulse",
      description:
        "AI-powered productivity companion that proactively assists users in planning, prioritizing, and completing tasks before deadlines are missed.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/TaskPulse",
      tags: ["TypeScript", "AI", "Productivity"],
      github: "https://github.com/Sandeep-lpu/TaskPulse",
      webapp: "https://github.com/Sandeep-lpu/TaskPulse",
    },
    {
      id: 10,
      title: "Disease Chatbot",
      description:
        "AI Medical Assistant capable of understanding human-typed symptoms and parsing uploaded medical lab reports (OCR). Built with FastAPI, React, and Machine Learning for instant disease prediction.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Disease-Chatbot",
      tags: ["Python", "FastAPI", "React", "Machine Learning", "OCR"],
      github: "https://github.com/Sandeep-lpu/Disease-Chatbot",
      webapp: "https://github.com/Sandeep-lpu/Disease-Chatbot",
    },
    {
      id: 11,
      title: "HH Goa Frame & ID Card Generator",
      description:
        "The official Builder ID Card and 6 artistic PFP frame generator for Hacker House Goa 2026 (AI x Crypto Residency by 2:47PM Studio).",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/HH-Goa-Frame-ID-Card-Generator",
      tags: ["JavaScript", "Canvas", "Web App"],
      github: "https://github.com/Sandeep-lpu/HH-Goa-Frame-ID-Card-Generator",
      webapp: "https://github.com/Sandeep-lpu/HH-Goa-Frame-ID-Card-Generator",
    },
    {
      id: 12,
      title: "EcoFeast",
      description:
        "A smart food recovery platform dedicated to reducing food waste by connecting surplus from restaurants, supermarkets, and bakeries with local charities, consumers, and composters.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/EcoFeast",
      tags: ["TypeScript", "Sustainability", "Full Stack"],
      github: "https://github.com/Sandeep-lpu/EcoFeast",
      webapp: "https://github.com/Sandeep-lpu/EcoFeast",
    },
    {
      id: 13,
      title: "Hostel Allocation",
      description:
        "Web application for managing student hostel room allocation, availability tracking, and booking workflows.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Hostel-allocation",
      tags: ["TypeScript", "Web App"],
      github: "https://github.com/Sandeep-lpu/Hostel-allocation",
      webapp: "https://github.com/Sandeep-lpu/Hostel-allocation",
    },
    {
      id: 14,
      title: "Aerogarage",
      description:
        "JavaScript web application for Aerogarage, featuring interactive UI components and service management.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Aerogarage",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Sandeep-lpu/Aerogarage",
      webapp: "https://github.com/Sandeep-lpu/Aerogarage",
    },
    {
      id: 15,
      title: "Live News Website",
      description:
        "A live news platform with trusted-source labels, fast search, and real-time headline updates.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Live_news_website",
      tags: ["JavaScript", "News API", "HTML", "CSS"],
      github: "https://github.com/Sandeep-lpu/Live_news_website",
      webapp: "https://github.com/Sandeep-lpu/Live_news_website",
    },
    {
      id: 16,
      title: "Weather App",
      description:
        "A responsive weather forecast web application built with JavaScript to fetch and display real-time weather conditions.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Weather-App",
      tags: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/Sandeep-lpu/Weather-App",
      webapp: "https://github.com/Sandeep-lpu/Weather-App",
    },
    {
      id: 17,
      title: "To-Do Web App",
      description:
        "A fun To-Do Web App with animations, dark/light mode, and smooth UI. Add, edit, delete, and manage tasks with date & time in an engaging way.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/To-Do_Web_App",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sandeep-lpu/To-Do_Web_App",
      webapp: "https://github.com/Sandeep-lpu/To-Do_Web_App",
    },
    {
      id: 18,
      title: "Responsive Landing Page",
      description:
        "A responsive landing page with an interactive navigation bar, gradient themes, smooth scrolling, animations, and a mobile-friendly design.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Responsive_Landing_Page",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Sandeep-lpu/Responsive_Landing_Page",
      webapp: "https://github.com/Sandeep-lpu/Responsive_Landing_Page",
    },
    {
      id: 19,
      title: "Tic-Tac-Toe Web App",
      description:
        "An interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play in 2-Player mode or challenge the computer with win/draw detection and a clean, responsive UI.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Tic-Tac-Toe_Web_App",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Sandeep-lpu/Tic-Tac-Toe_Web_App",
      webapp: "https://github.com/Sandeep-lpu/Tic-Tac-Toe_Web_App",
    },
    {
      id: 20,
      title: "Simple Calculator Web App",
      description:
        "A simple and responsive Calculator web app built with HTML, CSS, and JavaScript. Perform basic arithmetic operations with a clean UI, click or keyboard input, and reset functionality.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Simple_Calculator_Web_App",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sandeep-lpu/Simple_Calculator_Web_App",
      webapp: "https://github.com/Sandeep-lpu/Simple_Calculator_Web_App",
    },
    {
      id: 21,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and achievements in computer science and web development with a clean, modern UI.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Personal-Portfolio",
      tags: ["React JS", "Tailwind CSS", "Vite", "JavaScript"],
      github: "https://github.com/Sandeep-lpu/Personal-Portfolio",
      webapp: "https://github.com/Sandeep-lpu/Personal-Portfolio",
    },
    {
      id: 22,
      title: "Hackathon Fistx",
      description:
        "Hackathon project repository developed during the Fistx hackathon.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/hackathon_fistx",
      tags: ["Hackathon"],
      github: "https://github.com/Sandeep-lpu/hackathon_fistx",
      webapp: "https://github.com/Sandeep-lpu/hackathon_fistx",
    },
    {
      id: 23,
      title: "Sandeep Demo",
      description:
        "My first repository on GitHub exploring HTML basics.",
      image: "https://opengraph.githubassets.com/1/Sandeep-lpu/Sandeep-demo",
      tags: ["HTML"],
      github: "https://github.com/Sandeep-lpu/Sandeep-demo",
      webapp: "https://github.com/Sandeep-lpu/Sandeep-demo",
    },
  ];