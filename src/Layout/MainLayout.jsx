import React from 'react';
import Navbar from '../Header/Navbar';
import Hero from '../Header/Hero';
import AboutMe from '../About/AboutMe';
import Skills from '../components/Skills';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default MainLayout;