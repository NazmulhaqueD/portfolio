import React from 'react';
import Navbar from '../Header/Navbar';
import Hero from '../Header/Hero';
import AboutMe from '../About/AboutMe';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
        </div>
    );
};

export default MainLayout;