import React from 'react';
import Link from "next/link";

const Hero = () => {
    return (
        <section className='h-[80vh] flex flex-col justify-between'>
            <div className='flex justify-between'>
                <Link href={'https://www.linkedin.com/in/brandenbasche/'}><h3 className='uppercase'>Branden<br/>Basche</h3></Link>
                <p>Brooklyn,<br/>New York</p>
                <p>Full-Stack Engineer</p>
            </div>
            {/*<div className='origin-left'>*/}
            {/*    <h1 className={twMerge(jetBrainsMono.className, 'origin-left uppercase text-7xl animate-heading-one')}>Hi,<br />I'm Branden</h1>*/}
            {/*</div>*/}
            <div className='mb-16 text-5xl w-[85vw]'>
                <p className='text-4xl font-black mb-8'>Hi, I&#39;m Branden.</p>
                <p className='text-3xl'>I bring full-stack development, end-to-end testing, and UX/UI expertise to
                    the table to craft beautiful, user-friendly, and accessible web experiences.</p>
            </div>
        </section>
    );
};

export default Hero;
