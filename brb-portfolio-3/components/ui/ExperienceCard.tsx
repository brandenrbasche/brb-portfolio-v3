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
        <>
            <div className='w-full min-h-[35vh] my-14 flex flex-col space-y-3'>
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
                        <div className='mt-4'>
                            <ul className='space-x-4 inline-flex items-start justify-start text-nowrap'>
                                {skills.map((skill, i) => (
                                    <li
                                        className='bg-white/25 rounded-full px-3 py-1'
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
        </>
    );
};

export default ExperienceCard;
