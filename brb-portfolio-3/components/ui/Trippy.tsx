'use client';

import { useTransform, MotionValue, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const TrippyScroll = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

    return (
        <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
            <div className="sticky top-0 h-screen bg-white">
                <Trippy rotate={rotate}  />
            </div>
        </div>
    );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (
    count: number,
    color: string,
    rotate: MotionValue
) => {
    if (count === NUM_SECTIONS) {
        return <></>;
    }

    const nextColor = color === "black" ? "white" : "black";

    return (
        <Section rotate={rotate} background={color}>
            {generateSections(count + 1, nextColor, rotate)}
        </Section>
    );
};

const Trippy = ({ rotate }: { rotate: MotionValue }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden bg-black">
            {generateSections(0, "black", rotate)}
        </motion.div>
    );
};

const Section = ({
                     background,
                     children,
                     rotate,
                 }: {
    background: string;
    rotate: MotionValue;
    children?: JSX.Element;
}) => {
    return (
        <motion.div
            className="relative h-full w-full origin-center"
            style={{
                background,
                rotate,
                padding: PADDING,
            }}
        >
            {children}
        </motion.div>
    );
};

export default TrippyScroll;

// 'use client';
//
// import { useTransform, useScroll, motion } from "framer-motion";
// import React, { useRef } from 'react';
//
// const Trippy = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//     });
//
//     const scale = useTransform(
//         scrollYProgress,
//         [0, 0.65, 0.8, 1],
//         [1, 1, 0.9, 1.25]
//     );
//     const rotate = useTransform(
//         scrollYProgress,
//         [0, .25, 1],
//         ["0deg", "0deg", "60deg"]
//     );
//     const top = useTransform(
//         scrollYProgress,
//         [0, 0.25],
//         ["80%", "0%"]
//     );
//
//
//     return (
//         <div ref={targetRef} className='relative z-0 h-[600vh]'>
//             <div className='sticky top-0 h-screen'>
//                <TrippyScroll rotate={rotate} />
//             </div>
//         </div>
//     );
// };
//
// const NUM_SECTIONS: number = 30;
// const PADDING: string = `${100 / NUM_SECTIONS / 2}vmin`;
//
// const generateSections = (count, color, scale, rotate) => {
//     // recursive base case:
//     if (count === NUM_SECTIONS) {
//         return <></>
//     }
//
//     const nextColor = color === "black" ? "white" : "black";
//     return (
//         <Section rotate={rotate} background={color}>
//             {generateSections(count + 1, nextColor, scale, rotate)}
//         </Section>
//     )
// }
//
// const TrippyScroll = ({ rotate, scale, top }) => {
//     return <motion.div
//         style={{ top }}
//         className='absolute inset-0 overflow-hidden bg-black '
//     >
//         {generateSections(0, "black", scale, rotate)}
//     </motion.div>
// };
//
// const Section = ({ background, children, rotate }) => {
//     return (
//         <motion.div
//             className='relative h-full w-full origin-center'
//             style={{
//                 background,
//                 rotate,
//                 padding: PADDING
//             }}
//         >
//             {children}
//         </motion.div>
//     )
// }
//
// export default Trippy;
