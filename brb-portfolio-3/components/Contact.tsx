import React from 'react';
import BigButton from "@/components/ui/BigButton";
import {ScreenFitText} from "@/components/ui/ScreenFitText";

const Contact = () => {
    return (
        <>
            {/*<div className='w-screen top-0'>*/}
            {/*    <ScreenFitText text={'Reach out'} />*/}
            {/*</div>*/}
            <section className='h-[50vh]'>
                <h1>Reach out</h1>
                {/*<div className='absolute flex flex-col justify-between h-full w-screen'>*/}
                {/*    <BigButton text={'Say hi'} link={'mailto:brandenbasche@gmail.com'} />*/}
                {/*</div>*/}
            </section>
        </>
    );
};

export default Contact;
