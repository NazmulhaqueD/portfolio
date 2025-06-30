import React from 'react';
import {
    FaReact,
    FaNodeJs,
    FaCss3Alt,
    FaHtml5,
    FaJsSquare,
    FaGithub
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: "Social Serve",
        image: "https://i.postimg.cc/9MXMRP4Q/Untitled-design.png",
        technologies: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
            { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> }
        ],
        Features: [
            'Create new events', 'Join existing events', 'Manage their own events', 'Track joined events'
        ],
        shortDescription: "Join and create local social events like tree plantations or road cleaning with this responsive community-driven platform.",
        fullDescription: "Social Serve is a full-stack community platform designed to promote social responsibility. Users can create, join, and manage local events such as road cleaning or tree plantation drives. With Google & email login, JWT-protected routes, and responsive design, it ensures a secure and smooth experience. Features include event filtering, live tracking, real-time updates, and dark/light theme toggle. Built with React, Node.js, Express, and MongoDB.",
        liveLink: "https://social-serve-auth.web.app",
        codeLink: "https://github.com/NazmulhaqueD/social-event-platform"
    }
];




const Projects = () => {
    return (
        <div id='projects' className='max-w-7xl mx-auto min-h-screen mt-16 lg:mt-0 flex flex-col justify-center items-center p-4 rounded-xl'>
            <h1 className='text-4xl text-center lg:text-5xl text-secondary font-bold mb-16
            '>My Projects</h1>
            <div className='space-y-6'>
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;