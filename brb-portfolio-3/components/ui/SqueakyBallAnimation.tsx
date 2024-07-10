'use client';

import React from 'react';
import Lottie from "lottie-react";
import * as squeakyBallAnimation from '@/data/animations/squeakyBallAnimation.json';

const SqueakyBallAnimation = () => {

    return (
        <div className='flex items-end justify-center'>
            <Lottie
                style={{
                    width: '50%',
                    height: '50%'
                }}
                animationData={squeakyBallAnimation} loop={true}
            />
        </div>
    );
};

export default SqueakyBallAnimation;
