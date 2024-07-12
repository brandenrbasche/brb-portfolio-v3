import React from 'react';
import Link from "next/link";

type Props = {
    website: string;
    link: string;
    icon: any;
}

const ContactCard = ({ website, link, icon }: Props) => {
    return (
        <Link href={link} className='group' target="_blank">
            <div className='p-4 rounded-xl bg-white/10 group-hover:bg-white/15 transition ease-in-out text-white text-sm font-light h-52 w-40 flex flex-col justify-between'>
                <div >{icon}</div>
                <p className='font-extralight'>{website}</p>
            </div>
        </Link>
    );
};

export default ContactCard;
