import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-white"
        >
            <div className="container mx-auto max-w-5xl text-center text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] text-white">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full mb-8"></div>

                <div className="space-y-6 text-left">
                    <p className="text-gray-300">
                        with 7 Years of Experience In Engineering and Sales , Transitioned to <b>FULL STACK WEB DEVELOPMENT</b> , <br /> Showcasing skills in MERN Stack and a Commitment to continuous learning. <br />

                        <br />Transforming ideas into robust, scalable web solutions with expertise in MERN stack development. <br />
                        Proficient in crafting responsive, user-friendly interfaces using modern front-end technologies like HTML5, CSS3, and JavaScript frameworks/libraries.
                        <br />
                        Skilled in designing and implementing RESTful APIs for seamless communication between front-end and back-end systems. <br />
                        Experienced in database management, including schema design, optimization, and querying with MongoDB. <br />
                        Strong problem-solving abilities and a knack for troubleshooting and debugging complex issues. <br />
                        Continuously staying updated with the latest trends and technologies in web development to deliver cutting-edge solutions. <br />

                        <br />Let's collaborate and bring your digital visions to life! Connect with me to explore opportunities. <br />
                    </p> <br />

                    <p className="text-gray-300">
                        <b>⚙️ TECK STACK : </b> <br />
                        <br />
                        <b>Frontend :</b> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI<br />
                        <b>Backend :</b> Node.js, Express.js <br />
                        <b>Database :</b> MongoDB, MySQL <br />
                        <b>Authentication & Security :</b> JWT, Bcrypt, Password Hashing <br />
                        <b>Version Control & Deployment :</b> Git, Github, Netlify, Render
                        <br />
                    </p> <br />

                    <p className="text-gray-300">
                        <b>🚀 PROJECTS </b> <br />
                        <br />
                        I’ve built several real-world projects, including:
                        <ul className="list-disc list-inside mt-2">
                            <li>
                                🩸 <b>Open Donors — Blood Donation Platform</b> – Created a platform to connect blood donors and patients during emergencies
                            </li>
                            <li>
                                💸 <b>Expense Tracker — Finance Management App</b> – Built a web app to track daily income and expenses
                                Helps users manage personal finances effectively
                            </li>
                            <li>
                                🛍️ <b>WearSphere — E-Commerce Web Application</b> – Product listing, cart management, and smooth checkout flow
                                User-friendly UI focused on performance and usability
                                <i> (More exciting projects are on the way!)</i>
                            </li>
                        </ul>
                    </p>

                    <p className="text-gray-300">
                        <b>📚 LEARNING & GROWTH</b> <br />
                        <br />
                        I'm currently enrolled in the{" "}
                        <b>IIT Madras-Guvi  - MERN Fullstack Development Certification Program,</b> Where I'm deepening
                        My Understanding of Fullstack Architecture and Best Practices.
                    </p>

                    <p className="text-gray-300">
                        <b>🌟 LET'S CONNECT</b> <br />
                        <br />
                        I'm Actively Seeking <b>Opportunities To Contribute To Real- World Projects,</b> Collaborate With
                        Passionate Teams, And Grow As a Developer. <br />
                        You Can Explore My Projects On{" "}
                        <a href="https://github.com/mohammedsira" target="_blank" rel="noopener noreferrer">
                            <b>GitHub</b>
                        </a>{" "}
                        <span role="img" aria-label="arrow">👉</span> let's connect and build something great together!
                    </p>
                </div>

                {/* 🌟 4 Developer Role Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {/* Frontend */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-cyan-500/20 mb-3">
                                <SiReact className="h-10 w-10 text-cyan-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Frontend Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Crafting clean, responsive, and interactive UIs using React, TailwindCSS, and modern web tools.
                            </p>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-green-500/20 mb-3">
                                <SiNodedotjs className="h-10 w-10 text-green-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Backend Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Developing secure APIs and business logic using Node.js, Express, and RESTful architecture.
                            </p>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-yellow-500/20 mb-3">
                                <SiMongodb className="h-10 w-10 text-yellow-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Database Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Managing and optimizing data with MongoDB and Mongoose for seamless data flow.
                            </p>
                        </div>
                    </div>

                    {/* Fullstack */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-purple-500/20 mb-3">
                                <MdLaptopMac className="h-10 w-10 text-purple-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Fullstack Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Building complete, scalable web apps by integrating frontend and backend technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
