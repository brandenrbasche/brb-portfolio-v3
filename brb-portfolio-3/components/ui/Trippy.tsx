'use client';

import { useTransform, MotionValue, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const TrippyScroll = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
    // const scale = useTransform(scrollYProgress, [0, 1], ['0', '25'])

    return (
        <div ref={targetRef} className="w-screen relative z-0 h-screen bg-neutral-200">
            <div className="sticky top-0 h-screen bg-white">
                {/*<Trippy rotate={rotate}  />*/}
                <Trippy  />
                {/*<Trippy scale={scale} />*/}
            </div>
        </div>
    );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (
    count: number,
    color: string,
    // rotate: MotionValue
) => {
    if (count === NUM_SECTIONS) {
        return <></>;
    }

    const nextColor = color === "black" ? "white" : "black";

    return (
        // <Section rotate={rotate} background={color}>
        <Section background={color}>
            {/*{generateSections(count + 1, nextColor, rotate)}*/}
            {generateSections(count + 1, nextColor)}
        </Section>
    );
};

// const Trippy = ({ rotate }: { rotate: MotionValue }) => {
const Trippy = () => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden bg-black">
            {/*{generateSections(0, "black", rotate)}*/}
            {generateSections(0, "black")}
        </motion.div>
    );
};

const Section = ({
                     background,
                     children,
                     // scale
                     // rotate,
                 }: {
    background: string;
    // scale: MotionValue;
    // rotate: MotionValue;
    children?: JSX.Element;
}) => {
    return (
        <motion.div
            className="relative h-full w-full origin-center"
            style={{
                background,
                // scale,
                // rotate,
                padding: PADDING,
            }}
        >
            {children}
        </motion.div>
    );
};

export default TrippyScroll;
