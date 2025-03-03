'use client';

import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='flex items-center justify-between text-sm bg-[#f4f1ea] h-full mt-10'>
            <div>
                <p>Built by me, BRB. <span>(Branden Robert Basche)</span></p>
            </div>
            <div>
                <button onClick={scrollToTop}><ArrowUp /></button>
            </div>
        </div>
    );
};

const ArrowUp = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor"
                  d="m5 18.64l5.763-5.763a1.738 1.738 0 0 1 2.474 0L19 18.64m-14-7l5.763-5.763a1.739 1.739 0 0 1 2.474 0L19 11.64"/>
        </svg>
    )
}

export default Footer;
