import React from 'react';
import aboutImg from '../assets/selimAbout.png';
import { IoArrowForwardOutline } from 'react-icons/io5';

const AboutMe = () => {
    return (
        <div id='aboutSection' className='max-w-7xl mt-16 lg:mt-0 lg:min-h-screen mx-auto flex p-4 flex-col-reverse lg:flex-row gap-8 justify-bet items-center'>
            <section>
                <img className='w-[900px] h-[600px] rounded-tl-[100px] rounded-br-[100px] px-16 border' src={aboutImg} alt="" />
            </section>
            {/* <section>
                <h1 className='text-secondary text-4xl'>About Me</h1>
                <h2></h2>
            </section> */}
            <section id="about" className="max-w-4xl py-12">
                <h2 className="text-3xl font-bold text-center mb-6 text-secondary">About Me</h2>
                <h1 className='text text-4xl font-semibold py-6 leading-relaxed'>
                    Passionate Frontend <br />
                    <span className='text-primary'> Web Developer</span>
                </h1>

                <p className="text-lg text-gray-300 text-justify leading-relaxed mb-4">
                    I'm a self-taught web developer passionate about building modern, responsive, and user-friendly websites.
                    I specialize in technologies like React.js, Node.js, Tailwind CSS, and MongoDB, and enjoy solving problems with code.
                </p>
                <p className="text-lg text-justify leading-relaxed mb-4">
                    Although I come from a non-CSE background, I’ve built a strong foundation in programming through consistent learning and practice.
                    I have completed several projects where I focused on clean UI and performance.
                </p>
                <p className="text-lg text-justify leading-relaxed">
                    My goal is to become a full-stack developer and work with advanced technologies like AI and Machine Learning in the future.
                    I'm currently open to junior developer or internship opportunities.
                </p>
                <button className='flex items-center gap-1 btn btn-primary text-base-100 my-4'><p>View My Projects </p><IoArrowForwardOutline /></button>
            </section>
            
        </div>
    );
};

export default AboutMe;