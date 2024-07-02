import React from 'react';
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data/index";

const Experience = () => {
    return (
        <section className='text-white'>
            {experienceData.map((item, i) => (
                <ExperienceCard company={item.company} jobTitle={item.jobTitle} jobDescription={item.jobDescription} />
            ))}
            {/*<ExperienceCard company={'General Motors'} jobTitle={'Full-Stack Engineer'} jobDescription={'Lorem ipsum.'} />*/}
        </section>
    );
};

export default Experience;
