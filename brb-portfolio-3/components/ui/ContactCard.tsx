import React from 'react';
import Link from "next/link";

type Props = {
    website: string;
    link: string;
    icon: any;
}

const ContactCard = ({ website, link, icon }: Props) => {
    return (
        <Link href={link}>
            <div className='p-4 rounded-xl bg-gradient-to-r from-white/15 to-white/20 text-white font-light h-52 w-40 flex flex-col justify-between'>
                <div>{icon}</div>
                <p>{website}</p>
            </div>
        </Link>
    );
};

export default ContactCard;
