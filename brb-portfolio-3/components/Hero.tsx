import React from 'react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import TechStack from "@/components/TechStack";
import Container from "@/components/ui/Container";

const Hero = () => {
    return (
        <section className='h-[70vh] flex flex-col justify-between'>
            <div className='flex justify-between'>
                <Link href={'https://www.linkedin.com/in/brandenbasche/'}><h3 className='uppercase'>Branden<br/>Basche</h3></Link>
                <p>Brooklyn,<br/>New York</p>
                <p>Full-Stack Engineer</p>
            </div>
            <div className='text-5xl w-[85vw]'>
                {/*<h1 className='text-9xl font-black'>BRB.<br/>CODES</h1>*/}
                <h1 className='font-black mb-2'>Hi, I'm Branden</h1>
                <p className={twMerge('text-3xl font-light')}>I bring full-stack development, end-to-end testing, and
                    UX/UI
                    expertise to
                    the table to craft beautiful, user-friendly, and accessible web experiences.</p>
            </div>
        </section>
    );
};

export default Hero;
