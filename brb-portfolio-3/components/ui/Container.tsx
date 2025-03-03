import React from 'react';
import {twMerge} from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={twMerge('p-5 flex flex-col justify-center items-center', className)}>{children}</div>
    );
};

export default Container;
