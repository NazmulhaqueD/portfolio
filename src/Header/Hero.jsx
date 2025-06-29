import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/Nazmul.png';

const Hero = () => {
    return (
        <div className='max-w-7xl my-16 lg:my-0 mx-auto min-h-[93vh] lg:flex justify-between gap-16 lg:gap-8 items-center p-4'>
            <section className='space-y-4 '>
                <h1 className='text-secondary text-4xl md:text-6xl'>Hi! I'm Nazmul Haque</h1>
                <span className='text-3xl font-semibold text-primary'>
                    <Typewriter
                        words={['Web Developer', 'Frontend Developer', 'React.js Developer', 'MERN Stack Developer!', 'JavaScript Enthusiast']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </span>
                <p className='max-w-2xl pt-6'>I'm a self-taught full stack web developer skilled in React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. I enjoy building fast, responsive, and scalable web applications with a strong focus on clean design and smooth user experience.</p>
                <article className='flex items-center gap-6'>
                    <li className='list-none hover:scale-105 transition duration-300 hover:bg-primary p-2 rounded-xl'><a href="https://github.com/NazmulhaqueD" target='_blank'><FaGithub size={36}/></a></li>
                    <li className='list-none hover:scale-105 transition duration-300 hover:bg-primary p-2 rounded-xl'><a href=""><FaLinkedin size={36}/></a></li>
                    <li className='list-none hover:scale-105 transition duration-300 hover:bg-primary p-2 rounded-xl'><a href=""><FaWhatsapp size={36}/></a></li>
                    <li className='list-none hover:scale-105 transition duration-300 hover:bg-primary p-2 rounded-xl'><a href=""><FaFacebookF size={36}/></a></li>
                </article>
                <article className='flex gap-6'>
                    <button className='btn btn-primary text-base-100'>Hire Me</button>
                    <button className='btn btn-outline hover:btn-primary'>Download CV</button>
                </article>
            </section>
            <section className='flex items-center justify-center'>
                <div>
                    <img className='w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border mt-16 lg:mt-0' src={profile} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Hero;