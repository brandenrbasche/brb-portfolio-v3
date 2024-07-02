'use client';

import React from 'react';
import { ibmPlexMono, libreBaskerville, dmSans } from "@/data/fonts";
import {twMerge} from "tailwind-merge";

type Props = {
    text: string;
}

const FloatingText = ({ text }: Props) => {
    return (
        <div>
            <h1 className='font-black fixed transform -translate-x-1/2 w-screen text-4xl flex justify-center mt-10 whitespace-nowrap gap-x-6'>
                {text}
                {/*<span className='font-black'>{'Full-Stack Engineer'}</span>*/}
                {/*<span className={twMerge(ibmPlexMono.className, 'uppercase')}>{'UI-Obsessed'}</span>*/}
                {/*<span>{'Locally infamous' + ' '}</span>*/}
                {/*<span className={twMerge(dmSans.className, 'uppercase')}>{'Hyper Self-reflective'}</span>*/}
                {/*<span className={twMerge(ibmPlexMono.className, 'uppercase')}>{'Mysterious'}</span>*/}
            </h1>
        </div>
    );
};

export default FloatingText;
