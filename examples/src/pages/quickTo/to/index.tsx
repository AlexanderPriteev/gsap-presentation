import gsap from 'gsap';
import React, { RefObject, useRef } from 'react';
import logoImage from '../../../assets/sibers-logo.png';

export const QuickTo = () => {
  const imageMoveRef = useRef() as RefObject<HTMLImageElement>;
  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = imageMoveRef.current;
    gsap.quickTo(image, 'x', { left: 0, ease: 'bounce.out' })(e.pageX);
    gsap.quickTo(image, 'y', { top: 0, ease: 'bounce.out' })(e.pageY);
  };
  return (
    <div className="quick" onMouseMove={(e) => mouseMove(e)}>
      <img src={logoImage} className="quick-image" ref={imageMoveRef} />
    </div>
  );
};
