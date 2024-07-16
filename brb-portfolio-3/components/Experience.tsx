import React from 'react';
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data";
import Reveal from "@/components/ui/Reveal";

const Experience = () => {
    return (
        <section className='w-[75vw] mb-36'>
            <Reveal revealColor='#001ecb'><p>Experience</p></Reveal>
            {experienceData.map((item, i) => (
                <ExperienceCard
                    key={i}
                    number={i}
                    company={item.company}
                    jobTitle={item.jobTitle}
                    dates={item.dates}
                    jobDescription={item.jobDescription}
                    location={item.location}
                    skills={item.skills}
                    bullets={item.bullets}
                />
            ))}
        </section>
    );
};

export default Experience;
