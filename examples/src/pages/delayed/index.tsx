import gsap from 'gsap';
import React, { RefObject, useRef, useState } from 'react';
import { CartMove } from '../set';

export const DelayedCall = () => {
  const [cartMove, setCartMove] = useState(true);
  const cartMoveRef = useRef() as RefObject<HTMLDivElement>;
  const [countdown, setCountdown] = useState(5);
  const [toggle, setToggle] = useState(true);

  const countdownMove = (val?: number) => {
    if (val) {
      setCountdown(val);
    }
    let timer = countdown;
    const interval = setInterval(() => {
      if (--timer) {
        setCountdown(timer);
      } else {
        clearInterval(interval);
        setToggle(true);
      }
    }, 1000);
  };

  const hideCart = (el: HTMLDivElement, xVal: number) => {
    gsap.to(el, {
      opacity: 0,
      x: xVal,
      scale: 0,
      onComplete: () => {
        setCartMove(!cartMove);
      },
    });
  };
  const cartMoveController = () => {
    const time = 5;
    if (cartMove && toggle) {
      gsap.delayedCall(time, hideCart, [cartMoveRef.current, -400]);
      countdownMove();
      setToggle(false);
    } else {
      setCountdown(time);
      setCartMove(!cartMove);
    }
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={cartMoveController}>
          {cartMove ? `hide(${countdown})` : 'show'} cart move
        </span>
      </div>
      <div className="cart-list">{cartMove && <CartMove elRef={cartMoveRef} />}</div>
    </>
  );
};
