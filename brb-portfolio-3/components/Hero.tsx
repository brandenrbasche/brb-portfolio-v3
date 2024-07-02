import React from 'react';
import FloatingText from "@/components/ui/FloatingText";

const Hero = () => {
    return (
        <section className='h-screen flex flex-col justify-between'>
            <div className='flex justify-between'>
                <h3 className='uppercase'>Branden<br/>Basche</h3>
                <p>Brooklyn,<br />New York</p>
                <p>Full-Stack Engineer</p>
            </div>
            <div className='mb-16 text-5xl w-[85vw]'>
                <p className='text-4xl font-bold mb-8'>Hi, I'm Branden.</p>
                <p className='text-3xl'>I bring full-stack development, end-to-end testing, and UX/UI expertise to the table to craft beautiful, user-friendly, and accessible web experiences.</p>
            </div>
        </section>
        // <>
        //     {/*<FloatingText text={"BRANDEN ROBERT BASCHE"} />*/}
        //     <div className='h-screen flex items-end pb-16 px-6'>
        //         <div className='text-sm'>
        //             <p className='indent-3 mb-6'>Hi, I'm Branden. A full-stack engineer based in New York.</p>
        //             <p className='indent-3'>I bridge the gap between design and development. I bring full-stack expertise from end-to-end testing to SEO to craft beautiful, user-friendly, and accessible web experiences.</p>
        //         </div>
        //     </div>
        // </>
    );
};

export default Hero;
