import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiDaisyui } from 'react-icons/si';
import SkillCard from './SkillCard';

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500 text-5xl" />,
        learned: "Jan 2024",
        proficiency: "Advanced",
    },
    {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
        learned: "Feb 2024",
        proficiency: "Advanced",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
        learned: "Mar 2024",
        proficiency: "Advanced",
    },
    {
        name: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
        learned: "Apr 2024",
        proficiency: "Intermediate",
    },
    {
        name: "React",
        icon: <FaReact className="text-sky-400 text-5xl" />,
        learned: "May 2024",
        proficiency: "Advanced",
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-5xl" />,
        learned: "Jun 2024",
        proficiency: "Basic",
    },
    {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300 text-5xl" />,
        learned: "Jun 2024",
        proficiency: "Basic",
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
        learned: "Jun 2024",
        proficiency: "Basic",
    },
    {
        name: "Git",
        icon: <FaGitAlt className="text-red-500 text-5xl" />,
        learned: "Mar 2024",
        proficiency: "Intermediate",
    },
    {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500 text-5xl" />,
        learned: "May 2024",
        proficiency: "Basic",
    },
    {
        name: "Figma",
        icon: <FaFigma className="text-pink-500 text-5xl" />,
        learned: "Feb 2024",
        proficiency: "Intermediate",
    },
    {
        name: "DaisyUI",
        icon: <SiDaisyui className="text-purple-400 text-5xl" />,
        learned: "May 2024",
        proficiency: "Intermediate",
    },
];


const Skills = () => {
    return (
        <div id='skills' className='max-w-7xl mx-auto lg:min-h-screen flex justify-center items-center p-4 mt-16 lg:mt-0'>
            <div className='flex flex-col space-y-4 w-full'>
                <h1 className='text-4xl text-center lg:text-5xl text-secondary'>My Skills</h1>
                <p className="text-gray-200 text-lg max-w-lg mx-auto text-center mt-6">
                    Here are some of the technologies and tools I work with to build modern, responsive, and efficient web applications.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full'>
                    {
                        skills?.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;