'use client';

import React, {useEffect, useRef} from 'react';
import {twMerge} from "tailwind-merge";
import {dmSans} from "@/data/fonts";

type Props = {
    text: string;
}

const ContainerFitText = ({ text }: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        console.log('useeffect hit');
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, [containerRef.current?.offsetWidth]);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + "px";
    };

    return (
        <div
            className="flex items-end"
            ref={containerRef}
        >
      <span
          className={twMerge(dmSans.className, "text-justify text-8xl leading-none tracking-tightest font-black uppercase")}
          ref={textRef}
      >
        {text}
      </span>
        </div>
    );
};

export default ContainerFitText;
