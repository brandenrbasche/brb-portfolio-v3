'use client';
import React from 'react';
import { spaceGrotesk } from "@/data/fonts";
import {twMerge} from "tailwind-merge";

const HeroText = () => {

    return (
        <div>
            <h1 className='text-7xl text-black font-extralight text-center tracking-tighter transform -translate-y-7'>
                Hi my name is <span className={twMerge(spaceGrotesk.className, 'font-black text-7xl inline-block')}>Branden Basche</span>
            </h1>
        </div>
    );
};

export default HeroText;
