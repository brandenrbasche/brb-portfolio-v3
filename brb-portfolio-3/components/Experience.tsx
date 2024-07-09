import React from 'react';
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data";

const Experience = () => {
    return (
        <section className='w-full text-white'>
            {/*<DoubleExperienceCard  />*/}
            {experienceData.map((item, i) => (
                <ExperienceCard
                    key={i}
                    company={item.company}
                    jobTitle={item.jobTitle}
                    dates={item.dates}
                    jobDescription={item.jobDescription}
                    location={item.location}
                    skills={item.skills}
                />
            ))}
        </section>
    );
};

export default Experience;
