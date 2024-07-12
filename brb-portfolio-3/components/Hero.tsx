import React from 'react';
import Link from "next/link";
import HeroText from "@/components/ui/HeroText";
import {ContainerScroll} from "@/components/ui/ContainerScroll";
import TechStack from "@/components/TechStack";
import Reveal from "@/components/ui/Reveal";

const Hero = () => {
    return (
        <section className='flex flex-col w-full'>
            <div className='flex justify-between items-start'>
                <Link href={'https://www.linkedin.com/in/brandenbasche/'}><h3 className='uppercase'>BRB.<br/>CODES</h3></Link>
                <p>Brooklyn,<br/>New York</p>
                <p>Full-Stack Engineer</p>
            </div>
            <ContainerScroll titleComponent={<HeroText/>}>
                <div className='h-full flex flex-col justify-between'>
                    <Reveal revealColor='#f3f4f6'>
                        <p className='font-light text-3xl'>I bring full-stack development, end-to-end testing, and
                            UX/UI expertise to the table to craft beautiful, user-friendly, and accessible web
                            experiences.</p>
                    </Reveal>
                    <div>
                        <Reveal revealColor='#f3f4f6'><p>My tech stack:</p></Reveal>
                        <TechStack/>
                    </div>
                </div>
            </ContainerScroll>
        </section>
    );
};


export default Hero;
