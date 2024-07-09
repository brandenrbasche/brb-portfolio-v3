import React from 'react';

type Props = {
    words: string[];
}

const HorizontalText = ({ words }: Props) => {
    return (
        <div
            className='h-full w-full flex infline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {words.map((word, i) => (
                    <li key={i} className='mx-8'>
                        <p className='font-black uppercase text-nowrap text-8xl'>{word}</p>
                    </li>
                ))}
            </ul>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {words.map((word, i) => (
                    <li key={i}>
                        <p className='font-black uppercase text-nowrap text-8xl'>{word}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalText;
