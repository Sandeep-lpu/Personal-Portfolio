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
  ];  