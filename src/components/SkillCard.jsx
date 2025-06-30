import React from 'react';

const SkillCard = ({skill}) => {
    return (
        <div className='bg-secondary-content py-6 flex gap-4 flex-col justify-center items-center rounded-xl hover:shadow-[0_0_8px] shadow-primary transition-all duration-300 hover:scale-105'>
            <p>{skill.icon}</p>
            <p className='text-xl'>{skill.name}</p>
            {/* <p>Learned: {skill.learned}</p>
            <p>Proficiency: {skill.proficiency}</p> */}
        </div>
    );
};

export default SkillCard;