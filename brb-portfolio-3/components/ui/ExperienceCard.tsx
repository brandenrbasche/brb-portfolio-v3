'use client';

import React, { useState } from 'react';
import { spaceGrotesk } from "@/data/fonts";
import {motion, useAnimation} from 'framer-motion';
import {twMerge} from "tailwind-merge";
import ExperienceModal from "@/components/ui/ExperienceModal";

type Props = {
    company: string;
    jobTitle: string;
    jobDescription?: string;
    dates: string;
    location: string;
    skills?: string[];
    bullets?: string[];
    number: number;
}

const ExperienceCard = ({ company, jobTitle, jobDescription, dates, location, skills, bullets, number }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        console.log('clicked', isOpen)
        setIsOpen(!isOpen);
    }

    return (
        <>
            <motion.button
                whileHover={{
                    borderRadius: '2rem',
                    color: 'white',
                    backgroundColor: '#001ecb'
                }}
                layoutId={`bg-modal-${number}`}
                onClick={handleClick}
                className='w-full border-2 p-7 mb-3 border-[#001ecb] text-[#001ecb] group'>
                <div className='flex items-center mb-5'>
                    <motion.h2
                        layoutId={`number-${number}`}
                        className='font-extralight text-5xl mr-6'>0{number + 1}</motion.h2>
                    <div className='flex flex-wrap items-end space-y-2'>
                        <motion.h2
                            layoutId={`company-title-${number}`}
                            layout
                            className={twMerge('font-black text-5xl tracking-tighter text-left mr-5', spaceGrotesk.className)}
                        >
                            {company}
                        </motion.h2>
                        <motion.h2
                            layoutId={`job-title-${number}`}
                            className='font-extralight text-4xl inline-block text-left tracking-tighter'
                        >
                            {jobTitle}
                        </motion.h2>
                    </div>
                </div>
                <div className='block'>
                    {skills && (
                        <div>
                            <ul
                                className='flex flex-wrap content-start text-nowrap'>
                            {skills.map((skill, i) => (
                                    <li
                                        className='border-2 border-[#001ecb] group-hover:border-white rounded-full px-3 py-1 mr-3 mb-2'
                                        key={i}
                                    >
                                        <p className='font-extralight text-sm italic'>{skill}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </motion.button>
            <ExperienceModal company={company} jobTitle={jobTitle} jobDescription={jobDescription} dates={dates} location={location} number={number} isOpen={isOpen} handleClick={handleClick} bullets={bullets} />
        </>
    )
}

export default ExperienceCard;
