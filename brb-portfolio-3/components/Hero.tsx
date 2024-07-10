import React from 'react';
import Link from "next/link";
import ContainerFitText from "@/components/ui/ContainerFitText";
import SqueakyBallAnimation from "@/components/ui/SqueakyBallAnimation";

const Hero = () => {
    return (
        <section className='h-[80vh] flex flex-col justify-between'>
            <div className='flex justify-between'>
                <Link href={'https://www.linkedin.com/in/brandenbasche/'}><h3 className='uppercase'>Branden<br/>Basche</h3></Link>
                <p>Brooklyn,<br/>New York</p>
                <p>Full-Stack Engineer</p>
            </div>
            <div className='grid grid-cols-3 justify-between w-full h-full'>
                <ContainerFitText text={'BRB'} />
                <SqueakyBallAnimation />
                <ContainerFitText text={'CODES'} />
            </div>
            <div className='mb-16 text-5xl w-[85vw]'>
                {/*<p className='text-4xl font-black mb-8'>Hi, I&#39;m Branden.</p>*/}
                <p className='text-3xl'>I bring full-stack development, end-to-end testing, and UX/UI expertise to
                    the table to craft beautiful, user-friendly, and accessible web experiences.</p>
            </div>
        </section>
    );
};

export default Hero;
