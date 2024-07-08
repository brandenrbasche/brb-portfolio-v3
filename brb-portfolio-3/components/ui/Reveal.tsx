'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: 'fit-content' | '100%';
    revealColor?: string;
    delay?: number;
}

const Reveal = ({ children, width = 'fit-content', revealColor = 'black', delay = 1 }: Props ) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // toggle reveal animation
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{position: 'relative', width, overflow: 'hidden', paddingBottom: 5}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 1, delay: .75}}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.75, ease: "easeOut", delay: delay}}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: revealColor,
                    zIndex: 20,
                }}
            />
        </div>
    );
};

export default Reveal;
