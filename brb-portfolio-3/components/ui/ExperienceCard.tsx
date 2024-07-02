import React from 'react';

type Props = {
    company: string;
    jobTitle: string;
    jobDescription: string;
}

const ExperienceCard = ({ company, jobTitle, jobDescription }: Props) => {
    return (
        <div className='w-full h-80 border-black border-2 rounded-lg flex justify-between'>
            <div className='w-3/4 border-r-2 border-black p-2 flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <h1 className='font-bold uppercase'>{company}</h1>
                    <h1 className='font-base uppercase text-right'>{jobTitle}</h1>
                </div>
                <div>
                    {jobDescription}
                </div>

            </div>
            <button className='w-1/4 p-2 flex flex-col justify-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 40">
                    <path fill="currentColor"
                          d="M36.408 26.081a.575.575 0 0 0-.271.051a.702.702 0 0 0-.427.566l-.147 7.75l-14.565-14.583L35.559 5.291l.144 7.947a.7.7 0 0 0 .702.682h.008a.69.69 0 0 0 .475-.205a.685.685 0 0 0 .201-.503l-.169-9.396a.693.693 0 0 0-.682-.677l-9.431-.171a.7.7 0 0 0-.708.681a.703.703 0 0 0 .411.646a.702.702 0 0 0 .269.06l7.279.131L19.847 18.71L5.644 4.491l7.578-.137a.698.698 0 0 0 .678-.709a.696.696 0 0 0-.707-.677l-9.43.171a.692.692 0 0 0-.683.679l-.168 9.394a.7.7 0 0 0 .682.708c.399.028.695-.301.705-.683l.138-7.647l14.259 14.275L4.432 34.143l-.133-7.383a.702.702 0 0 0-.701-.68h-.009a.694.694 0 0 0-.678.707l.168 9.395c.009.376.31.673.682.678l9.43.172h.017a.695.695 0 0 0 .691-.681a.698.698 0 0 0-.679-.706l-7.843-.141l14.47-14.484L34.32 35.509l-7.541.136a.694.694 0 0 0 .011 1.387h.017l9.429-.172a.678.678 0 0 0 .494-.221a.698.698 0 0 0 .19-.458l.168-9.393a.688.688 0 0 0-.68-.707z"/>
                </svg>
                <p className='lg:text-4xl md:text-3xl text-left'>LEARN MORE</p>
            </button>

        </div>
    );
};

export default ExperienceCard;
