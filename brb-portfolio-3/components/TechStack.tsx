import React from 'react';
import HorizontalText from "@/components/ui/HorizontalText";

const TechStack = () => {
    const frontEndTools: string[] = ['React.js', 'Redux', 'Next.js', 'Svelte', 'Angular', 'HTML/CSS', 'TypeScript', 'Tailwind.css', 'Framer Motion'];
    const backEndTools: string[] = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Java', 'Docker', 'AWS', 'Azure', 'Git'];

    return (
        <section className='text-white pt-4 h-[25vh] flex items-center overflow-x-hidden'>
            {/*<p>TECH STACK</p>*/}
            <div>
                {/*front end tools*/}
                <HorizontalText words={frontEndTools}/>
                {/*back end tools*/}
                <HorizontalText words={backEndTools}/>
            </div>
        </section>
    );
};

export default TechStack;
