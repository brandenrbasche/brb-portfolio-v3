import React from 'react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import HeroText from "@/components/ui/HeroText";

const Hero = () => {
    return (
        <section className='h-[70vh] flex flex-col justify-between'>
            <div className='flex justify-between'>
                <Link href={'https://www.linkedin.com/in/brandenbasche/'}><h3 className='uppercase'>Branden<br/>Basche</h3></Link>
                <p>Brooklyn,<br/>New York</p>
                <p>Full-Stack Engineer</p>
            </div>
            <HeroText />
            <div className='text-5xl w-[85vw]'>
                <p className={twMerge('text-xl font-light')}>I bring full-stack development, end-to-end testing, and
                    UX/UI
                    expertise to
                    the table to craft beautiful, user-friendly, and accessible web experiences.</p>
            </div>
        </section>
    );
};


export default Hero;
