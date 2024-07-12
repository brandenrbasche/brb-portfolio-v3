import React from 'react';
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data";

const Experience = () => {
    return (
        <section className='w-[75vw] text-[#001ecb]'>
            <p>experience</p>
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
