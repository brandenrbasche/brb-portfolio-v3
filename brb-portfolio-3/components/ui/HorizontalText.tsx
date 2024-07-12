import React from 'react';

type Props = {
    words: string[];
}

const HorizontalText = ({ words }: Props) => {
    return (
        <div className='h-full w-full flex'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {words.map((word, i) => (
                    <li key={i} className='mx-8'>
                        <p className='font-extralight uppercase text-nowrap text-xl'>{word}</p>
                    </li>
                ))}
            </ul>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {words.map((word, i) => (
                    <li key={i}>
                        <p className='font-extralight uppercase text-nowrap text-xl'>{word}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalText;
