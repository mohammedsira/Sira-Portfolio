// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import restapi from './assets/tech_logo/restapi.png'
import fakestoreapi from "./assets/tech_logo/fakestoreapi.png"
import omdb from "./assets/tech_logo/omdb.jpeg"
import stripe from "./assets/tech_logo/stripe.png"
import razorpay from "./assets/tech_logo/Razorpay.png"
import three from "./assets/tech_logo/three.png"
import jwt from "./assets/tech_logo/jwt.svg";
import middleware from "./assets/tech_logo/middleware.png";
import bcrypt from "./assets/tech_logo/bcrypt.png"
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mongoose from "./assets/tech_logo/mongoose.png"
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Certificates Section Logo's
import fsd from "./assets/course_image/zenclassfsd.png";
import javascript from "./assets/course_image/javascript.png";
import reactjs from "./assets/course_image/reactjs.png";
import nodejs from "./assets/course_image/nodejs.png";
import mysql from "./assets/course_image/mysql.png";
import mongodb from "./assets/course_image/mongodb.png";
import bootstrap from "./assets/course_image/bootstrap.png";
import hackathon from "./assets/course_image/hackathon.png";



// Project Section Logo's
import donor from './assets/work_logo/donor.png';
import expenses from './assets/work_logo/tracker.png';
import prescripto from './assets/work_logo/Prescripto.png';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', logo: htmlLogo },
            { name: 'CSS3', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'TailwindCSS', logo: tailwindcssLogo },
            // { name: 'GSAP', logo: gsapLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
            // { name: 'Three JS', logo: three },

        ],
    },
    {
        title: 'Backend',
        skills: [

            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'REST API', logo: restapi },
            { name: 'bcrypt', logo: bcrypt },
            { name: 'Middleware', logo: middleware },
            { name: 'JWT', logo: jwt },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Mongoose', logo: mongoose },
            { name: 'MySQL', logo: mysqlLogo },
        ],
    },
    {
        title: 'API Integration',
        skills: [
            { name: 'Fake Store API', logo: fakestoreapi },
            { name: 'OMDB API', logo: omdb },
            { name: 'Stripe', logo: stripe },
            { name: 'Razorpay', logo: razorpay },


        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            // { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const certificate = [
    {
        id: 0,
        title: "HACKATHON",
        issuer: "INNOTRATlabs",
        date: "November 2024",
        image: hackathon,
        description: "Participated HACKATHON in INNOTRATlabs",
        skills: ["HACKATHON"],
        fullText: `This is to certify that`
    },
    {
        id: 1,
        title: "Zen Class FSD ",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: fsd,
        description: "Completed Zen Class Full Stack Development Programme",
        skills: ["Full Stack Developer"],
        fullText: `This is to certify that`
    },
    {
        id: 2,
        title: "JAVASCRIPT",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: javascript,
        description: "JAVASCRIPT in Full Stack Development Programme",
        skills: ["Javascript"],
        fullText: `This is to certify that`
    },
    {
        id: 3,
        title: "React JS",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: reactjs,
        description: "Completed REACT JS in Full Stack Development Programme",
        skills: ["REACT JS"],
        fullText: `This is to certify that`
    },
    {
        id: 4,
        title: "NODE JS",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: nodejs,
        description: "Completed NODE JS in Full Stack Development Programme",
        skills: ["NODE JS"],
        fullText: `This is to certify that`
    },
    {
        id: 5,
        title: "My SQL",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: mysql,
        description: "Completed My SQL in Full Stack Development Programme",
        skills: ["My SQL"],
        fullText: `This is to certify that`
    },
    {
        id: 6,
        title: "MONGO DB",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: mongodb,
        description: "Completed MONGO DB in Full Stack Development Programme",
        skills: ["MONGO DB"],
        fullText: `This is to certify that`
    },
    {
        id: 7,
        title: "BOOTSTRAP",
        issuer: "GUVI Geek Network",
        date: "April 2024 - June 2024",
        image: bootstrap,
        description: "Completed BOOTSTRAP in Full Stack Development",
        skills: ["BOOSTRAP"],
        fullText: `This is to certify that`
    },
];


export const projects = [
    {
        id: 0,
        title: "🩸 Open Donors – Blood Donation Platform",
        description: "Open Donors is a web-based blood donation platform designed to connect blood donors with people in need quickly and efficiently. The application helps users find nearby donors based on blood group and contact them during medical emergencies.",
        tags: ["React.js", "HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB", "JWT (JSON Web Token)", "Vercel"],
        github: "https://github.com/mohammedsira/Open-Donors.git",
        webapp: "https://open-donors-g57m.vercel.app/",
        image: donor
    },

    {
        id: 1,
        title: "Expense-Tracker",
        description:
            "Built a web app to track daily income and expensesHelps users manage personal finances effectively Responsive and beginner- friendly design",
        tags: ["React", "TailwindCSS", "localStorage", "Chart.js", "Data Visualization"],
        github: "https://github.com/mohammedsira/Expense-Tracker-Mern-main.git",
        webapp: "https://track-yur-expense.netlify.app/",
        image: expenses,
    },

    {
        id: 2,
        title: "Prescripto",
        description:
            "Prescripto is a full-stack web application designed to make healthcare more accessible by simplifying the process of booking doctor appointments. Prescripto provides an efficient, user-friendly experience for both patients and healthcare providers",
        tags: ["React.js", "Redux", "Axios", "Tailwind/Bootstrap", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT (JSON Web Tokens)", "Vercel (for now, soon full-stack pipeline)"],
        github: "https://github.com/mohammedsira/DoctorAppointment-App.git",
        webapp: "https://prescripto-frontend-beige.vercel.app/",
        image: prescripto,
    }

];

