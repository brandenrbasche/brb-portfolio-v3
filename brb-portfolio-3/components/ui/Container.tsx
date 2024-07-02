import React from 'react';
import {twMerge} from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className='p-2'>{children}</div>
        // <div className='flex w-screen justify-between h-auto'>
        //     {/*only apply center line on widths > 1000px */}
        //     <div className='w-1/2 border-r-[1px] border-black' />
        //     {/*right*/}
        //     <div className='w-1/2'>
        //         { children }
        //     </div>
        // </div>
    );
};

export default Container;
