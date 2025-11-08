// src/assets/constant.js
import disaster from "./tech_logo/disastermanagement.webp";
import numberguess from "./tech_logo/numberguess.webp";
import portfolio from "./tech_logo/portfolio.webp";
import integrated from "./tech_logo/integratedmarket.webp";
import portfolioImage from "./tech_logo/image.png";
import Logo from "./tech_logo/image1.png";
import htmlLogo from "./tech_logo/html.png";
import cssLogo from "./tech_logo/css.png";
import javascriptLogo from "./tech_logo/javascript.png";
import reactjsLogo from "./tech_logo/react.png";
import nodejsLogo from "./tech_logo/nodejs.png";
import mongodbLogo from "./tech_logo/mongodb.png";
import gitLogo from "./tech_logo/git.png";
import githubLogo from "./tech_logo/github.png";
import pythonLogo from "./tech_logo/python.png";
import postmanLogo from "./tech_logo/postman.png";
import tailwindLogo from "./tech_logo/talwind.png";
import bootstrapLogo from "./tech_logo/bootsrap.png";
import vscodeLogo from "./tech_logo/visualstudio.png";
import javaLogo from "./tech_logo/java.png";
import cLogo from "./tech_logo/c.png";
import angularLogo from "./tech_logo/angular.png";
import vercelLogo from "./tech_logo/vercel.png";

export const SkillsInfo = [
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: javascriptLogo },
  { name: "React JS", img: reactjsLogo },
  { name: "Angular", img: angularLogo },
  { name: "Node JS", img: nodejsLogo },
  { name: "MongoDB", img: mongodbLogo },
  { name: "Python", img: pythonLogo },
  { name: "C Language", img: cLogo },
  { name: "Java", img: javaLogo },
  { name: "Bootstrap", img: bootstrapLogo },
  { name: "Tailwind CSS", img: tailwindLogo },
  { name: "Git", img: gitLogo },
  { name: "GitHub", img: githubLogo },
  { name: "Postman", img: postmanLogo },
  { name: "VS Code", img: vscodeLogo },
  { name: "Vercel", img: vercelLogo },
];


export const experiences = [
  {
    id: 0,
    img: portfolioImage,
    role: "Frontend Developer Intern",
    company: "Webverse",
    duration: "June 2025 - August 2025",
    desc: "Developed responsive web applications using React.js and collaborated with the design team to enhance user experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Git",
    ],
  },
  {
    id: 1,
    img: Logo,
    role: "Software Developer Intern",
    company: "AGC Networks",
    duration: "June 2024 - May 2025",
    desc: "Contributed to backend development using Node.js and Express, and assisted in database management with MongoDB.",
    skills: [
      "SQL",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
    ],  
    
  }
]

export const projects = [
  {
    id: 0,
    name: "Disaster Management System",
    description:
      "A web application that helps in managing and coordinating disaster response efforts effectively.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    img: disaster,
    link: "#",
    
    
  },
  {
    id: 1,
    name: "Number guessing Game",
    description:
      "A fun and interactive number guessing game built with JavaScript, HTML, and CSS.",
    tech: ["JavaScript", "HTML", "CSS"],
    img: numberguess,
    link: "#",
    
  },
    
  {
    id: 2,
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    img: portfolio,
    link: "#",
    
  },
  {
    id: 3,
    name: "Integrated Market Approach for Agricultural Product",
    description:
      "A comprehensive platform to connect farmers with buyers, ensuring fair prices and reducing middlemen.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    img: integrated,
    link: "#",
    
    },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Greater Noida Institute of Technology, Greater Noida",
    duration: "2022 - 2026",
    description:
      "Pursuing a B.Tech in Computer Science with a focus on software engineering, data structures, algorithms, and full-stack web development. Actively engaged in projects, hackathons, and technical learning.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education (12th)",
    institution: "C.P. Vidya Niketan School",
    duration: "2020 - 2022",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills.",
  },
  {
    id: 3,
    degree: "Secondary Education (10th)",
    institution: "C.P. Vidya Niketan School",
    duration: "2019 - 2020",
    description:
      "Completed secondary education with distinction, developing foundational knowledge in core subjects and an early interest in technology and computing.",
  },
];