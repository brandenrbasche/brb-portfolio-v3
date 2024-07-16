import React from 'react';
import {WorkCard} from "@/components/ui/WorkCard";
import Link from "next/link";

const Work = () => {
    return (
        <div className='h-auto w-screen p-4 grid grid-cols-2 items-center justify-center gap-4'>
            <Link href='https://github.com/brandenrbasche/brb-portfolio-v3' target='_blank'>
                <WorkCard title="Portfolio"/>
            </Link>
            <Link href='https://github.com/oslabs-beta/SvelteScope' target='_blank'>
                <WorkCard title="SvelteScope"/>
            </Link>
            <Link href='https://github.com/brandenrbasche/planet-chrome-v1' target='_blank'>
                <WorkCard title="Planet Chrome"/>
            </Link>
            <Link href='https://github.com/brandenrbasche/chordsmith' target='_blank'>
                <WorkCard title="Chordsmith"/>
            </Link>
        </div>
    );
};

export default Work;
