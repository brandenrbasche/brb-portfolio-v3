import React from 'react';
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data/index";
import DoubleExperienceCard from "@/components/ui/DoubleExperienceCard";

const Experience = () => {
    return (
        <section className='max-w-screen-lg text-white'>
            {/*<DoubleExperienceCard  />*/}
            {experienceData.map((item, i) => (
                <ExperienceCard company={item.company} jobTitle={item.jobTitle} dates={item.dates} jobDescription={item.jobDescription} location={item.location} />
            ))}
            {/*<ExperienceCard company={'General Motors'} jobTitle={'Full-Stack Engineer'} jobDescription={'Lorem ipsum.'} />*/}
        </section>
    );
};

export default Experience;
