'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroText = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const item = {
        hidden: { opacity: 0, y: -1 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{
                when: "beforeChildren",
                staggerChildren: 0.1,
                ease: 'linear',
                stiffness: 100
            }}
            className='flex flex-col justify-center leading-none'
        >
            <motion.h1 variants={item} className='text-lg text-black/5 font-thin'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-xl text-black/10 font-extralight'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-2xl text-black/15 font-light'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-3xl text-black/20 font-normal'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-4xl text-black/25 font-medium'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-5xl text-black/30 font-bold'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-6xl text-black/50 font-extrabold'>BRB.CODES</motion.h1>
            <motion.h1 variants={item} className='text-7xl text-black font-black'>BRB.CODES</motion.h1>
        </motion.div>
    );
};

export default HeroText;
