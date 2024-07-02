import React from 'react';
import HorizontalText from "@/components/ui/HorizontalText";

const TechStack = () => {
    const frontEndTools: string[] = ['React.js', 'Redux', 'Next.js', 'Svelte', 'Angular', 'HTML/CSS', 'TypeScript', 'Tailwind.css', 'Framer Motion'];
    const backEndTools: string[] = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Java', 'Docker', 'AWS', 'Azure', 'Git'];

    return (
        <section className='flex flex-col text-white h-[50vh] pt-4'>
            <div>
                {/*front end tools*/}
                <p>TECH STACK</p>
                <HorizontalText words={frontEndTools} animationSpeed={''}/>
                {/*back end tools*/}
                <HorizontalText words={backEndTools} animationSpeed={''}/>
            </div>
        </section>
    );
};

export default TechStack;
