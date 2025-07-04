import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutSection">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>

    return (
        <div className="navbar bg-[#1e293b] shadow-sm fixed top-0 z-20 px-4 lg:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow navLinks">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-xl lg:text-2xl text-primary">Nazmul.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 navLinks">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='/Md_Nazmul_Haque_Resume.pdf' download target='_blank' className="btn btn-primary text-base-100">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;