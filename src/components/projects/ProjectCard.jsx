import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center py-8 gap-4 border border-black p-2 rounded-xl shadow-lg shadow-black hover:shadow-[0_0_8px] hover:shadow-black transition-all duration-300 hover:scale-[1.03]'>
            <section className='w-full lg:w-3/5'>
                <img className=' rounded-xl h-full lg:h-[400px]' src={project.image} alt="" />
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