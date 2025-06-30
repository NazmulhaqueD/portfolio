import React from 'react';
import Navbar from '../Header/Navbar';
import Hero from '../Header/Hero';
import AboutMe from '../About/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default MainLayout;