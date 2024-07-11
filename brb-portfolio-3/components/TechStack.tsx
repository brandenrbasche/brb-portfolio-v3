import React from 'react';
import HorizontalText from "@/components/ui/HorizontalText";

const TechStack = () => {
    const frontEndTools: string[] = ['React.js', 'Redux', 'Next.js', 'Svelte', 'Angular', 'HTML/CSS', 'TypeScript', 'Tailwind.css', 'Framer Motion'];
    const backEndTools: string[] = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Java', 'Docker', 'AWS', 'Azure', 'Git'];

    return (
        <section className='bg-black w-screen text-white p-4 h-screen'>
            {/*<p>TECH STACK</p>*/}
            <div className='flex flex-col justify-end relative'>
                {/*front end tools*/}
                <HorizontalText words={frontEndTools}/>
                {/*back end tools*/}
                <HorizontalText words={backEndTools}/>
            </div>
        </section>
    );
};

export default TechStack;
