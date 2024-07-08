'use client';

import React from 'react';

type Props = {
    text: string;
}

const FloatingText = ({ text }: Props) => {
    return (
        <div>
            <h1 className='font-black fixed transform -translate-x-1/2 w-screen text-4xl flex justify-center mt-10 whitespace-nowrap gap-x-6'>
                {text}
            </h1>
        </div>
    );
};

export default FloatingText;
