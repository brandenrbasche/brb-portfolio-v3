'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import {useScroll, motion, MotionValue, useTransform} from "framer-motion";
import { spaceGrotesk } from "@/data/fonts";
import {twMerge} from "tailwind-merge";
import Headshot from '@/public/images/headshot.jpeg';

const HorizontalScrollText = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    return (
        <section className={twMerge('overflow-hidden', spaceGrotesk.className)}>
            <div className='w-screen' />
            <div ref={container}>
                <Slide src={Headshot} leftOffset={'0%'} progress={scrollYProgress} scrollDirection='left' text="Full-Stack Engineer" />
                <Slide src={Headshot} leftOffset={"-20%"} progress={scrollYProgress} scrollDirection='right' text="Full-Stack Engineer" />
                <Slide src={Headshot} leftOffset={"20%"} progress={scrollYProgress} scrollDirection='left' text="Full-Stack Engineer" />
            </div>
        </section>
    );
};

type SlideProps = {
    src?: any;
    scrollDirection: string;
    leftOffset: any;
    progress: MotionValue<number>;
    text: string;
}

const Slide = ({ src, scrollDirection, leftOffset, progress, text }: SlideProps) => {
    const direction: 1 | -1 = scrollDirection == 'left' ? -1 : 1;
    // @ts-ignore
    const translateX = useTransform(progress, [0, 1], [150 * direction, -150 * direction]);

    return (
        <motion.div
            className='relative flex whitespace-nowrap mb-5'
            style={{
                x: translateX,
                left: leftOffset,
            }}
        >
            <Phrase src={src} text={text} />
            <Phrase src={src} text={text} />
            <Phrase src={src} text={text} />
        </motion.div>
    )
}

type phraseProps = {
    src?: string;
    text: string;
}

const Phrase = ({ src, text }: phraseProps) => {
    return (
        <div className='flex gap-5 items-center justify-center'>
            <h1 className='text-[7.5vw] font-medium text-black'>{text}</h1>
            {src && (
                <span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden mr-5'>
                <Image src={src} alt='hero image' style={{objectFit: 'cover'}} sizes={'fill'} fill/>
            </span>
            )}
        </div>
    )
}

export default HorizontalScrollText;
