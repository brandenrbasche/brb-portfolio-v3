import React from 'react';
import Reveal from './Reveal';

type Props = {
    company: string;
    jobTitle: string;
    jobDescription: string;
    dates: string;
    location: string;
    skills?: string[]
}

const ExperienceCard = ({ company, jobTitle, jobDescription, dates, location, skills }: Props) => {
    return (
        <div>
            <div className='w-full md:min-h-[65vh] sm:min-h-screen  flex flex-col space-y-3'>
                {/* COMPANY NAME & DATE */}
                <div className='flex items-center justify-between'>
                    <Reveal><h1 className='text-3xl font-bold'>{company}</h1></Reveal>
                    <Reveal><h2 className='text-xl'>{dates}</h2></Reveal>
                </div>
                {/* JOB TITLE & LOCATION */}
                <div className='flex items-center justify-between'>
                    <Reveal><h2 className='font-bold text-xl text-white/50'>{jobTitle}</h2></Reveal>
                    <Reveal><h3 className='text-xl'>{location}</h3></Reveal>
                </div>
                {/* JOB DESCRIPTION */}
                <div>
                    <Reveal><p>{jobDescription}</p></Reveal>
                </div>
                {/* TODO: skills tags */}
                {skills && (
                    <Reveal>
                        <div className='my-4'>
                            <ul className='flex flex-wrap content-start justify-start text-nowrap'>
                                {skills.map((skill, i) => (
                                    <li
                                        className='bg-white/25 rounded-full px-3 py-1 my-2 mr-3'
                                        key={i}
                                    >
                                        <p>{skill}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;
