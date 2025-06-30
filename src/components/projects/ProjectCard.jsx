import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className='flex flex-col lg:flex-row items-start-2 py-6 gap-6 shadow-lg shadow-black'>
            <section className='w-full lg:w-3/5 h-[400px]'>
                <img className=' rounded-xl' src={project.image} alt="" />
            </section>
            <section className='w-full lg:w-2/5 space-y-3'>
                <h1 className='text-4xl text-primary font-semibold'>{project.title}</h1>
                <p className='text-lg text-gray-200'>{project.shortDescription}</p>
                <h2 className='text-2xl font-semibold text-secondary'>Features: </h2>
                <ul>
                    {
                        project.Features.map((feature, index) => <li
                            key={index} className=''
                        >{feature}</li>)
                    }
                </ul>
                <h2 className='text-2xl font-semibold text-secondary'>Technology: </h2>
                <ul className='flex gap-4 items-center'>
                    {
                        project.technologies.map((tech, index) => <li
                            key={index} className='text-4xl'
                        >{tech.icon}</li>)
                    }
                </ul>

                <div className='flex gap-4 items-center'>
                    <a className='btn btn-sm btn-primary text-base-100 px-4' target='_blank' href={project.liveLink}>Live</a>
                    <a className='btn btn-sm btn-primary text-base-100 px-4' target='_blank' href={project.codeLink}>GitHub</a>
                    <a className='btn btn-sm btn-primary text-base-100 px-4' target='_blank' href={project.liveLink}>Details</a>
                </div>

            </section>
        </div>
    );
};

export default ProjectCard;