import React from 'react';
import BigButton from "@/components/ui/BigButton";

const Contact = () => {
    return (
        <section className='h-[50vh]'>
            <div className='flex flex-col justify-between h-full'>
                <p className='uppercase'>Reach Out</p>
                <BigButton text={'Say hi'} link={'mailto:brandenbasche@gmail.com'} />
            </div>
            {/*<div>*/}
            {/*    <BigButton text={'Say hi'} link={'mailto:brandenbasche@gmail.com'} />*/}
            {/*</div>*/}
        </section>
    );
};

export default Contact;
