import React, { RefObject, useEffect, useReducer, useRef, useState } from 'react';
import gsap from 'gsap';

export const TimelineGlobal = () => {
  const [isPause, setIsPause] = useState(false);
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  const speedReducer = (state: number, action: string) => {
    let newState = state;
    switch (action) {
      case 'fast':
        newState = state * 2;
        break;
      case 'slow':
        newState = state / 2;
        break;
      default:
        state = 1;
    }
    newState = newState > 16 || newState < 0.05 ? state : newState;
    return newState;
  };
  const [speed, speedDispatch] = useReducer(speedReducer, 1);
  useEffect(() => {
    gsap.globalTimeline.timeScale(speed);
  }, [speed]);
  useEffect(() => {
    const cart = cartRef.current;
    gsap
      .timeline({ repeat: -1 })
      .to(cart, { y: 190, duration: 1 })
      .to(cart, { x: 430, duration: 2 })
      .to(cart, { y: 0, duration: 1 })
      .to(cart, { x: 0, duration: 2 });
  }, []);

  const pause = () => {
    if (isPause) {
      gsap.globalTimeline.play();
    } else {
      gsap.globalTimeline.pause();
    }
    setIsPause(!isPause);
  };

  const fast = () => speedDispatch('fast');
  const slow = () => speedDispatch('slow');
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={pause}>
          {isPause ? 'play' : 'pause'}
        </span>
        <span className="btn" onClick={slow}>
          -
        </span>
        <span className="btn" onClick={fast}>
          +
        </span>
      </div>
      <div className="cart-list cart-list--block">
        <div className="cart" ref={cartRef}>
          Data
        </div>
      </div>
    </>
  );
};
