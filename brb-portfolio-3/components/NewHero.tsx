import React from 'react';
import HorizontalScrollText from "@/components/ui/HorizontalScrollText";
import { spaceGrotesk } from "@/data/fonts";
import {twMerge} from "tailwind-merge";

const NewHero = () => {
    return (
        <section className={twMerge('overflow-hidden w-screen flex flex-col items-center justify-between', spaceGrotesk.className)}>
            <div className='h-[80vh] flex items-center justify-center'>
                <h1 className='text-[7.5vw] text-center'>Hi, I'm Branden Basche</h1>
            </div>
            <div className='overflow-hidden'>
                <HorizontalScrollText />
            </div>
            <div className='h-[25vh]' />
        </section>
    );
};

export default NewHero;
