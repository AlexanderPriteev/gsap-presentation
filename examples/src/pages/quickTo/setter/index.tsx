import gsap from 'gsap';
import React, { RefObject, useRef } from 'react';
import logoImage from '../../../assets/sibers-logo.png';

export const QuickSetter = () => {
  const imageMoveRef = useRef() as RefObject<HTMLImageElement>;

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = imageMoveRef.current;
    gsap.quickSetter(image, 'left')(0);
    gsap.quickSetter(image, 'top')(0);
    gsap.quickSetter(image, 'x', 'px')(e.pageX);
    gsap.quickSetter(image, 'y', 'px')(e.pageY);
  };

  return (
    <div className="quick" onMouseMove={(e) => mouseMove(e)}>
      <img src={logoImage} className="quick-image" ref={imageMoveRef} />
    </div>
  );
};
