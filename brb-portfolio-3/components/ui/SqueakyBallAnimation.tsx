'use client';

import React from 'react';
import Lottie from "lottie-react";
import * as squeakyBallAnimation from '@/data/animations/squeakyBallAnimation.json';

const SqueakyBallAnimation = () => {

    return (
            <Lottie
                style={{ height: '10%', width: '10%' }}
                animationData={squeakyBallAnimation} loop={true}
            />
    );
};

export default SqueakyBallAnimation;
