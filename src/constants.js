import ReactLogo from "./assets/react-logo.png";
import NextLogo from "./assets/next.js-logo.png";
import NestLogo from "./assets/nest-logo.png";
import NodeLogo from "./assets/node.js-logo.png";
import ExpressLogo from "./assets/express-logo.png";
import FreelanceLogo from "./assets/freelancer-logo.png";
import JavaScriptLogo from "./assets/javascript-logo.png";
import MongoDBLogo from "./assets/mongodb-logo.png";
import TailwindLogo from "./assets/tailwindcss-logo.svg";
import TypeScriptLogo from "./assets/typescript-logo.svg";
import SCSSLogo from "./assets/scss-logo.png";
import XmindsLogo from "./assets/xminds-logo.jpg";
import MUILogo from "./assets/materialUI-logo.png";
import Scalino from "./assets/scalino-logo.png";

export const navMenu = [
    {
        id: 1,
        key: "home",
        item: "Home",
        icon: "fa-solid fa-house",
    },
    {
        id: 2,
        key: "experience",
        item: "Experience",
        icon: "fa-solid fa-user-tie",
    },
    {
        id: 3,
        key: "skills",
        item: "Skills",
        icon: "fa-solid fa-laptop-code",
    },
];

export const twitter = "https://x.com/harikrishna__1";
export const linkedin = "https://www.linkedin.com/in/harikrishnaa5/";
export const github = "https://github.com/harikrishnaa5";

export const frontEnd = [
    {
        key: "react",
        name: "React",
        img: ReactLogo,
    },
    {
        key: "nextjs",
        name: "Next.js",
        img: NextLogo,
    },
    {
        key: "javascript",
        name: "JavaScript",
        img: JavaScriptLogo,
    },
    {
        key: "mui",
        name: "Material UI",
        img: MUILogo,
    },
    {
        key: "tailwindcss",
        name: "TailwindCSS",
        img: TailwindLogo,
    },
    {
        key: "scss",
        name: "SCSS",
        img: SCSSLogo,
    },
];

export const backEnd = [
    {
        key: "nodejs",
        name: "Node.js",
        img: NodeLogo,
    },
    {
        key: "express",
        name: "Express.js",
        img: ExpressLogo,
    },
    {
        key: "nestjs",
        name: "Nest.js",
        img: NestLogo,
    },
    {
        key: "mongodb",
        name: "MongoDB",
        img: MongoDBLogo,
    },
    {
        key: "typescript",
        name: "TypeScript",
        img: TypeScriptLogo,
    },
];

export const connectMe = {
    Email: "harikrishnaswathi14@gmail.com",
    Phone: "+91 9497769002",
};

export const workExperience = [
    {
        id: 1,
        logo: Scalino,
        companyName: `Scalino Technologies LLP   - Freelance`,
        website: "https://scalinotechnologies.com/",
        duration: "August 2025 - Present",
        location: "Calicut, Kerala, India  -Hybrid",
        role: "Front-End Developer",
        techStack: "React, Next.js, MaterialUI, TailwindCSS",
        description:
            "Responsible for front-end development across multiple projects, including CRM systems, ERP solutions, and Forex trading platforms.",
    },
    {
        id: 2,
        logo: XmindsLogo,
        companyName: "Xminds Infotech Pvt Ltd",
        website: "https://www.xminds.com/",
        duration: "March 2024 - June 2025",
        location: "Technopark, Trivandrum, Kerala, India  -On-site",
        role: "Full-stack Web Developer",
        techStack: "React, Node.js, Express, Next.js, MaterialUI, Angular, Nest.js, MongoDB, Jira, SonarQube",
        description:
            "As a Full Stack Developer, I worked on building and maintaining scalable web applications using the MERN stack. My responsibilities included developing dynamic front-end interfaces with React and Next.js, implementing RESTful APIs with Express and Node.js, and managing data flow using MongoDB. I collaborated closely with designers and backend teams to deliver clean, responsive, and high-performance user experiences.",
    },
    {
        id: 3,
        logo: FreelanceLogo,
        companyName: "Freelance",
        website: "",
        duration: "March 2023 - February 2024",
        location: "Remote",
        role: "MERN Stack Developer",
        techStack: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
        description:
            "Delivered responsive and dynamic web solutions using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Handled full-cycle development for client projects — from UI design and frontend implementation to backend logic and database integration.",
    },
];
