import React from 'react';
import {twMerge} from "tailwind-merge";
import {spaceGrotesk} from "@/data/fonts";
import { motion } from 'framer-motion';

type Props = {
    company: string;
    jobTitle: string;
    jobDescription?: string;
    dates: string;
    location: string;
    skills?: string[];
    bullets?: string[];
    number: number;
    isOpen: boolean;
    handleClick: () => void;
}

const ExperienceModal = ({ isOpen, handleClick, company, jobTitle, jobDescription, dates, location, skills, bullets, number }: Props) => {
    if (!isOpen) return <></>;
    return (
        <motion.div
            layout
            // layoutId={`bg-modal-${number}`}
            transition={{
                duration: .4,
                ease: 'easeIn'
            }}
            onClick={() => handleClick()}
            className='fixed inset-0 bg-[#001ecb] z-50 cursor-pointer overflow-hidden text-white flex items-center justify-between'
        >
            <motion.div
                layoutId={`bg-modal-${number}`}
                className='w-full max-w-screen-md mx-auto my-8 px-8'>
                <div className='flex justify-between mb-3'>
                    <div>
                        <motion.h2
                            layoutId={`number-${number}`}
                            layout='position'
                            className='inline-block font-extralight text-5xl mr-6'
                        >
                            0{number + 1}
                        </motion.h2>
                        <motion.h2
                            layout
                            layoutId={`company-title-${number}`}
                            className={twMerge('inline-block font-black text-5xl tracking-tighter text-left mr-5', spaceGrotesk.className)}
                        >
                            {company}
                        </motion.h2>
                    </div>
                    {/*todo: replace with svg icon*/}
                    <h2>X</h2>
                </div>
                <motion.h2
                    layout
                    layoutId={`job-title-${number}`}
                    className='font-extralight text-4xl inline-block text-left tracking-tighter mb-2'
                >
                    {jobTitle}
                </motion.h2>
                <hr className='mb-6' />
                {bullets && (
                <motion.div
                    transition={{
                        delay: 0.4
                    }}
                >
                    <ul className='list-disc font-thin text-white'>
                        {bullets?.map((bullet, i) => (
                            <li className='leading-5 mb-3 text-sm' key={i}>{bullet}</li>
                        ))}
                    </ul>
                </motion.div>
                )}
                {skills && (
                    <motion.div
                        className='block'
                        layout
                        layoutId={`skills-${number}`}
                    >
                        <motion.ul
                            layout
                            className='flex flex-wrap content-start text-nowrap text-white'>
                            {skills.map((skill, i) => (
                                <motion.li
                                    className='border-2 border-white rounded-full px-3 py-1 mr-3 mb-2'
                                    key={i}
                                >
                                    <p className='font-extralight text-sm italic'>{skill}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ExperienceModal;
