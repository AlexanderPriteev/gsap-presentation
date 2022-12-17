import React, { RefObject, useEffect, useReducer, useRef } from 'react';
import gsap from 'gsap';

export const Ticker = () => {
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  const speedReducer = (state: number, action: string) => {
    let newState = state;
    switch (action) {
      case 'fast':
        newState = state + 5;
        break;
      case 'slow':
        newState = state - 5;
        break;
      default:
        state = 60;
    }
    return newState > 60 || newState <= 0 ? state : newState;
  };
  const [speed, speedDispatch] = useReducer(speedReducer, 60);
  useEffect(() => {
    gsap.ticker.fps(speed);
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

  const fast = () => speedDispatch('fast');
  const slow = () => speedDispatch('slow');
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={slow}>
          -
        </span>
        <span className="btn" onClick={fast}>
          +
        </span>
        <span className="fps">fps: {speed}</span>
      </div>
      <div className="cart-list cart-list--block">
        <div className="cart" ref={cartRef}>
          Data
        </div>
      </div>
    </>
  );
};
