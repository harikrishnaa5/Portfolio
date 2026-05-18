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
import PeerbrainsLogo from "./assets/peerbrains-logo.webp";
import MUILogo from "./assets/materialUI-logo.png";
import Scalino from "./assets/scalino-logo.png";
import ReduxLogo from "./assets/saga.webp";
import PythonLogo from "./assets/python-logo.webp";
import FastifyLogo from "./assets/fastify-logo.png";
import PostgresLogo from "./assets/postgres-logo.webp";

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
        faIcon: "fa-brands fa-react",
        brandColor: "#61DAFB",
    },
    {
        key: "nextjs",
        name: "Next.js",
        img: NextLogo,
        variant: "pad",
    },
    {
        key: "javascript",
        name: "JavaScript",
        img: JavaScriptLogo,
        faIcon: "fa-brands fa-js",
        brandColor: "#F7DF1E",
    },
    {
        key: "saga",
        name: "Redux-Saga",
        img: ReduxLogo,
        variant: "pad",
    },
    {
        key: "mui",
        name: "Material UI",
        img: MUILogo,
        variant: "pad",
    },
    {
        key: "tailwindcss",
        name: "TailwindCSS",
        img: TailwindLogo,
        variant: "invert",
    },
    {
        key: "scss",
        name: "SCSS",
        img: SCSSLogo,
        variant: "pad",
    },
];

export const backEnd = [
    {
        key: "nodejs",
        name: "Node.js",
        img: NodeLogo,
        faIcon: "fa-brands fa-node-js",
        brandColor: "#339933",
    },
    {
        key: "express",
        name: "Express.js",
        img: ExpressLogo,
        variant: "pad",
    },
    {
        key: "nestjs",
        name: "Nest.js",
        img: NestLogo,
        variant: "color",
    },
    {
        key: "mongodb",
        name: "MongoDB",
        img: MongoDBLogo,
        variant: "color",
    },
    {
        key: "postgresql",
        name: "PostgreSQL",
        img: PostgresLogo,
        variant: "color",
    },
    {
        key: "typescript",
        name: "TypeScript",
        img: TypeScriptLogo,
        variant: "invert",
    },
    {
        key: "fastify",
        name: "Fastify",
        img: FastifyLogo,
        variant: "pad",
    },
    {
        key: "python",
        name: "Python",
        img: PythonLogo,
        faIcon: "fa-brands fa-python",
        brandColor: "#3776AB",
    },
];

export const connectMe = {
    Email: "harikrishnaaa1111@gmail.com",
    Phone: "+91 9497769002",
};

export const workExperience = [
    {
        id: 0,
        logo: PeerbrainsLogo,
        companyName: "Peerbrains Technologies",
        website: "",
        duration: "November 2025 - Present",
        location: "Bengaluru, Karnataka, India  -Remote",
        role: "Programmer Analyst",
        techStack:
            "Node.js, Express, Fastify, PostgreSQL, PrismaORM, MongoDB, React, MaterialUI, TailwindCSS, SCSS, TypeScript, Docker",
        description: "Building a comprehensive auditing system and contributes to multiple software solutions, including a full-featured OTT platform, serving as a full-stack engineer responsible for responsive front-end interfaces, secure back-end services, integrations, and production deployments.",
        logoVariant: "pad",
    },
    {
        id: 1,
        logo: Scalino,
        companyName: `Scalino Technologies LLP`,
        website: "https://scalinotechnologies.com/",
        duration: "July 2025 - November 2025",
        location: "Calicut, Kerala, India  -Hybrid",
        role: "Front-End Developer",
        techStack: "React, Next.js, TypeScript, MaterialUI, TailwindCSS",
        description:
            "Led front-end development across CRM, ERP, and Forex trading projects, building responsive, user-centric interfaces and collaborating with cross-functional teams.",
        logoVariant: "color",
    },
    {
        id: 2,
        logo: XmindsLogo,
        companyName: "Xminds Infotech Pvt Ltd",
        website: "https://www.xminds.com/",
        duration: "March 2024 - June 2025",
        location: "Technopark, Trivandrum, Kerala, India  -On-site",
        role: "Full-Stack Developer",
        techStack:
            "React, Node.js, Express, Next.js, MaterialUI, Angular, Nest.js, MongoDB, Jira, SonarQube",
        description:
            "As a Full Stack Developer, I worked on building and maintaining scalable web applications using the MERN stack. My responsibilities included developing dynamic front-end interfaces with React and Next.js, implementing RESTful APIs with Express and Node.js, and managing data flow using MongoDB. I collaborated closely with designers and backend teams to deliver clean, responsive, and high-performance user experiences.",
        logoVariant: "pad",
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
        logoVariant: "color",
    },
];
