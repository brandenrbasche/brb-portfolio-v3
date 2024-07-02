import React from 'react';
import {twMerge} from "tailwind-merge";

type Props = {
    words: string[];
    animationSpeed: string;
}

const HorizontalText = ({ words, animationSpeed }: Props) => {
    return (
        <div
            className='w-full flex infline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            <ul className={twMerge('flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll', animationSpeed)}>
                {words.map((word, i) => (
                    <li key={i}>
                        <p className='uppercase text-nowrap lg:text-6xl md:text-5xl sm:text-4xl'>{word}</p>
                    </li>
                ))}
            </ul>
            <ul className={twMerge('flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll', animationSpeed)}>
                {words.map((word, i) => (
                    <li key={i}>
                        <p className='uppercase text-nowrap lg:text-6xl md:text-5xl sm:text-4xl'>{word}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalText;
