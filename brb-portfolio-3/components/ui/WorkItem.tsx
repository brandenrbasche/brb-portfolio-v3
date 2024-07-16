'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const WorkItem = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='bg-black h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center w-full gap-4 mx-auto px-8 relative'
        >
            <p className='text-white z-20'>Insert GitHub repo here</p>
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='h-full w-full absolute inset-0'
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90'></div>
        </div>
    );
};

export default WorkItem;
