import React from 'react';
import Link from "next/link";

type Props = {
    text: string;
    link: string;
}

const BigButton = ({ text, link }: Props) => {
    return (
        <div className='w-screen relative flex items-center justify-center pb-6'>
            <Link
                href={link}
                className='w-3/4 rounded-full bg-black text-white flex items-center justify-center p-3 transition hover:bg-white hover:border-[3px] hover:text-black'>
                <h3 className='uppercase'>{text}</h3>
            </Link>
        </div>
    );
};

export default BigButton;
