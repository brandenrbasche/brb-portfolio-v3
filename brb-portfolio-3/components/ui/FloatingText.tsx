'use client';

import React from 'react';
import { ibmPlexMono, libreBaskerville, dmSans } from "@/data/fonts";
import {twMerge} from "tailwind-merge";

type Props = {
    text: string;
}

const FloatingText = ({ text }: Props) => {
    return (
        <div id='infinite-text flex'>
            <h1 className='transform -translate-x-1/2 w-screen text-7xl flex justify-center mt-10 animate-infinite-scroll whitespace-nowrap gap-x-6'>
                <span className='font-black'>{'Full-Stack Engineer'}</span>
                <span className={twMerge(ibmPlexMono.className, 'uppercase')}>{'UI-Obsessed'}</span>
                <span>{'Locally infamous' + ' '}</span>
                <span className={twMerge(dmSans.className, 'uppercase')}>{'Hyper Self-reflective'}</span>
                <span className={twMerge(ibmPlexMono.className, 'uppercase')}>{'Mysterious'}</span>
            </h1>
            {/*<h1 className={twMerge(inconsolata.className, 'transform uppercase -translate-x-1/2 w-screen text-7xl flex justify-center mt-10 animate-infinite-scroll whitespace-nowrap')}>{text}</h1>*/}
        </div>
    );
};

export default FloatingText;
