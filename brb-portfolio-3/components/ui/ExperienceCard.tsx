'use client';

import React, { useState } from 'react';
import Reveal from './Reveal';
import Container from './Container';
import {motion, useAnimation} from 'framer-motion';

type Props = {
    company: string;
    jobTitle: string;
    jobDescription: string;
    dates: string;
    location: string;
    skills?: string[]
}

const ExperienceCard = ({ company, jobTitle, jobDescription, dates, location, skills }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();

    const handleClick = () => {
        console.log('clicked!');
        setIsOpen(!isOpen);
        !isOpen ? controls.start('expanded') : controls.start('initial');
    }

    return (
        <motion.div
            onClick={handleClick}
            layout='preserve-aspect'
            transition={{
                // layout: {
                //     type: 'inertia'
                // }
            }}
            className='w-screen relative flex items-center justify-center group transition ease-in cursor-pointer py-6'
        >
            <Container className='flex items-center justify-center sm:w-full'>
                <div className='w-[10vw] flex items-center justify-start'>
                    <Reveal>
                        <motion.p
                            animate={controls}
                            variants={{
                                initial: { rotate: '0deg' },
                                expanded: { rotate: '45deg' }
                            }}
                            // layout='position'
                            className='text-white/15 group-hover:text-white/50 text-6xl font-extralight text-left m-0 p-0'
                        >
                            +
                        </motion.p>
                    </Reveal>
                </div>
                <motion.div layout className='w-full space-y-3'>
                    {/* COMPANY NAME & DATE */}
                    <motion.div layout className='flex items-center justify-between'>
                        <Reveal><h1 className='text-2xl font-bold'>{company}</h1></Reveal>
                        <Reveal><h2 className='text-xl'>{dates}</h2></Reveal>
                    </motion.div>
                    {/* JOB TITLE & LOCATION */}
                    <motion.div layout className='flex items-center justify-between'>
                        {/*bg-gradient-to-r from-red-500 to-orange-500*/}
                        <Reveal><h2
                            className='font-bold text-xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>{jobTitle}</h2>
                        </Reveal>
                        <Reveal><h3 className='text-xl'>{location}</h3></Reveal>
                    </motion.div>
                    {/* JOB DESCRIPTION */}
                    {isOpen && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            // transition={{duration: 0.75, ease: "easeOut"}}
                            layout='size'
                        >
                            <p className='text-gray-300 font-extralight text-sm'>{jobDescription}</p>
                        </motion.div>
                    )}
                    {skills && (
                        <Reveal>
                            <motion.div layout='position' className='my-4'>
                                <ul className='flex flex-wrap content-start justify-start text-nowrap'>
                                    {skills.map((skill, i) => (
                                        <li
                                            className='bg-gradient-to-r from-white/15 to-white/20 rounded-full px-3 py-1 my-2 mr-3'
                                            key={i}
                                        >
                                            <p className='font-extralight text-sm text-gray-400'>{skill}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </Reveal>
                    )}
                </motion.div>
            </Container>
        </motion.div>
    );
};

export default ExperienceCard;
