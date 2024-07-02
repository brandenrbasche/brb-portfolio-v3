import React from 'react';
import ExperienceCard from "@/components/ui/ExperienceCard";

const Experience = () => {
    return (
        <div>
            <ExperienceCard company={'General Motors'} jobTitle={'Full-Stack Engineer'} jobDescription={'Lorem ipsum.'} />
        </div>
        // <div className='w-full h-96 border-black border-2 rounded-lg flex justify-between'>
        //     <div className='w-3/4 border-r-2 border-black p-2'>
        //         {/*LEFT:*/}
        //         {/*top: company and job title*/}
        //         {/*bottom: job description*/}
        //         <h1>{}</h1>
        //
        //     </div>
        //     <div className='w-1/4 p-2'>
        //         {/*RIGHT:*/}
        //         <button>Learn More</button>
        //         {/*    learn more button*/}
        //     </div>
        //
        // </div>
    );
};

export default Experience;
