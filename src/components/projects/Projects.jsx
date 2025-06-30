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
    },
    {
        id: 2,
        title: "Gardening Community & Resource Hub",
        image: "https://i.postimg.cc/8zGs5LLF/Greenest.png",
        technologies: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
            { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> }
        ],
        Features: [
            "Firebase Authentication",
            "CRUD on Gardening Tips",
            "Filter by Difficulty",
            "Theme Toggle"
        ],
        fullFeatures: [
            "User authentication with Firebase (Email/Google)",
            "Protected routes with reload persistence",
            "Dynamic content: Gardeners & Tips from MongoDB",
            "CRUD operations on gardening tips",
            "Difficulty-based filtering (Easy/Medium/Hard)",
            "Like functionality with real-time DB updates",
            "SwiperJS event slider on homepage",
            "Theme toggle (Dark/Light)",
            "SweetAlert2 & Toast notifications",
            "Responsive design & custom 404 page"
        ],
        shortDescription: "A vibrant platform where gardening lovers can connect, share tips, ask questions, and explore helpful resources in a supportive community.",
        fullDescription: "Gardening Community & Resource Hub is a full-stack platform crafted for plant enthusiasts. Users can authenticate with Firebase, share and manage gardening tips through full CRUD operations, filter content by difficulty, and interact via likes and comments. SwiperJS enables smooth UI banners, while theme toggle and real-time updates ensure a modern UX. It’s fully responsive and designed to foster collaboration, learning, and green inspiration.",
        liveLink: "https://gardening-community-2b8b5.web.app/",
        codeLink: "https://github.com/NazmulhaqueD/gardening-community-client"
    }
    ,
    {
        id: 2,
        title: "Event Explorer",
        image: "https://i.postimg.cc/4xMzSTwg/Untitled-design-2.png", 
        technologies: [
            { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
            { name: "DaisyUI", icon: <SiTailwindcss className="text-pink-400 text-4xl" /> },
        ],
        Features: [
            "User Authentication (Email & Google)",
            "Protected Routes with Persistent Login",
            "Responsive UI with Swiper & AOS Animations",
            "User Profile Update via Firestore"
        ],
        shortDescription: "Discover and interact with upcoming local events through this sleek, single-page React app with authentication and profile management.",
        fullDescription: "Event Explorer is a vibrant React single-page application for discovering and reserving local events such as workshops and exhibitions. Users can sign in with email or Google, reserve seats, and manage their profile with photo and name. Featuring protected routes, persistent login using Firebase Auth, a responsive layout with Swiper slider and AOS animation, and custom toast notifications, it provides a seamless and engaging event discovery experience.",
        liveLink: "https://normalnazmull-suit.surge.sh/",
        codeLink: "https://github.com/NazmulhaqueD/local-event-discovery-platform"
    }

];




const Projects = () => {
    return (
        <div id='projects' className='max-w-7xl mx-auto min-h-screen mt-16 lg:mt-0 flex flex-col justify-center items-center p-4 rounded-xl'>
            <h1 className='text-4xl text-center lg:text-5xl mt-16 text-secondary font-bold mb-16
            '>My Projects</h1>
            <div className='space-y-8'>
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;