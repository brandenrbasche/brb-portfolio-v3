import React from 'react';
import FloatingText from "@/components/ui/FloatingText";

const Hero = () => {
    return (
        <>
            <FloatingText text={'Full-Stack Engineer'} />
            <div className='h-screen flex items-end pb-16 px-6'>
                <div className='text-sm'>
                    <p className='indent-3 mb-6'>Hi, I'm Branden. A full-stack engineer based in New York.</p>
                    <p className='indent-3'>I bridge the gap between design and development. I bring full-stack expertise - from end-to-end testing to SEO - to craft beautiful, user-friendly, and accessible web experiences.</p>
                </div>
            </div>
        </>
    );
};

export default Hero;
