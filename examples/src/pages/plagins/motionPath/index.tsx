import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import logoImage from '../../../assets/sibers-logo.png';

export const PathMotion = () => {
  gsap.registerPlugin(MotionPathPlugin);
  const imageMoveRef = useRef() as RefObject<HTMLImageElement>;
  const [pathValue, setPathValue] = useState('');

  const resetMove = () => {
    gsap.killTweensOf(imageMoveRef.current);
    gsap.set(imageMoveRef.current, { x: 0, y: 0, scale: 1, rotate: 0 });
  };
  const circle = () => {
    gsap.killTweensOf(imageMoveRef.current);
    const path = 'M-200,0a200,200 0 1,0 400,0a200,200 0 1,0 -400,0';
    resetMove();
    gsap.from(imageMoveRef.current, {
      motionPath: {
        path: path,
        autoRotate: true,
      },
      duration: 8,
      repeat: -1,
      repeatDelay: 0,
      ease: 'none',
    });
    setPathValue(path);
  };
  const infinity = () => {
    const path =
      'M109 400C-35 395 -31 75 101 42C235 9 311 329 476 329C640 329 644 -34 476 3C308 42 254 406 109 400Z';
    gsap.killTweensOf(imageMoveRef.current);
    resetMove();
    gsap.from(imageMoveRef.current, {
      motionPath: {
        path: path,
        autoRotate: true,
        offsetX: -300,
        offsetY: -200,
      },
      duration: 6,
      repeat: -1,
      ease: 'none',
    });
    setPathValue(path);
  };
  const waves = () => {
    const path = 'M1 39C123 -61 136 89 238 23C341 -42 380 82 443 23C505 -35 601 39 601 39';
    resetMove();
    gsap.to(imageMoveRef.current, {
      motionPath: {
        path: path,
        offsetX: -300,
        offsetY: -20,
        autoRotate: true,
      },
      duration: 4,
      repeat: -1,
      ease: 'none',
      yoyo: true,
    });
    setPathValue(path);
  };
  const scale = () => {
    const path = [{ scale: 0.5 }, { scale: 2 }, { scale: 1.2 }, { scale: 0.7 }];
    gsap.killTweensOf(imageMoveRef.current);
    gsap.set(imageMoveRef.current, { x: 0, y: 0, scale: 1, rotate: 0 });
    gsap.to(imageMoveRef.current, {
      motionPath: {
        path: path,
      },
      duration: 3,
      repeat: -1,
      ease: 'bounce.inOut',
      yoyo: true,
    });
    setPathValue(JSON.stringify(path));
  };
  useEffect(() => {
    waves();
  }, []);

  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={infinity}>
          infinity
        </span>
        <span className="btn" onClick={circle}>
          circle
        </span>
        <span className="btn" onClick={waves}>
          waves
        </span>
        <span className="btn" onClick={scale}>
          scale
        </span>
      </div>
      <span className="path">path: {pathValue}</span>
      <div className="quick">
        <img src={logoImage} className="quick-image" ref={imageMoveRef} />
      </div>
    </>
  );
};
