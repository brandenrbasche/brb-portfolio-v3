import React from 'react';
import BigButton from "@/components/ui/BigButton";
import {ScreenFitText} from "@/components/ui/ScreenFitText";
import Link from "next/link";
import ContactCard from "@/components/ui/ContactCard";
import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <section className='h-[50vh] border-white border-t p-5'>
            <div className='grid grid-cols-2 justify-between h-full'>
                {/*LEFT*/}
                <div>
                    {/*TODO: replace with logo*/}
                    <h1 className='font-black'>BRB.CODES</h1>
                </div>
                {/*RIGHT*/}
                <div className='w-[1/2] h-full flex flex-col gap-y-6'>
                    <p className='text-sm font-light text-right
                    '>Have any questions? Reach out!<br /><span className='italic text-white/50'>(I reply fast)</span></p>
                    <div className='flex space-x-3 justify-end'>
                        <ContactCard website='LinkedIn' link='https://www.linkedin.com/in/brandenbasche/' icon={<LinkedInIcon />} />
                        <ContactCard website='GitHub' link='https://github.com/brandenrbasche' icon={<GitHubIcon />} />
                        <ContactCard website='Email' link='mailto:brandenbasche@gmail.com' icon={<EmailIcon />} />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

const LinkedInIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 464 480">
            <path fill="currentColor"
                  d="M462 274v170h-98V285q0-67-50-67q-37 0-51 36q-3 7-3 24v166h-99q1-269 0-297h99v42l-1 1h1v-1q32-49 89-49q51 0 82 34t31 100zM58 4Q33 4 17.5 18.5T2 55t15 37t39 15h1q25 0 40.5-15T113 55q-1-22-16-36.5T58 4zM7 444h99V147H7v297z"/>
        </svg>
    )
}

const GitHubIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 56 56">
            <path fill="currentColor" fill-rule="evenodd"
                  d="M3 28c0 11.046 7.163 20.416 17.097 23.722c1.25.23 1.707-.542 1.707-1.205c0-.593-.022-2.166-.034-4.251c-6.954 1.51-8.421-3.352-8.421-3.352c-1.138-2.889-2.777-3.658-2.777-3.658c-2.27-1.55.172-1.519.172-1.519c2.51.177 3.83 2.577 3.83 2.577c2.23 3.82 5.851 2.716 7.276 2.076c.227-1.614.873-2.716 1.586-3.34c-5.55-.631-11.387-2.777-11.387-12.357c0-2.729.974-4.962 2.574-6.708c-.258-.632-1.116-3.175.245-6.616c0 0 2.098-.673 6.874 2.563c1.994-.556 4.133-.832 6.259-.843c2.124.01 4.262.287 6.258.843c4.773-3.236 6.868-2.563 6.868-2.563c1.365 3.44.507 5.984.25 6.616c1.603 1.746 2.57 3.98 2.57 6.708c0 9.605-5.846 11.718-11.414 12.336c.896.772 1.696 2.298 1.696 4.63c0 3.342-.031 6.038-.031 6.858c0 .669.451 1.447 1.719 1.203C45.844 48.407 53 39.043 53 28C53 14.194 41.806 3 27.998 3C14.194 3 3 14.193 3 28"/>
        </svg>
    )
}

const EmailIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
            <path fill="currentColor" fill-rule="evenodd"
                  d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"/>
        </svg>
    )
}

export default Contact;
